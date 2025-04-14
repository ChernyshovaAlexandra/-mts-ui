import React from "react";
import { StyledBtn, StyledBtnLink } from "./style";
import { ButtonProps, LinkElementProps, ButtonElementProps } from "./type";

const Button: React.FC<ButtonProps> = (props) => {
  if (props.btn_type === "link") {
    const { link, tooltip, style, content, width, variant } =
      props as LinkElementProps;
    return (
      <StyledBtnLink
        variant={variant}
        width={width}
        href={link}
        data-tip={tooltip}
        style={style}
        dangerouslySetInnerHTML={{ __html: content || "" }}
      />
    );
  } else {
    const {
      buttonType,
      handleClick,
      style,
      tooltip,
      disabled,
      content,
      children,
      width,
      variant,
    } = props as ButtonElementProps;

    return (
      <StyledBtn
        variant={variant}
        width={width}
        type={buttonType || "button"}
        onClick={handleClick}
        style={style}
        data-tip={tooltip}
        disabled={disabled || false}
      >
        {children || content}
      </StyledBtn>
    );
  }
};

export default Button;
