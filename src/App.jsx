import styled from "styled-components";
import Login from "./Login/Login";
import { Route, Routes } from "react-router-dom";
import Menu from "./Home/Home";
import Signup from "./Signup/Signup";

const App = () => {
  return (
    <StyledApp className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Menu />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: var(--black);
`;

export default App;
