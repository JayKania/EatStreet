import React from "react";
import styled from "styled-components";

const MenuItems = ({
  categoryData,
  selectedCategory,
  cartData,
  increaseQtyHandler,
  decreaseQtyHandler,
  selectedRestaurantData,
}) => {
  let menuItemsHtml = null;

  menuItemsHtml = categoryData.map((item) => {
    // 1. check if the current restaurant is in the cart or not
    // 2. if no -> item_qty = 0, if yes -> check if this menu_item is in the cart or not and get the quantity
    let res_index = cartData.findIndex((res) => {
      return res.res_id === selectedRestaurantData.res_id;
    });

    if (res_index === -1) {
      return (
        <div className={`menu-item ${selectedCategory}`} key={item.id}>
          <div className="item-name">{item.name}</div>
          <div className="item-price">${item.price}.00</div>
          <div className="item-qty-wrapper">
            <button
              className="item-inc-btn"
              onClick={() =>
                increaseQtyHandler({
                  action: "increase",
                  item_name: item.name,
                  item_price: item.price,
                })
              }
            >
              +
            </button>
            <span>0</span>
            <button className="item-dec-btn">-</button>
          </div>
        </div>
      );
    } else {
      let menu_item_index = cartData[res_index].cart_items.findIndex(
        (cartItem) => {
          return cartItem.item_name === item.name;
        }
      );
      if (menu_item_index === -1) {
        return (
          <div className={`menu-item ${selectedCategory}`} key={item.id}>
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price}.00</div>
            <div className="item-qty-wrapper">
              <button
                className="item-inc-btn"
                onClick={() =>
                  increaseQtyHandler({
                    item_name: item.name,
                    item_price: item.price,
                  })
                }
              >
                +
              </button>
              <span>0</span>
              <button className="item-dec-btn">-</button>
            </div>
          </div>
        );
      } else {
        return (
          <div className={`menu-item ${selectedCategory}`} key={item.id}>
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price}.00</div>
            <div className="item-qty-wrapper">
              <button
                className="item-inc-btn"
                onClick={() =>
                  increaseQtyHandler({
                    action: "increase",
                    item_name: item.name,
                    item_price: item.price,
                  })
                }
              >
                +
              </button>
              <span>
                {cartData[res_index].cart_items[menu_item_index].item_qty}
              </span>
              <button
                className="item-dec-btn"
                onClick={() => decreaseQtyHandler({ item_name: item.name })}
              >
                -
              </button>
            </div>
          </div>
        );
      }
    }

    // cartData
  });

  return <StyledMenuItems>{menuItemsHtml}</StyledMenuItems>;
};

const StyledMenuItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2rem 1rem;
  padding-top: 4rem;
  gap: 1.5rem;
  .menu-item {
    display: flex;
    flex-direction: column;
    color: white;
    border-left: 10px solid transparent;
    border-radius: 10px;
    height: 200px;
    padding: 1.5rem;
    gap: 1rem;
    background-color: var(--dark-grey);
    .item-name {
      font-size: 2rem;
    }
    .item-price {
      color: var(--dark-grey-brown);
      font-size: 1.5rem;
    }
    .item-qty-wrapper {
      margin-top: auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      font-size: 2rem;
      .item-inc-btn,
      .item-dec-btn {
        color: white;
        border: 1px solid var(--dark-grey-brown);
        background: transparent;
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
        border-radius: 10px;
        :hover {
          cursor: pointer;
        }
      }
    }
    &.breakfast {
      border-left-color: var(--light-green);
    }
    &.soups {
      border-left-color: var(--light-pink);
    }
    &.pasta {
      border-left-color: var(--light-blue);
    }
    &.sushi {
      border-left-color: var(--light-purple);
    }
    &.main-course {
      border-left-color: var(--dark-pink);
    }
    &.deserts {
      border-left-color: var(--dark-blue);
    }
    &.drinks {
      border-left-color: var(--dark-purple);
    }
    &.alcohol {
      border-left-color: var(--dark-green);
    }
  }
`;

export default MenuItems;
