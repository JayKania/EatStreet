import styled from "styled-components";
import Login from "./Login/Login";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu/Menu";

const App = () => {
  return (
    <StyledApp className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background-color: var(--black);
  height: 100vh;
`;

export default App;
