import "./App.css";
import { StyledButton, ButtonStyledBrown } from "./components/Button.style";
import { Wrapper } from "./components/Wrapper.style";

function App() {
  return (
    <Wrapper>
      <StyledButton onClick={() => alert(1 + 1)}>Fefe</StyledButton>
      <StyledButton backgroundColor="blue" onClick={() => alert(1 + 1)}>
        Fefe
      </StyledButton>

      <p>fefewfasdfds</p>
      <h2>dasnkfbdskhf</h2>
      <ButtonStyledBrown>Fefo marrom</ButtonStyledBrown>
    </Wrapper>
  );
}

export default App;
