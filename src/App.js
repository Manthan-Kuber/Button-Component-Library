import { Container, Title } from "./App.styles";
import Button from "./Components/Button/Button";

function App() {
  return (
    <>
      <main>
        <Container>
          <Title>Buttons</Title>
          <Button buttonLabel="<Button color='default' />" />
          <Button
            disabled
            variant="text"
            color="primary"
            buttonLabel="<Button color='default' />"
          />
          <Button
            color="danger"
            variant="outline"
            buttonLabel=" <Button color='danger' variant='outline'/>"
          />
        </Container>
      </main>
    </>
  );
}

export default App;
