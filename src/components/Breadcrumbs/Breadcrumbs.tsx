import { FC, memo } from "react";
import { IconChevronRight } from "../../icons/IconChevronRight/IconChevronRight";
import { IconLeft } from "../../icons/IconLeft/IconLeft";
import {
  Wrapper,
  CrumbLink,
  CrumbText,
  Separator,
  CrumbItem,
} from "./style";

export interface BreadcrumbsProps {
  crumbs: Array<{
    name: string;
    path: string;
  }>;
  size?: "s" | "m";
  iconLeft?: boolean;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = memo(({ crumbs, size = "m", iconLeft }) => {
  const iconSize = size === "s" ? 16 : 24;

  return (
    <nav aria-label="Хлебные крошки">
      <Wrapper>
        <CrumbItem>
          {iconLeft && (
            <Separator>
              <IconLeft width={iconSize} height={iconSize} />
            </Separator>
          )}
          <CrumbLink href="/" $size={size}>Главная</CrumbLink>
        </CrumbItem>

        {crumbs.map((crumb, idx) => (
          <CrumbItem key={idx}>
            <Separator><IconChevronRight width={iconSize} height={iconSize} /></Separator>
            {idx === crumbs.length - 1 ? (
              <CrumbText $size={size} aria-current="page">{crumb.name}</CrumbText>
            ) : (
              <CrumbLink href={crumb.path} $size={size}>{crumb.name}</CrumbLink>
            )}
          </CrumbItem>
        ))}
      </Wrapper>
    </nav>
  );
});
