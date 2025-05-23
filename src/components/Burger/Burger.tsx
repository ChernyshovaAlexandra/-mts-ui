import styled from "styled-components";
import { mts_brand_red } from "../../consts";

export interface BurgerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер контейнера-кнопки (ширина и высота) */
  size?: number | string;
  /** Размер (width/height) самого SVG-иконка */
  iconSize?: number | string;
}

export const Burger: React.FC<BurgerProps> = ({
  size = 44,
  iconSize = 18,
  onClick,
  ...rest
}) => {
  return (
    <StyledContainer size={size} onClick={onClick} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 18 18"
        fill="none"
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
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ size: number | string }>`
  width: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  border-radius: 16px;
  background: ${mts_brand_red};
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    background: #e4002e;
  }
`;
