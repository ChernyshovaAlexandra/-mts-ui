import Spinner from "../Spinner/Spinner";
import { StyledBtn, StyledBtnLink } from "./style";
import { ButtonElementProps, ButtonProps, LinkElementProps } from "./type";

export const Button: React.FC<ButtonProps> = ({
  btn_type = "button",
  loading = false,
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
      icon,
      children,
      ...rest
    } = props as LinkElementProps;

    return (
      <StyledBtnLink
        variant={variant}
        width={width}
        href={link}
        data-tip={tooltip}
        style={style}
        {...rest}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        {loading ? <Spinner color="#ffffff" speed="1s" /> : children || content}
      </StyledBtnLink>
    );
  } else {
    const {
      buttonType,
      onClick,
      style,
      tooltip,
      disabled,
      content,
      children,
      width,
      variant,
      icon,
      ...rest
    } = props as ButtonElementProps;

    return (
      <StyledBtn
        variant={variant}
        width={width}
        type={buttonType || "button"}
        onClick={onClick}
        style={style}
        data-tip={tooltip}
        disabled={disabled}
        {...rest}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        {loading ? <Spinner color="#ffffff" speed="1s" /> : children || content}
      </StyledBtn>
    );
  }
};
export default Button;
