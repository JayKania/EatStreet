import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import MenuItems from "./MenuItems";
import Cart from "./Cart";

const Menu = () => {
  return (
    <StyledMenu>
      <Sidebar />
      <MenuItems />
      <Cart />
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

export default Menu;
