import { Container, Title } from "./App.styles";
import Button from "./Components/Button/Button";

function App() {
  return (
    <>
      <main>
        <Container>
          <Title>Buttons</Title>
          <Button buttonLabel="<Button />" />
          <Button
            buttonLabel="<Button variant = 'outline' />"
            variant="outline"
          />
          <Button buttonLabel="<Button variant = 'text' />" variant="text" />
          <Button disabled buttonLabel="<Button disabled />" />
          <Button disableShadow  buttonLabel="<Button disableShadow />" />
          <Button size="sm" buttonLabel="<Button size='sm />" />
          <Button size="md" buttonLabel="<Button size='md />" />
          <Button size="lg" buttonLabel="<Button size='lg />" />
          <Button variant='text' disabled buttonLabel=" <Button variant='text' disabled />" />
        </Container>
      </main>
    </>
  );
}

export default App;
