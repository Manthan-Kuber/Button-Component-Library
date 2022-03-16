import React from "react";
import {
  ButtonContainer,
  ButtonLabel,
  DefaultButton,
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
          >
            {props.buttonText ? props.buttonText : "Default"}
          </OutlinedButton>
        ) : props.variant === "text" ? (
          <TextButton
            color={props.color}
            disabled={props.disabled}
            disableShadow={props.disableShadow}
          >
            {props.buttonText ? props.buttonText : "Default"}
          </TextButton>
        ) : (
          <DefaultButton
            color={props.color}
            disabled={props.disabled}
            disableShadow={props.disableShadow}
          >
            {props.buttonText ? props.buttonText : "Default"}
          </DefaultButton>
        )}
      </ButtonContainer>
    </>
  );
};

export default Button;
