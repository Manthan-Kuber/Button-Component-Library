import styled from "styled-components";

export const Container = styled.article`
  margin: 5rem;
`;

export const Title = styled.h1`
  font: 500 2.4rem "Poppins", sans-serif;
  color: #4F4F4F;
`;

export const SubTitle = styled(Title)`
  font: 500 1.8rem "Poppins", sans-serif;
  text-align: center;
`

export const GridWrapper = styled.div`
display:grid;
gap:1rem;
grid-template-columns: repeat(2,1fr);
place-items: center;

@media (min-width: 50em) {
  grid-template-columns: repeat(4,1fr);
}
`