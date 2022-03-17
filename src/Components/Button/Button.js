import React from "react";
import {
  ButtonContainer,
  ButtonLabel,
  DefaultButton,
  IconWrapper,
  OutlinedButton,
  TextButton,
} from "./Button.styles";

const Button = (props) => {
  return (
    <>
      <ButtonContainer>
        <ButtonLabel>{props.buttonLabel}</ButtonLabel>
        {props.variant === "outline" ? (
          <OutlinedButton
            color={props.color}
            disabled={props.disabled}
            disableShadow={props.disableShadow}
            size={props.size}
          >
            {props.buttonText ? props.buttonText : "Default"}
          </OutlinedButton>
        ) : props.variant === "text" ? (
          <TextButton
            color={props.color}
            disabled={props.disabled}
            disableShadow={props.disableShadow}
            size={props.size}
          >
            {props.buttonText ? props.buttonText : "Default"}
          </TextButton>
        ) : (
          <>
            <DefaultButton
              color={props.color}
              disabled={props.disabled}
              disableShadow={props.disableShadow}
              size={props.size}
            >
              <IconWrapper className="material-icons">{props.startIcon}</IconWrapper>
              {props.buttonText ? props.buttonText : "Default"}
              <IconWrapper className="material-icons">{props.endIcon}</IconWrapper>
            </DefaultButton>
          </>
        )}
      </ButtonContainer>
    </>
  );
};

export default Button;
