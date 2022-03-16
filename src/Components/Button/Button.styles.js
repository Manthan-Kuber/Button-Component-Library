import styled from "styled-components";
import hexToRgba from "hex-to-rgba";

export const ButtonLabel = styled.p`
  font: 400 1.2rem "Ubuntu Mono";
  color: #333;
  margin-bottom: 1.2rem;
`;

export const ButtonContainer = styled.div`
  margin-block: 2.8rem;
`;

export const DefaultButton = styled.button`
  padding: ${(props) => {
    switch (props.size) {
      case "sm":
        return "0.6em 1.2em";
      case "md":
        return "0.8em 1.6em";
      case "lg":
        return "1.1em 2.2em";
      default:
        return "0.8em 2em";
    }
  }};
  font: 500 1.4rem "Noto Sans JP", sans-serif;
  color: ${(props) =>
    props.disabled ? "#9E9E9E" : props.color ? "#FFF" : "#3f3f3f"};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.disabled
      ? "#E0E0E0"
      : props.color === "primary"
      ? "#2962FF"
      : props.color === "secondary"
      ? "#455A64"
      : props.color === "danger"
      ? "#D32F2F"
      : "#E0E0E0"};
  box-shadow: ${(props) =>
    props.disabledShadow
      ? "none"
      : props.color === "primary"
      ? hexToRgba("#0039CB", 0.2)
      : props.color === "secondary"
      ? hexToRgba("#1C313A", 0.2)
      : props.color === "danger"
      ? hexToRgba("#9A0007", 0.2)
      : hexToRgba("#AEAEAE", 0.2)};

  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover,
  &:focus {
    background-color: ${(props) => {
      switch (props.color) {
        case "primary":
          return "#0039CB";
        case "secondary":
          return "#1C313A";
        case "danger":
          return "#9A0007";
        default:
          return "#AEAEAE";
      }
    }};
  }
`;

export const OutlinedButton = styled(DefaultButton)`
  background-color: ${(props) => props.disabled ? "#E0E0E0" : "#FFF" };
  color: ${(props) =>
    props.disabled
      ? "#9E9E9E"
      : props.color === "primary"
      ? "#2962FF"
      : props.color === "secondary"
      ? "#455A64"
      : props.color === "danger"
      ? "#D32F2F"
      : "#E0E0E0"};
  border: ${(props) => props.disabled ? "none" : "1px solid" };
  border-color: ${(props) => {
    switch (props.color) {
      case "primary":
        return "#0039CB";
      case "secondary":
        return "#455a64";
      case "danger":
        return "#9A0007";
      default:
        return "#3f3f3f";
    }
  }};
  &:hover,
  &:focus {
    background-color: ${(props) => {
      switch (props.color) {
        case "primary":
          return hexToRgba("#0039CB", 0.1);
        case "secondary":
          return hexToRgba("#1C313A", 0.1);
        case "danger":
          return hexToRgba("#9A0007", 0.1);
        default:
          return hexToRgba("#AEAEAE", 0.1);
      }
    }};
  }
`;

export const TextButton = styled(OutlinedButton)`
  border: none;
  background-color: ${(props) => props.disabled ? "#FFF" : null };
`;
