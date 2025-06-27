import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { GalleryCarousel } from "./GalleryCarousel";
import Text from "../Text/Text";
import Tag from "../Tag/Tag";
import { IconCamera } from "../../icons";
import {
  CardWrapper,
  CarouselContainer,
  ContentInner,
  DescriptionWrapper,
  ImageWrapper,
  TagWrapper,
} from "./style";

type GalleryCardProps = {
  description?: string;
  images: { src: string; title?: string }[];
  lightbox?: boolean;
};

export const GalleryCard: React.FC<GalleryCardProps> = ({
  description,
  images,
  lightbox = false,
}) => {
  const [lightboxToggler, setLightboxToggler] = useState(false);

  const handleClick = () => {
    if (lightbox) setLightboxToggler(!lightboxToggler);
  };

  const renderImageContent = (
    image: { src: string; title?: string },
    index: number
  ) => (
    <ContentInner key={index} onClick={handleClick}>
      {image.title && (
        <TagWrapper>
          <Tag title={image.title} />
        </TagWrapper>
      )}
      {image.src ? (
        <img src={image.src} alt={`gallery-${index}`} />
      ) : (
        <IconCamera aria-label="Нет изображения" />
      )}
    </ContentInner>
  );

  return (
    <>
      <CardWrapper>
        <ImageWrapper>
          {images.length > 1 ? (
            <CarouselContainer>
              <GalleryCarousel items={images.map(renderImageContent)} />
            </CarouselContainer>
          ) : (
            <CarouselContainer>
              {renderImageContent(images[0] ?? null, 0)}
            </CarouselContainer>
          )}
        </ImageWrapper>
        {description && (
          <DescriptionWrapper>
            <Text variant="P4-Regular-Text">{description}</Text>
          </DescriptionWrapper>
        )}
      </CardWrapper>

      {lightbox && (
        <FsLightbox
          toggler={lightboxToggler}
          sources={images.map((img) => img.src).filter(Boolean)}
        />
      )}
    </>
  );
};
