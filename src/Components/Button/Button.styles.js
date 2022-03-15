import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  padding: 1px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  &:active {
    background-color: coral;
  }
`;
