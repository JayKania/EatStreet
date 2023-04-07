import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Menu from "./Menu/Menu";
import Cart from "./Cart/Cart";
import axios from "axios";
import Restaurants from "./Restaurants/Restaurants";
import Orders from "./Orders/Orders";

const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [activeLink, setActiveLink] = useState("restaurants");
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [selectedRestaurantData, setSelectedRestaurantData] = useState(null);
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      let result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants`
      );
      setAllRestaurants([...result.data]);
      result = await axios.post(`${process.env.REACT_APP_API_URL}/orders`, {
        email: window.localStorage.getItem("email"),
      });
      setOrdersData([...result.data.orders]);
    };
    getAllData();
  }, []);

  const restaurantHandler = (res_id) => {
    setSelectedRestaurantId(res_id);
    // console.log(res_id)
  };

  const activeLinkHandler = (link) => {
    setActiveLink(link);
  };

  const increaseQtyHandler = (data) => {
    // set data in cart along with res_id
    // 1. check if the restaurant is in the cart or not
    // 2. No -> Add new cart item
    // 3. Yes -> check if that item is in the cart item or not, yes -> update qty, no -> add new item to the existing cart item

    // dummy cart data
    // const dummyCartItem = {
    //   res_id: selectedRestaurantData.res_id,
    //   res_name: selectedRestaurantData.res_name,
    //   cart_items: [
    //     {
    //       item_name: data.item_name,
    //       item_qty: 1,
    //       item_price: data.item_price,
    //     },
    //   ],
    // };
    let tempCartData = [...cartData];

    let index = tempCartData.findIndex((res) => {
      return res.res_id === selectedRestaurantData.res_id;
    });

    if (index === -1) {
      tempCartData.push({
        res_id: selectedRestaurantData.res_id,
        res_name: selectedRestaurantData.res_name,
        cart_items: [
          {
            item_name: data.item_name,
            item_qty: 1,
            item_price: data.item_price,
          },
        ],
      });
    } else {
      let newIndex = tempCartData[index].cart_items.findIndex((cartItem) => {
        return cartItem.item_name === data.item_name;
      });
      if (newIndex === -1) {
        tempCartData[index].cart_items.push({
          item_name: data.item_name,
          item_qty: 1,
          item_price: data.item_price,
        });
      } else {
        tempCartData[index].cart_items[newIndex].item_qty =
          tempCartData[index].cart_items[newIndex].item_qty + 1;
      }
    }

    setCartData([...tempCartData]);

    console.log(
      selectedRestaurantData.res_id + " " + selectedRestaurantData.res_name
    );
  };

  const decreaseQtyHandler = (data) => {
    // we wont be cheking if the find indexes are -1 are not coz we are attaching this handler to the decrease btn
    // only when we have that menu item in our cart

    let tempCartData = [...cartData];
    let index = tempCartData.findIndex((res) => {
      return res.res_id === selectedRestaurantData.res_id;
    });
    let newIndex = tempCartData[index].cart_items.findIndex((cartItem) => {
      return cartItem.item_name === data.item_name;
    });

    console.log(index);
    console.log(newIndex);

    // if that menu item quantity becomes 0 remove it from cart_items
    if (tempCartData[index].cart_items[newIndex].item_qty - 1 === 0) {
      tempCartData[index].cart_items.splice(newIndex, 1);
      // now is cart_items gets empty remove that restaurant from cart
      if (tempCartData[index].cart_items.length === 0) {
        tempCartData.splice(index, 1);
      }
    } else {
      // decrease item count
      tempCartData[index].cart_items[newIndex].item_qty =
        tempCartData[index].cart_items[newIndex].item_qty - 1;
    }
    setCartData([...tempCartData]);
  };

  const editCartHandler = (res_id) => {
    activeLinkHandler("restaurants");
    restaurantHandler(res_id);
  };

  const deleteCartHandler = (res_id) => {
    let tempData = cartData.filter((cartItem) => {
      return cartItem.res_id !== res_id;
    });
    setCartData([...tempData]);
  };

  let activeComponent = null;
  if (activeLink === "restaurants") {
    if (!selectedRestaurantId) {
      activeComponent = (
        <Restaurants
          allRestaurants={allRestaurants}
          restaurantHandler={restaurantHandler}
        />
      );
    } else {
      allRestaurants.find((res) => {
        return res.res_id === setSelectedRestaurantId;
      });
      activeComponent = (
        <Menu
          res_id={selectedRestaurantId}
          restaurantHandler={restaurantHandler}
          cartData={cartData}
          increaseQtyHandler={increaseQtyHandler}
          decreaseQtyHandler={decreaseQtyHandler}
          selectedRestaurantData={selectedRestaurantData}
          setSelectedRestaurantData={setSelectedRestaurantData}
        />
      );
    }
  } else if (activeLink === "orders") {
    activeComponent = <Orders ordersData={ordersData} />;
  } else if (activeLink === "cart") {
    activeComponent = (
      <Cart
        cartData={cartData}
        editCartHandler={editCartHandler}
        deleteCartHandler={deleteCartHandler}
        ordersData={ordersData}
        setOrdersData={setOrdersData}
      />
    );
  }

  return (
    <StyledHome>
      <Sidebar activeLink={activeLink} activeLinkHandler={activeLinkHandler} />
      {activeComponent}
    </StyledHome>
  );
};

const StyledHome = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 5fr; */
  position: relative;
`;

export default Home;
