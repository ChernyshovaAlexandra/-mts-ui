import { StyledBtn, StyledBtnLink } from "./style";
import { ButtonElementProps, ButtonProps, LinkElementProps } from "./type";

export const Button: React.FC<ButtonProps> = ({
  btn_type = "button",
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
        {children || content}
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
        {children || content}
      </StyledBtn>
    );
  }
};
export default Button;
