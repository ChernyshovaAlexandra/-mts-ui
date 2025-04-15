import { FC, memo } from "react";
import { Wrapper, CrumbLink, CrumbText, Separator } from "./style";

export interface BreadcrumbsProps {
  crumbs: Array<{
    name: string;
    path: string;
  }>;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = memo(({ crumbs }) => {
  return (
    <Wrapper>
      <CrumbLink href="/">Главная</CrumbLink>

      {crumbs.map((crumb, idx) => (
        <span key={idx}>
          <Separator>/</Separator>
          {idx === crumbs.length - 1 ? (
            <CrumbText>{crumb.name}</CrumbText>
          ) : (
            <CrumbLink href={crumb.path}>{crumb.name}</CrumbLink>
          )}
        </span>
      ))}
    </Wrapper>
  );
});
