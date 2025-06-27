import styled from "styled-components";
import { mts_bg_secondary_elevated, mts_text_primary } from "../../consts";

export const StyledTag = styled.div`
  display: inline-block;
  background: ${mts_bg_secondary_elevated};
  color: ${mts_text_primary};
  font-size: 12px;

  padding: 4px 8px;
  border-radius: 6px;
  text-transform: uppercase;
  font-family: inherit;
`;
