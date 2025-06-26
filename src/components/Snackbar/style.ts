import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_text_primary } from "../../consts";
import "../../assets/fonts.css";

export const SnackbarWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  left: auto;
  right: 24px;
  margin: auto;
  width: calc(100% - 48px);
  padding: 24px 32px;
  color: ${mts_text_primary};
  background-color: #fff;
  border-radius: 24px;
  font:
    17px "MTS Compact",
    "Arial",
    sans-serif;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.12),
    0 12px 20px rgba(0, 0, 0, 0.14);
  z-index: 9999;
  animation: fade-in 0.3s ease-out;
  max-width: 80%;
  ${visuallyImpairedMixin};

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
