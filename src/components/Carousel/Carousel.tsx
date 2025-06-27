import type { FC, ReactNode } from "react";
import { Carousel as AntdCarousel } from "antd";
import { CarouselContainer, ArrowButton, DotContainer, Dot } from "./style";
import { IconArrowCircle } from "../../icons";
import { useRef, useState } from "react";

export type CarouselProps = {
  items: ReactNode[];
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
  arrowColor?: string;
  showDots?: boolean;
};

export const Carousel: FC<CarouselProps> = ({
  items,
  slidesToShow = 3,
  slidesToScroll = 1,
  infinite = false,
  arrowColor = "#FF0032",
  showDots = false,
}) => {
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = items.length;
  const lastSlideIndex = totalSlides - slidesToShow;

  const isPrevDisabled = !infinite && currentSlide === 0;
  const isNextDisabled = !infinite && currentSlide >= lastSlideIndex;

  const renderArrow = (direction: "left" | "right") => {
    const isDisabled = direction === "left" ? isPrevDisabled : isNextDisabled;

    return (
      <ArrowButton
        onClick={() =>
          direction === "left"
            ? carouselRef.current?.prev()
            : carouselRef.current?.next()
        }
        right={direction === "right"}
        disabled={isDisabled}
        aria-label={`Прокрутить ${direction === "left" ? "влево" : "вправо"}`}
      >
        <IconArrowCircle direction={direction} color={arrowColor} />
      </ArrowButton>
    );
  };

  return (
    <CarouselContainer role="region" aria-label="Карусель с контентом">
      {renderArrow("left")}

      <AntdCarousel
        ref={carouselRef}
        dots={false}
        infinite={infinite}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        beforeChange={(_, next) => setCurrentSlide(next)}
        style={{ padding: "8px 32px" }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ padding: "0 8px" }}>
            {item}
          </div>
        ))}
      </AntdCarousel>

      {renderArrow("right")}

      {showDots && (
        <DotContainer>
          {items.map((_, index) => (
            <Dot key={index} active={index === currentSlide} />
          ))}
        </DotContainer>
      )}
    </CarouselContainer>
  );
};
export default Carousel;
