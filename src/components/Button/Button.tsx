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
      children,
      onClick,
      ...rest
    } = props as LinkElementProps;

    const isDisabled = disabled || loading;

    return (
      <StyledBtnLink
        role="link"
        $variant={variant}
        $width={width}
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
        {icon && <span className="btn-icon">{icon}</span>}
        {loading ? (
          <Spinner color="#ffffff" speed="1s" aria-hidden="true" />
        ) : (
          <span className="btn-label">{children || content}</span>
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
      ...rest
    } = props as ButtonElementProps;

    return (
      <StyledBtn
        $variant={variant}
        $width={width}
        $size={size}
        type={buttonType || "button"}
        onClick={onClick}
        style={style}
        data-tip={tooltip}
        disabled={disabled || loading}
        aria-busy={loading}
        {...rest}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        {loading ? (
          <Spinner color="#ffffff" speed="1s" aria-hidden="true" />
        ) : (
          <span className="btn-label">{children || content}</span>
        )}
      </StyledBtn>
    );
  }
};

export default Button;
