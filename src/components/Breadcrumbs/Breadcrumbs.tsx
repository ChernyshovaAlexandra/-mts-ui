import { FC, memo } from "react";
import { IconChevronRight } from "../../icons/IconChevronRight/IconChevronRight";
import { IconLeft } from "../../icons/IconLeft/IconLeft";
import {
  Wrapper,
  CrumbLink,
  CrumbText,
  Separator,
  CrumbItem,
  HiddenCrumbsDropdown,
  HiddenCrumbsItem,
  HiddenCrumbsLink,
  HiddenCrumbsTrigger,
} from "./style";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export interface BreadcrumbsProps {
  crumbs: BreadcrumbItem[];
  size?: "s" | "m";
  iconLeft?: boolean;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = memo(({ crumbs, size = "m", iconLeft }) => {
  const iconSize = size === "s" ? 16 : 24;
  const allCrumbs: BreadcrumbItem[] = [{ name: "Главная", path: "/" }, ...crumbs];
  const shouldCollapse = allCrumbs.length > 3;
  const visibleCrumbs = shouldCollapse
    ? allCrumbs.slice(-2)
    : allCrumbs;
  const hiddenCrumbs = shouldCollapse ? allCrumbs.slice(1, -2) : [];

  return (
    <nav aria-label="Хлебные крошки">
      <Wrapper>
        <CrumbItem>
          {iconLeft && (
            <Separator>
              <IconLeft width={iconSize} height={iconSize} />
            </Separator>
          )}
          <CrumbLink href={allCrumbs[0].path} $size={size}>{allCrumbs[0].name}</CrumbLink>
        </CrumbItem>

        {shouldCollapse && (
          <CrumbItem>
            <Separator><IconChevronRight width={iconSize} height={iconSize} /></Separator>
            <HiddenCrumbsTrigger
              type="button"
              $size={size}
              aria-haspopup="menu"
              aria-label="Показать скрытые страницы"
            >
              ...
            </HiddenCrumbsTrigger>
            <HiddenCrumbsDropdown role="menu">
              {hiddenCrumbs.map((hiddenCrumb) => (
                <HiddenCrumbsItem key={hiddenCrumb.path} role="none">
                  <HiddenCrumbsLink href={hiddenCrumb.path} role="menuitem" $size={size}>
                    {hiddenCrumb.name}
                  </HiddenCrumbsLink>
                </HiddenCrumbsItem>
              ))}
            </HiddenCrumbsDropdown>
          </CrumbItem>
        )}

        {(shouldCollapse ? visibleCrumbs : visibleCrumbs.slice(1)).map((crumb, idx, items) => {
          const isCurrent = idx === items.length - 1;

          return (
            <CrumbItem key={`${crumb.path}-${idx}`}>
              <Separator><IconChevronRight width={iconSize} height={iconSize} /></Separator>
              {isCurrent ? (
                <CrumbText $size={size} aria-current="page">{crumb.name}</CrumbText>
              ) : (
                <CrumbLink href={crumb.path} $size={size}>{crumb.name}</CrumbLink>
              )}
            </CrumbItem>
          );
        })}
      </Wrapper>
    </nav>
  );
});
