import styled from "styled-components";
import Login from "./Login/Login";
import { Route, Routes } from "react-router-dom";
import Menu from "./Home/Home";

const App = () => {
  return (
    <StyledApp className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Menu />} />
      </Routes>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background-color: var(--black);
`;

export default App;
