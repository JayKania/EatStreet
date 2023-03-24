import React from "react";
import { GiHotMeal, GiNoodles, GiSushis } from "react-icons/gi";
import { IoMdBeer, IoMdIceCream } from "react-icons/io";
import { MdCoffee, MdFreeBreakfast, MdSoupKitchen } from "react-icons/md";
import styled from "styled-components";

const Categories = ({ categoryHandler, selectedRestaurantData }) => {
  return (
    <StyledCategories>
      <div className="menu-category-wrapper">
        <div
          className="menu-category breakfast"
          onClick={() => {
            categoryHandler("breakfast");
          }}
        >
          <div className="menu-category-logo">
            <MdFreeBreakfast />
          </div>
          <div className="menu-category-title">Breakfast</div>
          <div className="menu-category-total-items">
            {selectedRestaurantData
              ? selectedRestaurantData.breakfast_menu.length
              : 0}{" "}
            items
          </div>
        </div>
        <div
          className="menu-category soups"
          onClick={() => {
            categoryHandler("soups");
          }}
        >
          <div className="menu-category-logo">
            <MdSoupKitchen />
          </div>
          <div className="menu-category-title">Soups</div>
          <div className="menu-category-total-items">
            {selectedRestaurantData
              ? selectedRestaurantData.soups_menu.length
              : 0}{" "}
            items
          </div>
        </div>
        <div
          className="menu-category pasta"
          onClick={() => {
            categoryHandler("pasta");
          }}
        >
          <div className="menu-category-logo">
            <GiNoodles />
          </div>
          <div className="menu-category-title">Pasta</div>
          <div className="menu-category-total-items">
            {selectedRestaurantData
              ? selectedRestaurantData.pasta_menu.length
              : 0}{" "}
            items
          </div>
        </div>
        <div
          className="menu-category sushi"
          onClick={() => {
            categoryHandler("sushi");
          }}
        >
          <div className="menu-category-logo">
            <GiSushis />
          </div>
          <div className="menu-category-title">Sushi</div>
          <div className="menu-category-total-items">
            {selectedRestaurantData
              ? selectedRestaurantData.sushi_menu.length
              : 0}{" "}
            items
          </div>
        </div>
        <div
          className="menu-category main-course"
          onClick={() => {
            categoryHandler("main-course");
          }}
        >
          <div className="menu-category-logo">
            <GiHotMeal />
          </div>
          <div className="menu-category-title">Main Course</div>
          <div className="menu-category-total-items">
            {selectedRestaurantData
              ? selectedRestaurantData.maincourse_menu.length
              : 0}{" "}
            items
          </div>
        </div>
        <div
          className="menu-category deserts"
          onClick={() => {
            categoryHandler("deserts");
          }}
        >
          <div className="menu-category-logo">
            <IoMdIceCream />
          </div>
          <div className="menu-category-title">Deserts</div>
          <div className="menu-category-total-items">
            {selectedRestaurantData
              ? selectedRestaurantData.deserts_menu.length
              : 0}{" "}
            items
          </div>
        </div>
        <div
          className="menu-category drinks"
          onClick={() => {
            categoryHandler("drinks");
          }}
        >
          <div className="menu-category-logo">
            <MdCoffee />
          </div>
          <div className="menu-category-title">Drinks</div>
          <div className="menu-category-total-items">
            {selectedRestaurantData
              ? selectedRestaurantData.drinks_menu.length
              : 0}{" "}
            items
          </div>
        </div>
        <div
          className="menu-category alcohol"
          onClick={() => {
            categoryHandler("alcohol");
          }}
        >
          <div className="menu-category-logo">
            <IoMdBeer />
          </div>
          <div className="menu-category-title">Alcohol</div>
          <div className="menu-category-total-items">
            {selectedRestaurantData
              ? selectedRestaurantData.alcohol_menu.length
              : 0}{" "}
            items
          </div>
        </div>
      </div>
    </StyledCategories>
  );
};

const StyledCategories = styled.div`
  .menu-category-wrapper {
    color: var(--white);
    padding: 2rem 1rem;
    padding-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    .menu-category {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      height: 200px;
      padding: 1.5rem;
      border-radius: 10px;
      color: var(--black);
      .menu-category-logo {
        font-size: 2rem;
      }
      .menu-category-title {
        margin-top: auto;
        font-size: 2rem;
      }
      .menu-category-total-items {
        color: var(--dark-grey-brown);
        font-size: 1.5rem;
      }
      &.breakfast {
        background-color: var(--light-green);
      }
      &.soups {
        background-color: var(--light-pink);
      }
      &.pasta {
        background-color: var(--light-blue);
      }
      &.sushi {
        background-color: var(--light-purple);
      }
      &.main-course {
        background-color: var(--dark-pink);
      }
      &.deserts {
        background-color: var(--dark-blue);
      }
      &.drinks {
        background-color: var(--dark-purple);
      }
      &.alcohol {
        background-color: var(--dark-green);
      }
      :hover {
        cursor: pointer;
      }
    }
  }
`;

export default Categories;
