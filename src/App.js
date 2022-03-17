import { Container, GridWrapper, SubTitle, Title, FooterText } from "./App.styles";
import Button from "./Components/Button/Button";

function App() {
  return (
    <>
      <main>
        <Container>
          <Title>Buttons</Title>
          <SubTitle>Color: Default</SubTitle>
          <GridWrapper>
            <Button buttonLabel="<Button />" />
            <Button
              buttonLabel="<Button variant='outline' />"
              variant="outline"
            />
            <Button variant="text" buttonLabel=" <Button variant='text'/>" />
            <Button
              buttonText="Search"
              endIcon="search"
              buttonLabel=" <Button buttonText='Search' endIcon='search'/>"
            />
          </GridWrapper>
          <SubTitle>Color: Primary</SubTitle>
          <GridWrapper>
            <Button color="primary" buttonLabel="<Button color='primary' />" />
            <Button
              color="primary"
              buttonLabel="<Button color='primary' variant='outline' />"
              variant="outline"
            />
            <Button
              color="primary"
              variant="text"
              buttonLabel=" <Button color='primary' variant='text'/>"
            />
            <Button
              color="primary"
              startIcon="favorite"
              buttonText="Like"
              buttonLabel=" <Button color='primary' startIcon='favorite' buttonText='Like'/>"
            />
          </GridWrapper>
          <SubTitle>Color: Secondary</SubTitle>
          <GridWrapper>
            <Button
              color="secondary"
              buttonLabel="<Button color='secondary' />"
            />
            <Button
              color="secondary"
              buttonLabel="<Button color='secondary' variant='outline' />"
              variant="outline"
            />
            <Button
              color="secondary"
              variant="text"
              buttonLabel=" <Button color='secondary' variant='text'/>"
            />
            <Button
              color="secondary"
              endIcon="logout"
              buttonText="Log Out"
              buttonLabel=" <Button color='secondary' startIcon='logout' buttonText='Log Out'/>"
            />
          </GridWrapper>
          <SubTitle>Color: Danger</SubTitle>
          <GridWrapper>
            <Button color="danger" buttonLabel="<Button color='danger' />" />
            <Button
              color="danger"
              buttonLabel="<Button color='danger' variant='outline' />"
              variant="outline"
            />
            <Button
              color="danger"
              variant="text"
              buttonLabel=" <Button color='danger' variant='text'/>"
            />
            <Button
              color="danger"
              startIcon="close"
              buttonText="Close"
              buttonLabel=" <Button color='danger' startIcon='close' buttonText='Close'/>"
            />
          </GridWrapper>
          <SubTitle>Sizes</SubTitle>
          <GridWrapper>
            <Button size="sm" buttonLabel="<Button size='sm' />" />
            <Button
              color="primary"
              size="md"
              buttonLabel="<Button color='primary'
              size='md' variant='outline' />"
              variant="outline"
            />
            <Button
              size="default"
              color="secondary"
              variant="text"
              buttonLabel=" <Button
              size='default' color='secondary' variant='text'/>"
            />
            <Button
              size="lg"
              color="danger"
              endIcon="delete"
              buttonText="Delete"
              buttonLabel=" <Button
              size='lg' color='danger' endIcon='delete' buttonText='Delete'/>"
            />
          </GridWrapper>
          <SubTitle>Disabled & Miscellanous</SubTitle>
          <GridWrapper>
            <Button
              disabled
              size="sm"
              buttonLabel="<Button disabled size='sm' />"
            />
            <Button
              disableShadow
              color="primary"
              size="md"
              buttonLabel="<Button
              disableShadow color='primary'
              size='md' variant='outline' />"
              variant="outline"
            />
            <Button
              disabled
              size="default"
              color="secondary"
              variant="text"
              buttonLabel=" <Button
              disabled
              size='default' color='secondary' variant='text'/>"
            />
            <Button
              disabled
              size="lg"
              color="danger"
              startIcon="info"
              buttonText="Info"
              buttonLabel=" <Button
              disabled
              size='lg' color='danger' startIcon='info' buttonText='Info'/>"
            />
          </GridWrapper>
        </Container>
      </main>
      <footer>
      <FooterText>Created by <b><u>Manthan Kuber</u></b></FooterText>
      </footer>
    </>
  );
}

export default App;
