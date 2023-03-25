import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Categories from "./Categories";
import MenuItems from "./MenuItems";
import axios from "axios";
import { BiLeftArrowAlt } from "react-icons/bi";

const Menu = ({
  allData,
  res_id,
  restaurantHandler,
  cartData,
  increaseQtyHandler,
  decreaseQtyHandler,
  selectedRestaurantData,
  setSelectedRestaurantData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("breakfast");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${res_id}`
      );
      setSelectedRestaurantData(result.data);
      setCategoryData([...result.data.breakfast_menu]);
    };
    getData();
  }, []);

  const categoryHandler = async (category) => {
    setSelectedCategory(category);
    if (category === "breakfast") {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${res_id}`
      );
      setCategoryData([...result.data.breakfast_menu]);
    } else if (category === "soups") {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${res_id}`
      );
      setCategoryData([...result.data.soups_menu]);
    } else if (category === "pasta") {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${res_id}`
      );
      setCategoryData([...result.data.pasta_menu]);
    } else if (category === "sushi") {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${res_id}`
      );
      setCategoryData([...result.data.sushi_menu]);
    } else if (category === "main-course") {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${res_id}`
      );
      setCategoryData([...result.data.maincourse_menu]);
    } else if (category === "deserts") {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${res_id}`
      );
      setCategoryData([...result.data.deserts_menu]);
    } else if (category === "drinks") {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${res_id}`
      );
      setCategoryData([...result.data.drinks_menu]);
    } else if (category === "alcohol") {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${res_id}`
      );
      setCategoryData([...result.data.alcohol_menu]);
    }
  };

  return (
    <StyledMenu>
      <div className="back-btn" onClick={() => restaurantHandler(null)}>
        <BiLeftArrowAlt />
      </div>
      <Categories
        categoryHandler={categoryHandler}
        selectedRestaurantData={selectedRestaurantData}
      />
      <hr />
      <StyledItems className="menu-items-wrapper"></StyledItems>
      <MenuItems
        categoryData={categoryData}
        selectedCategory={selectedCategory}
        increaseQtyHandler={increaseQtyHandler}
        decreaseQtyHandler={decreaseQtyHandler}
        cartData={cartData}
        selectedRestaurantData={selectedRestaurantData}
      />
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  overflow: scroll;
  padding: 2rem;
  .back-btn {
    color: var(--white);
    font-size: 4rem;
    font-weight: 200;
    :hover {
      cursor: pointer;
    }
  }
  hr {
    border-color: var(--dark-grey-brown);
  }
`;

const StyledItems = styled.div``;

export default Menu;
