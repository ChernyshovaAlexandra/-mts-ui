import styled from "styled-components";
import { mts_bg_secondary_elevated } from "../../consts";

export const CardWrapper = styled.div`
  background: ${mts_bg_secondary_elevated};
  border-radius: 24px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 288px;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;

export const TagWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
`;

export const ImageWrapper = styled.div`
  border-radius: 16px;
  background: #fff;
  cursor: pointer;
  width: 100%;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
  }
`;

export const ContentInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 12px;
  text-align: center;

  p {
    text-overflow: ellipsis;
    white-space: break-spaces;
    text-align: left;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 280px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 20px;
    aspect-ratio: 1/1;
  }

  .slick-slide > div {
    width: 100%;
    height: 100%;
  }

  .slick-list {
    overflow: visible;
  }
`;

export const ArrowButton = styled.button<{
  right?: boolean;
  disabled?: boolean;
}>`
  position: absolute;
  top: 50%;
  ${(p) => (p.right ? "right: 8px;" : "left: 8px;")}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 2;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  filter: ${({ disabled }) =>
    disabled ? "grayscale(1) brightness(2)" : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.span<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#FF0032" : "transparent")};
  border: 2px solid #ff0032;
`;
