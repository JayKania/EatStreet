import React, { useState } from "react";
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("menu");

  const linkHandler = (link) => {
    setActiveLink(link);
  };

  return (
    <StyledSidebar>
      <div className="side-menu-logo">
        <FaHamburger />
        <span>ResPOS</span>
      </div>
      <div
        className={`side-menu-item ${activeLink === "menu" ? "active" : ""}`}
        onClick={() => linkHandler("menu")}
      >
        Menu
      </div>
      <div
        className={`side-menu-item ${activeLink === "orders" ? "active" : ""}`}
        onClick={() => linkHandler("orders")}
      >
        Orders
      </div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  padding: 3rem;
  padding-top: 4rem;
  gap: 2rem;
  .side-menu-logo {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .side-menu-item {
    font-size: 1.7rem;
    /* border: 1px solid white; */
    color: var(--dark-grey-brown);
    width: 100%;
    padding: 1rem;
    padding-left: 2rem;
    border-radius: 10px;
    transition: background-color 200ms ease, color 200ms ease;
    &.active {
      background-color: var(--dark-grey);
      color: var(--white);
    }
    :hover {
      cursor: pointer;
    }
  }
`;

export default Sidebar;
