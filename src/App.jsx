import styled from "styled-components";
import Login from "./Authentication/Login/Login";
import { Route, Routes } from "react-router-dom";
import Menu from "./Home/Home";
import Signup from "./Authentication/Signup/Signup";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import CheckUser from "./Authentication/CheckUser";

const App = () => {
  return (
    <StyledApp className="App">
      <Routes>
        <Route
          path="/"
          element={
            <CheckUser>
              <Login />
            </CheckUser>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <CheckUser>
              <Signup />
            </CheckUser>
          }
        />
      </Routes>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: var(--black);
`;

export default App;
