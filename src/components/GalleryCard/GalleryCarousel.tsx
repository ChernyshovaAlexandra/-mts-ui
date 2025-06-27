import { useRef, useState } from "react";
import { Carousel as AntdCarousel } from "antd";
import { IconArrowCircle } from "../../icons";
import { CarouselContainer, ArrowButton, DotContainer, Dot } from "./style";
import { mts_bg_secondary_elevated } from "../../consts";

type GalleryCarouselProps = {
  items: React.ReactNode[];
};

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ items }) => {
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === items.length - 1;

  const renderArrow = (dir: "left" | "right") => {
    const isDisabled = dir === "left" ? isPrevDisabled : isNextDisabled;

    return (
      <ArrowButton
        right={dir === "right"}
        disabled={isDisabled}
        onClick={() =>
          dir === "left"
            ? carouselRef.current?.prev()
            : carouselRef.current?.next()
        }
        aria-label={`Прокрутить ${dir === "left" ? "влево" : "вправо"}`}
      >
        <IconArrowCircle
          style={{
            fill: mts_bg_secondary_elevated,
          }}
          outlined={false}
          direction={dir}
          color="#FF0032"
        />
      </ArrowButton>
    );
  };

  return (
    <CarouselContainer>
      {renderArrow("left")}

      <AntdCarousel
        ref={carouselRef}
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        beforeChange={(_, next) => setCurrentSlide(next)}
      >
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </AntdCarousel>

      {renderArrow("right")}

      <DotContainer>
        {items.map((_, index) => (
          <Dot key={index} active={index === currentSlide} />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
};
