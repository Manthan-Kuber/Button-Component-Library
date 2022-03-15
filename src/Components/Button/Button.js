import React from "react";
import {
  ButtonContainer,
  ButtonLabel,
  DisabledButton,
  ShadowDisabledButton,
  StyledButton,
} from "./Button.styles";

const Button = (props) => {
  return (
    <>
      <ButtonContainer>
        <ButtonLabel>{props.buttonLabel}</ButtonLabel>
        {props.disableShadow || props.size ? (
          <ShadowDisabledButton variant={props.variant} size={props.size}>
            {props.buttonText ? props.buttonText : "Default"}
          </ShadowDisabledButton>
        ) : props.disabled ? (
          <DisabledButton variant={props.variant} size={props.size}>
            {props.buttonText ? props.buttonText : "Default"}
          </DisabledButton>
        ) : (
          <StyledButton variant={props.variant} size={props.size}>
            {props.buttonText ? props.buttonText : "Default"}
          </StyledButton>
        )}
      </ButtonContainer>
    </>
  );
};

export default Button;
