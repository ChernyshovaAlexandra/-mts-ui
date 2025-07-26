import type { FC, KeyboardEvent, ReactNode } from "react";
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
  /** Кастомные стрелки */
  customPrevArrow?: ReactNode;
  customNextArrow?: ReactNode;

  /** Кастомные точки */
  customDots?: (
    activeIndex: number,
    goTo: (index: number) => void
  ) => ReactNode;

  ariaLabel?: string;
};

export const Carousel: FC<CarouselProps> = ({
  items,
  slidesToShow = 3,
  slidesToScroll = 1,
  infinite = false,
  arrowColor = "#FF0032",
  showDots = false,
  customPrevArrow,
  customNextArrow,
  customDots,
  ariaLabel = "Карусель с контентом",
}) => {
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = items.length;
  const lastSlideIndex = totalSlides - slidesToShow;

  const isPrevDisabled = !infinite && currentSlide === 0;
  const isNextDisabled = !infinite && currentSlide >= lastSlideIndex;

  const goTo = (index: number) => {
    carouselRef.current?.goTo(index);
    setCurrentSlide(index);
  };

  const renderDefaultArrow = (direction: "left" | "right") => {
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

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      carouselRef.current?.prev();
    }
    if (e.key === "ArrowRight") {
      carouselRef.current?.next();
    }
  };

  return (
    <CarouselContainer
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {customPrevArrow ?? renderDefaultArrow("left")}

      <AntdCarousel
        ref={carouselRef}
        dots={false}
        infinite={infinite}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        beforeChange={(_, next) => setCurrentSlide(next)}
        style={{ padding: "8px 32px" }}
        aria-live="polite"
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{ padding: "0 8px" }}
            role="group"
            aria-roledescription="slide"
            aria-label={`Слайд ${index + 1} из ${totalSlides}`}
            aria-current={index === currentSlide ? "true" : undefined}
          >
            {item}
          </div>
        ))}
      </AntdCarousel>

      {/* Правая стрелка */}
      {customNextArrow ?? renderDefaultArrow("right")}

      {/* Точки */}
      {showDots &&
        (customDots ? (
          customDots(currentSlide, goTo)
        ) : (
          <DotContainer role="tablist" aria-label="Индикаторы слайдов">
            {items.map((_, index) => (
              <Dot
                key={index}
                active={index === currentSlide}
                onClick={() => goTo(index)}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={`Перейти к слайду ${index + 1} из ${totalSlides}`}
              />
            ))}
          </DotContainer>
        ))}
    </CarouselContainer>
  );
};
export default Carousel;
