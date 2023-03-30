import React from "react";
import { FaHamburger } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Sidebar = ({ activeLink, activeLinkHandler }) => {
  const navigate = useNavigate();
  return (
    <StyledSidebar>
      <div className="side-menu-logo">
        <FaHamburger />
        <span>ResPOS</span>
      </div>
      <div
        className={`side-menu-item ${
          activeLink === "restaurants" ? "active" : ""
        }`}
        onClick={() => activeLinkHandler("restaurants")}
      >
        Restaurants
      </div>
      <div
        className={`side-menu-item ${activeLink === "cart" ? "active" : ""}`}
        onClick={() => activeLinkHandler("cart")}
      >
        Cart
      </div>
      <div
        className={`side-menu-item ${activeLink === "orders" ? "active" : ""}`}
        onClick={() => activeLinkHandler("orders")}
      >
        Orders
      </div>
      <div
        className={`side-menu-item logout`}
        onClick={() => {
          navigate("/");
        }}
      >
        Logout
      </div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
  padding: 3rem;
  padding-top: 5rem;
  gap: 2rem;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 15%;
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
    &.logout {
      margin-top: auto;
      color: var(--white);
      text-decoration: none;
    }
    :hover {
      cursor: pointer;
    }
  }
`;

export default Sidebar;
