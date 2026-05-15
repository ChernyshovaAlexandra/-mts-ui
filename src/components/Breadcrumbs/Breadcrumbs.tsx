// Breadcrumbs.tsx
import { FC, memo } from "react";
import { IconChevronRight } from "../../icons/IconChevronRight/IconChevronRight";
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
}

export const Breadcrumbs: FC<BreadcrumbsProps> = memo(({ crumbs }) => {
  return (
    <nav aria-label="Хлебные крошки">
      <Wrapper>
        <CrumbItem>
          <CrumbLink href="/">Главная</CrumbLink>
        </CrumbItem>

        {crumbs.map((crumb, idx) => (
          <CrumbItem key={idx}>
            <Separator><IconChevronRight width={24} height={24} /></Separator>
            {idx === crumbs.length - 1 ? (
              <CrumbText aria-current="page">{crumb.name}</CrumbText>
            ) : (
              <CrumbLink href={crumb.path}>{crumb.name}</CrumbLink>
            )}
          </CrumbItem>
        ))}
      </Wrapper>
    </nav>
  );
});
