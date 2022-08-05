import Home from "./Components/Home/Home";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
`;
