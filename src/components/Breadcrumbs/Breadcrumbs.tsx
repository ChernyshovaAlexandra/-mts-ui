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
  textColor?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = memo(({ crumbs, size = "m", iconLeft, textColor }) => {
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
            <Separator $textColor={textColor}>
              <IconLeft width={iconSize} height={iconSize} />
            </Separator>
          )}
          <CrumbLink href={allCrumbs[0].path} $size={size} $textColor={textColor}>{allCrumbs[0].name}</CrumbLink>
        </CrumbItem>

        {shouldCollapse && (
          <CrumbItem>
            <Separator $textColor={textColor}><IconChevronRight width={iconSize} height={iconSize} /></Separator>
            <HiddenCrumbsTrigger
              type="button"
              $size={size}
              $textColor={textColor}
              aria-haspopup="menu"
              aria-label="Показать скрытые страницы"
            >
              ...
            </HiddenCrumbsTrigger>
            <HiddenCrumbsDropdown role="menu">
              {hiddenCrumbs.map((hiddenCrumb) => (
                <HiddenCrumbsItem key={hiddenCrumb.path} role="none">
                  <HiddenCrumbsLink href={hiddenCrumb.path} role="menuitem" $size={size} $textColor={textColor}>
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
              <Separator $textColor={textColor}><IconChevronRight width={iconSize} height={iconSize} /></Separator>
              {isCurrent ? (
                <CrumbText $size={size} $textColor={textColor} aria-current="page">{crumb.name}</CrumbText>
              ) : (
                <CrumbLink href={crumb.path} $size={size} $textColor={textColor}>{crumb.name}</CrumbLink>
              )}
            </CrumbItem>
          );
        })}
      </Wrapper>
    </nav>
  );
});
