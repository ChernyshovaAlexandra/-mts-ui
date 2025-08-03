import styled from "styled-components";
import { StyledLabel } from "../Input/style";

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GroupLabel = styled(StyledLabel)`
  margin-bottom: 4px;
  line-height: 1.4;
`;
export const RadiosWrapper = styled.div`
  display: flex;
  gap: 8px;

  &[data-direction="vertical"] {
    flex-direction: column;
  }

  &[data-direction="horizontal"] {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 4px;
  }
`;
