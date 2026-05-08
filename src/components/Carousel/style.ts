import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ArrowButton = styled.button<{
  $right?: boolean;
}>`
  position: absolute;
  top: 50%;
  ${({ $right }) => ($right ? "right: -20px;" : "left: -20px;")}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({ disabled }) =>
    disabled ? "grayscale(1) brightness(2)" : "none"};
`;

export const DotContainer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.span<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#FF0032" : "transparent")};
  border: 2px solid #ff0032;
`;
