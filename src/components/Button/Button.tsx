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
      maxWidth,
      wrap,
      responsiveWidth,
      variant,
      theme,
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
        $colorTheme={theme}
        $width={iconOnly ? "auto" : width}
        $size={size}
        $maxWidth={maxWidth}
        $wrap={wrap}
        $responsiveWidth={iconOnly ? undefined : responsiveWidth}
        href={isDisabled ? undefined : link}
        data-tip={tooltip}
        style={style}
        aria-disabled={isDisabled}
        aria-busy={loading}
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
          variant === "icon" ? <Spinner color="#ffffff" speed="1s" /> : <>
            {(children || content) && <span className="btn-label" aria-hidden="true">{children || content}</span>}
            <span className="btn-loading"><Spinner color="currentColor" size={size === "xs" || size === "s" ? "16px" : "24px"} speed="1s" /></span>
          </>
        ) : (children || content) ? (
          <span className="btn-label">{children || content}</span>
        ) : null}
        {hasRightIcon && (!loading || variant !== "icon") && (
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
      maxWidth,
      wrap,
      responsiveWidth,
      variant,
      theme,
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
        $colorTheme={theme}
        $width={iconOnly ? "auto" : width}
        $size={size}
        $maxWidth={maxWidth}
        $wrap={wrap}
        $responsiveWidth={iconOnly ? undefined : responsiveWidth}
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
          variant === "icon" ? <Spinner color="#ffffff" speed="1s" /> : <>
            {(children || content) && <span className="btn-label" aria-hidden="true">{children || content}</span>}
            <span className="btn-loading"><Spinner color="currentColor" size={size === "xs" || size === "s" ? "16px" : "24px"} speed="1s" /></span>
          </>
        ) : (children || content) ? (
          <span className="btn-label">{children || content}</span>
        ) : null}
        {hasRightIcon && (!loading || variant !== "icon") && (
          <span className="btn-icon">{rightIconNode}</span>
        )}
      </StyledBtn>
    );
  }
};

export default Button;
