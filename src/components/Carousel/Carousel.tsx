import type { FC, ReactNode } from "react";
import styled from "styled-components";
import { Carousel as AntdCarousel } from "antd";
import { IconArrowCircle } from "../../icons";

const CarouselContainer = styled.div`
  position: relative;
`;

const ArrowButton = styled.button<{ right?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.right ? "right: -20px;" : "left: -20px;")}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export type CarouselProps = {
  items: ReactNode[];
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
  arrowColor?: string;
};

export const Carousel: FC<CarouselProps> = ({
  items,
  slidesToShow = 3,
  slidesToScroll = 1,
  infinite = false,
  arrowColor = "#FF0032",
}) => {
  let carouselRef: any;

  const renderArrow = (direction: "left" | "right") => (
    <ArrowButton
      onClick={() =>
        direction === "left" ? carouselRef?.prev() : carouselRef?.next()
      }
      right={direction === "right"}
      aria-label={`Прокрутить ${direction === "left" ? "влево" : "вправо"}`}
    >
      <IconArrowCircle direction={direction} color={arrowColor} />
    </ArrowButton>
  );

  return (
    <CarouselContainer role="region" aria-label="Карусель с контентом">
      {renderArrow("left")}

      <AntdCarousel
        ref={(ref) => (carouselRef = ref)}
        dots={false}
        infinite={infinite}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        style={{ padding: "8px 32px" }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ padding: "0 8px" }}>
            {item}
          </div>
        ))}
      </AntdCarousel>

      {renderArrow("right")}
    </CarouselContainer>
  );
};
