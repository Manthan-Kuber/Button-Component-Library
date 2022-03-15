import styled from "styled-components";

export const ButtonLabel = styled.p`
  font: 400 1.2rem "Ubuntu Mono";
  color: #333;
`;

export const StyledButton = styled.button`
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
  background: ${(props) =>
    props.variant === "outline" || props.variant === "text"
      ? "#FFF"
      : "revert"};
  font: 500 1.4rem "Noto Sans JP", sans-serif;
  color: ${(props) =>
    props.variant === "outline" || props.variant === "text"
      ? "#3D5AFE"
      : "#3F3F3F"};
  border-radius: 6px;
  margin-top: 1.2rem;
  border: ${(props) =>
    props.variant === "outline" ? "1px solid #3D5AFE" : "none"};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.variant === "outline" || props.variant === "text"
        ? "rgba(41, 98, 255, 0.1)"
        : "#aeaeae"};
  }
`;

export const DisabledButton = styled(StyledButton)`
  cursor: auto;
  pointer-events: none;
`;

export const ShadowDisabledButton = styled(DisabledButton)`
  color: white;
  background-color: #3d5afe;
`;

export const ButtonContainer = styled.div`
  margin-block: 2.8rem;
`;
