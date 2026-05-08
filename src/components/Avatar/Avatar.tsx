import React from "react";
import { StyledAvatar, StyledImage, StyledPlaceholder } from "./style";

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  src?: string;
  alt?: string;
  size?: number;
  borderRadius?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PlaceholderSilhouette: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    focusable="false"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7718 18.6514C18.3367 18.4043 17.8225 18.2017 17.2296 17.968C16.4005 17.6412 15.4175 17.2537 14.2808 16.5993V15.5054C14.9639 15.0405 15.2097 14.0559 15.3463 13.1808C15.4556 13.1808 15.5649 13.0167 15.5649 12.8252L15.5376 12.7706C15.6195 12.6338 15.7015 12.4971 15.7561 12.2509C15.7671 12.2144 15.7824 12.1682 15.8 12.115C15.9144 11.7696 16.1258 11.1314 15.8654 10.9656C15.7561 10.8562 15.6469 10.9109 15.5649 11.0476C15.5649 11.0476 15.9474 9.07853 15.6469 8.20338C15.0458 5.96081 9.8549 5.35915 9.8549 6.72657C7.65209 7.37992 8.04804 9.46947 8.34813 11.0531L8.35227 11.075C8.35227 11.075 8.24299 10.8562 8.02443 11.0476C7.84082 11.3003 7.98498 11.7654 8.08438 12.086C8.1033 12.147 8.1206 12.2028 8.13371 12.2509C8.18835 12.4424 8.27031 12.6065 8.35227 12.7159C8.35227 12.7432 8.34544 12.7569 8.33861 12.7706C8.33178 12.7842 8.32495 12.7979 8.32495 12.8252C8.32495 13.0167 8.43424 13.1808 8.54352 13.1808H8.57084C8.5873 13.2467 8.60339 13.312 8.61932 13.3765C8.84124 14.2766 9.03003 15.0423 9.7183 15.5272V16.5993C8.55169 17.271 7.54682 17.6466 6.70426 17.9615C6.11984 18.1799 5.61352 18.3691 5.1855 18.6078C6.14245 19.6191 7.4973 20.25 8.99951 20.25H14.9995C16.48 20.25 17.8174 19.6372 18.7718 18.6514Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  size = 44,
  borderRadius = 16,
  className,
  style,
  ...rest
}) => {
  return (
    <StyledAvatar
      $size={size}
      $borderRadius={borderRadius}
      $hasImage={Boolean(src)}
      className={className}
      style={style}
      role="img"
      aria-label={alt || "Аватар"}
      {...rest}
    >
      {src ? (
        <StyledImage src={src} alt={alt} $size={size} />
      ) : (
        <StyledPlaceholder>
          <PlaceholderSilhouette />
        </StyledPlaceholder>
      )}
    </StyledAvatar>
  );
};

export default Avatar;
