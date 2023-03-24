import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Menu from "./Menu/Menu";
import Cart from "./Cart/Cart";
import axios from "axios";
import Restaurants from "./Restaurants/Restaurants";
import Orders from "./Orders/Orders";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [activeLink, setActiveLink] = useState("restaurants");
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants`
      );
      // console.log(result.data);
      setAllData([...result.data]);
    };
    getData();
  }, []);

  const restaurantHandler = (res_id) => {
    setSelectedRestaurantId(res_id);
    // console.log(res_id);
  };

  let activeComponent = null;
  if (activeLink === "restaurants") {
    if (!selectedRestaurantId) {
      activeComponent = (
        <Restaurants allData={allData} restaurantHandler={restaurantHandler} />
      );
    } else {
      allData.find((res) => {
        return res.res_id === setSelectedRestaurantId;
      });
      activeComponent = (
        <Menu
          res_id={selectedRestaurantId}
          allData={allData}
          restaurantHandler={restaurantHandler}
        />
      );
    }
  } else if (activeLink === "orders") {
    activeComponent = <Orders allData={allData} />;
  } else if (activeLink === "cart") {
    activeComponent = <Cart allData={allData} />;
  }

  return (
    <StyledHome>
      <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
      {activeComponent}
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`;

export default Home;
