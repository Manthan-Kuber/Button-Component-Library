import { Container, Title } from "./App.styles";
import Button from "./Components/Button/Button";

function App() {
  return (
    <>
      <main>
        <Container>
          <Title>Buttons</Title>
          <Button buttonLabel="<Button color='default' />" />
          <Button disabled buttonLabel="<Button color='default' />" />
          <Button
            disabled
            color="danger"
            variant='text'
            buttonLabel=" <Button color='danger' variant='outline'/>"
          />
        </Container>
      </main>
    </>
  );
}

export default App;
