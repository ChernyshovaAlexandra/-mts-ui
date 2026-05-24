import Spinner from "../Spinner/Spinner";
import { StyledBtn, StyledBtnLink } from "./style";
import { ButtonElementProps, ButtonProps, LinkElementProps } from "./type";

export const Button: React.FC<ButtonProps> = ({
  btn_type = "button",
  loading = false,
  disabled = false,
  ...props
}) => {
  if (btn_type === "link") {
    const {
      link,
      tooltip,
      style,
      content,
      width,
      variant,
      size,
      icon,
      iconPosition,
      iconRight,
      children,
      onClick,
      ...rest
    } = props as LinkElementProps;

    const isDisabled = disabled || loading;
    const hasLeftIcon = !!icon && iconPosition !== "right";
    const hasRightIcon = !!iconRight || (!!icon && iconPosition === "right");
    const rightIconNode = iconRight ?? (iconPosition === "right" ? icon : null);
    const iconOnly =
      (!!icon || !!iconRight) && !children && !content;

    return (
      <StyledBtnLink
        role="link"
        $variant={variant}
        $width={iconOnly ? "auto" : width}
        $size={size}
        href={isDisabled ? undefined : link}
        data-tip={tooltip}
        style={style}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
            return;
          }
          onClick?.(e);
        }}
        {...rest}
      >
        {hasLeftIcon && <span className="btn-icon">{icon}</span>}
        {loading ? (
          <Spinner color="#ffffff" speed="1s" aria-hidden="true" />
        ) : (children || content) ? (
          <span className="btn-label">{children || content}</span>
        ) : null}
        {hasRightIcon && !loading && (
          <span className="btn-icon">{rightIconNode}</span>
        )}
      </StyledBtnLink>
    );
  } else {
    const {
      buttonType,
      onClick,
      style,
      tooltip,
      content,
      children,
      width,
      variant,
      size,
      icon,
      iconPosition,
      iconRight,
      ...rest
    } = props as ButtonElementProps;

    const hasLeftIcon = !!icon && iconPosition !== "right";
    const hasRightIcon = !!iconRight || (!!icon && iconPosition === "right");
    const rightIconNode = iconRight ?? (iconPosition === "right" ? icon : null);
    const iconOnly =
      (!!icon || !!iconRight) && !children && !content;

    return (
      <StyledBtn
        $variant={variant}
        $width={iconOnly ? "auto" : width}
        $size={size}
        type={buttonType || "button"}
        onClick={onClick}
        style={style}
        data-tip={tooltip}
        disabled={disabled || loading}
        aria-busy={loading}
        {...rest}
      >
        {hasLeftIcon && <span className="btn-icon">{icon}</span>}
        {loading ? (
          <Spinner color="#ffffff" speed="1s" aria-hidden="true" />
        ) : (children || content) ? (
          <span className="btn-label">{children || content}</span>
        ) : null}
        {hasRightIcon && !loading && (
          <span className="btn-icon">{rightIconNode}</span>
        )}
      </StyledBtn>
    );
  }
};

export default Button;
