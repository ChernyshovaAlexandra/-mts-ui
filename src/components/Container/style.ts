import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";

export const StyledContainer = styled.div`
  margin: auto;
  box-sizing: border-box;
  width: 100%;
  max-width: calc(100% - 40px);
  ${visuallyImpairedMixin};
`;
