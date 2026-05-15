import React from "react";
import {
  StyledAvatar,
  StyledImage,
  StyledInitials,
  StyledPlaceholder,
  StyledTouchTarget,
  SILHOUETTE_DEFAULT,
  SILHOUETTE_COLORED,
} from "./style";

export type AvatarGender = "neutral" | "male" | "female" | "business";
export type AvatarSize = 24 | 32 | 44 | 52 | 64 | 80;

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  src?: string;
  alt?: string;
  initials?: string;
  gender?: AvatarGender;
  size?: AvatarSize;
  borderRadius?: number;
  colored?: boolean;
  stroke?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const BORDER_RADIUS: Record<AvatarSize, number> = {
  24: 8,
  32: 12,
  44: 16,
  52: 18,
  64: 20,
  80: 24,
};

// ─── Silhouettes ─────────────────────────────────────────────────────────────

const SilhouetteNeutral: React.FC<{ fill: string }> = ({ fill }) => (
  <svg viewBox="0 0 80 80" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden focusable="false">
    <path
      d="M49.2114 53.8184C60.4656 53.8187 70.0344 60.9348 73.5552 70.8564C69.3363 75.8367 63.0386 78.9999 56.0005 79H24.0005C16.9622 79 10.6638 75.8368 6.44482 70.8564C9.96562 60.9346 19.5351 53.8185 30.7896 53.8184H49.2114ZM40.0005 13C49.3891 13.0003 57.0005 20.6113 57.0005 30C57.0005 39.3887 49.3891 46.9997 40.0005 47C30.6116 47 23.0005 39.3888 23.0005 30C23.0005 20.6112 30.6116 13 40.0005 13Z"
      fill={fill}
    />
  </svg>
);

const SilhouetteWoman: React.FC<{ fill: string }> = ({ fill }) => (
  <svg viewBox="0 0 80 80" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden focusable="false">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M72.1882 72.3384C68.0321 76.4565 62.3131 79 56.0001 79H24.0001C17.6891 79 11.9717 76.4581 7.81592 72.3423C10.3169 69.7449 13.8237 68.4823 18.2319 66.8954L18.2354 66.8939C18.4967 66.8001 18.7625 66.7054 19.0326 66.6091L19.7243 66.3643C20.1678 66.2072 20.6219 66.0501 21.0857 65.8896L21.2849 65.8207L21.2863 65.8202C24.3889 64.7477 27.9172 63.528 31.6252 61.4325V61.4175V58.4072C31.1204 58.4184 30.6272 58.4313 30.1501 58.446C27.1673 58.5383 23.0907 58.9076 20.6762 59.1468C19.8706 59.2265 19.1871 58.4702 19.1915 57.6702C19.1909 57.5674 19.2018 57.4638 19.225 57.3611C19.5254 56.0358 19.8564 54.0167 19.9888 51.2181C20.0009 50.9624 20.0115 50.7001 20.0202 50.4312C20.0249 50.2847 20.0291 50.1362 20.0328 49.9857V49.9708C20.038 49.7503 20.0405 49.5194 20.0405 49.2787C20.0401 47.4293 19.8972 45.0074 19.7424 42.389L19.7421 42.3844C19.7153 41.9318 19.6927 41.4894 19.673 41.0568C19.574 38.8966 19.5642 36.9799 19.6702 35.2569C19.879 31.8607 20.5368 29.2167 21.8444 26.9419C24.3059 22.6593 26.9752 22.0145 26.9752 22.0145C26.9752 22.0145 26.9752 15.7279 37.1017 13.7417C38.0412 13.4808 39.0744 13.3385 40.2104 13.3385L40.306 13.3388L40.4017 13.3385C40.4662 13.3385 40.5302 13.3389 40.5938 13.3398C40.6438 13.3391 40.7006 13.3387 40.7471 13.3385C45.4622 13.3207 49.9037 15.4817 52.7714 18.9582C57.3661 24.529 59.8463 30.8222 60.1743 36.9526C60.3507 38.7304 60.4285 40.5845 60.323 42.3695V42.3741L60.3226 42.3799C60.1473 45.3448 59.987 48.0565 60.0326 49.9708C60.1138 53.4257 60.4969 55.8465 60.8403 57.3611C61.0435 58.2574 60.2932 59.2213 59.3889 59.1318C57.0563 58.9008 51.6863 58.5483 48.7361 58.4414V61.4325C52.9518 63.7701 56.9231 65.1754 60.2863 66.3648L60.3268 66.3791C60.8225 66.5546 61.305 66.7254 61.7729 66.8939L61.7774 66.8954L61.7809 66.8969C66.1843 68.4824 69.6884 69.7449 72.1882 72.3384Z"
      fill={fill}
    />
  </svg>
);

const SilhouetteMan: React.FC<{ fill: string }> = ({ fill }) => (
  <svg viewBox="0 0 80 80" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden focusable="false">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M72.9266 71.5724C68.7233 76.1387 62.6959 78.9999 56.0002 78.9999H24.0002C17.2095 78.9999 11.1062 76.057 6.896 71.377C9.25059 69.1972 12.4416 68.0045 16.4658 66.5005C20.2104 65.1009 24.6766 63.4317 29.8615 60.4465V55.6813C26.8025 53.5265 25.9634 50.1234 24.9771 46.123C24.9063 45.836 24.8348 45.5459 24.7616 45.2529H24.6402C24.1545 45.2529 23.6688 44.5237 23.6688 43.6728C23.6688 43.5513 23.6992 43.4905 23.7295 43.4297C23.7599 43.3689 23.7902 43.3082 23.7902 43.1866C23.426 42.7004 23.0617 41.9711 22.8189 41.1203C22.7606 40.9065 22.6837 40.6585 22.5996 40.3872C22.1578 38.9622 21.5171 36.8954 22.3331 35.7722C23.3045 34.9213 23.7902 35.8937 23.7902 35.8937L23.7718 35.7966C22.4381 28.7582 20.6783 19.4713 30.4686 16.5676C30.4686 10.4902 53.5393 13.1642 56.2107 23.1312C57.5463 27.0207 55.8464 35.7722 55.8464 35.7722C56.2107 35.1644 56.6963 34.9213 57.182 35.4075C58.3394 36.1448 57.3998 38.9813 56.8914 40.5161C56.8131 40.7525 56.745 40.9581 56.6964 41.1203C56.4535 42.2142 56.0892 42.822 55.7249 43.4297L55.8464 43.6728C55.8464 44.5237 55.3607 45.2529 54.875 45.2529C54.2679 49.1425 53.175 53.5182 50.1394 55.5845V60.4465C55.191 63.3549 59.5603 65.0771 63.2449 66.5294C67.3044 68.1295 70.5327 69.4019 72.9266 71.5724Z"
      fill={fill}
    />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

interface SilhouetteProps {
  gender: AvatarGender;
  colored: boolean;
}

const Silhouette: React.FC<SilhouetteProps> = ({ gender, colored }) => {
  const fill = colored ? SILHOUETTE_COLORED : SILHOUETTE_DEFAULT;
  switch (gender) {
    case "male":    return <SilhouetteMan fill={fill} />;
    case "female":  return <SilhouetteWoman fill={fill} />;
    default:        return <SilhouetteNeutral fill={fill} />;
  }
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  initials,
  gender = "neutral",
  size = 44,
  borderRadius,
  colored = false,
  stroke = false,
  className,
  style,
  ...rest
}) => {
  const radius = borderRadius ?? BORDER_RADIUS[size] ?? 16;
  const hasImage = Boolean(src);

  // 24px — only 1 letter; otherwise up to 2
  const displayInitials = initials
    ? (size <= 24 ? initials[0] : initials.slice(0, 2)).toUpperCase()
    : undefined;

  return (
    <StyledTouchTarget
      className={className}
      style={style}
      role="img"
      aria-label={alt || "Аватар"}
      {...rest}
    >
      <StyledAvatar
        $size={size}
        $borderRadius={radius}
        $hasImage={hasImage}
        $colored={colored}
        $stroke={stroke && hasImage}
      >
        {hasImage ? (
          <StyledImage src={src} alt={alt} $size={size} />
        ) : displayInitials ? (
          <StyledInitials $size={size} $colored={colored}>
            {displayInitials}
          </StyledInitials>
        ) : (
          <StyledPlaceholder>
            <Silhouette gender={gender} colored={colored} />
          </StyledPlaceholder>
        )}
      </StyledAvatar>
    </StyledTouchTarget>
  );
};

export default Avatar;
