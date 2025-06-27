import styled from "styled-components";
import { mts_brand_red } from "../../consts";

export interface BurgerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Размер контейнера-кнопки (ширина и высота) */
  size?: number | string;
  /** Размер (width/height) самого SVG-иконка */
  iconSize?: number | string;
  /** Описание для скринридеров */
  ariaLabel?: string;
}

export const Burger: React.FC<BurgerProps> = ({
  size = 44,
  iconSize = 18,
  ariaLabel = "Открыть меню",
  ...rest
}) => {
  return (
    <StyledButton size={size} aria-label={ariaLabel} type="button" {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 18 18"
        fill="none"
        role="img"
        focusable="false"
        aria-hidden="true"
      >
        <path
          d="M1 1H17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 9H17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 17H17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </StyledButton>
  );
};

const StyledButton = styled.button<{ size: number | string }>`
  width: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  border-radius: 16px;
  background: ${mts_brand_red};
  display: grid;
  place-items: center;
  cursor: pointer;
  border: none;
  padding: 0;

  &:hover {
    background: #e4002e;
  }

  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`;
