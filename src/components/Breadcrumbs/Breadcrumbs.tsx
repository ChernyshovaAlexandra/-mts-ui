import { FC, memo } from "react";
import { mts_greyscale_400, mts_icon_secondary, mts_text_inverted, mts_text_primary, mts_text_secondary_link } from "../../consts/index.js";
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

export type BreadcrumbsTheme = "light" | "dark";

export interface BreadcrumbsProps {
  crumbs: BreadcrumbItem[];
  useRouter?: boolean;
  size?: "s" | "m";
  iconLeft?: boolean;
  textColor?: string;
  theme?: BreadcrumbsTheme;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = memo(({ crumbs, size = "m", iconLeft, textColor, theme = "light", useRouter = false }) => {
  const iconSize = size === "s" ? 16 : 24;
  const linkColor = textColor ?? (theme === "dark" ? mts_greyscale_400 : mts_text_secondary_link);
  const currentColor = textColor ?? (theme === "dark" ? mts_text_inverted : mts_text_primary);
  const separatorColor = textColor ?? (theme === "dark" ? mts_greyscale_400 : mts_icon_secondary);
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
            <Separator $textColor={separatorColor}>
              <IconLeft width={iconSize} height={iconSize} />
            </Separator>
          )}
          <CrumbLink {...(useRouter ? { to: allCrumbs[0].path } : { url: allCrumbs[0].path })} $size={size} $textColor={linkColor}>{allCrumbs[0].name}</CrumbLink>
        </CrumbItem>

        {shouldCollapse && (
          <CrumbItem>
            <Separator $textColor={separatorColor}><IconChevronRight size={iconSize} /></Separator>
            <HiddenCrumbsTrigger
              type="button"
              $size={size}
              $textColor={linkColor}
              aria-haspopup="menu"
              aria-label="Показать скрытые страницы"
            >
              ...
            </HiddenCrumbsTrigger>
            <HiddenCrumbsDropdown role="menu">
              {hiddenCrumbs.map((hiddenCrumb) => (
                <HiddenCrumbsItem key={hiddenCrumb.path} role="none">
                  <HiddenCrumbsLink {...(useRouter ? { to: hiddenCrumb.path } : { url: hiddenCrumb.path })} role="menuitem" $size={size} $textColor={textColor}>
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
              <Separator $textColor={separatorColor}><IconChevronRight size={iconSize} /></Separator>
              {isCurrent ? (
                <CrumbText $size={size} $textColor={currentColor} aria-current="page">{crumb.name}</CrumbText>
              ) : (
                <CrumbLink {...(useRouter ? { to: crumb.path } : { url: crumb.path })} $size={size} $textColor={linkColor}>{crumb.name}</CrumbLink>
              )}
            </CrumbItem>
          );
        })}
      </Wrapper>
    </nav>
  );
});
