import styled from 'styled-components';
import Login from './Login/Login';

const App = () => {
  return (
    <StyledApp className="App">
      <Login />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: var(--black);
  height: 100vh;
`

export default App;
