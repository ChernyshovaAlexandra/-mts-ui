// Breadcrumbs.tsx
import { FC, memo } from "react";
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
            <Separator aria-hidden="true">/</Separator>
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
