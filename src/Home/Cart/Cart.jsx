import React from "react";
import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";

const Cart = ({
  cartData,
  editCartHandler,
  deleteCartHandler,
  ordersData,
  setOrdersData,
}) => {
  if (!cartData) {
    return <h2>Loading</h2>;
  }

  const paymentHandler = async (cart) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/order`, {
      cart,
      email: window.localStorage.getItem("email"),
    });
    const order_items = [...cart.cart_items];
    const tempCart = { ...cart };
    delete tempCart.cart_items;
    setOrdersData([...ordersData, { ...tempCart, order_items }]);
    deleteCartHandler(cart.res_id);
  };

  const cartHtml = cartData.map((cart) => {
    let total = 0;
    const itemsHtml = cart.cart_items.map((item) => {
      total += item.item_price * item.item_qty;
      return (
        <>
          <div>{item.item_qty}</div>
          <div>{item.item_name}</div>
          <div>${item.item_price}.00</div>
        </>
      );
    });
    return (
      <div className="cart-wrapper">
        <div className="res-name">{cart.res_name}</div>
        <hr />
        <div className="cart-items-header">
          <div className="cart-qty-header">QT</div>
          <div className="cart-items-header">Items</div>
          <div className="cart-price-header">Price</div>
        </div>
        <div className="cart-items-wrapper">{itemsHtml}</div>
        <hr />
        <div className="cart-total">
          <span className="cart-total-label">Total</span>
          <span className="cart-total-amount">${total}.00</span>
        </div>
        <div className="cart-actions-wrapper">
          <div
            className="cart-delete"
            onClick={() => {
              deleteCartHandler(cart.res_id);
            }}
          >
            <MdOutlineDelete />
          </div>
          <div
            className="cart-edit"
            onClick={() => {
              editCartHandler(cart.res_id);
            }}
          >
            <BiEditAlt />
          </div>
          <div className="cart-payment" onClick={() => paymentHandler(cart)}>
            Place Order
          </div>
        </div>
      </div>
    );
  });

  return <StyledCart>{cartHtml}</StyledCart>;
};

const StyledCart = styled.div`
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.7rem;
  padding: 4rem 3rem 2rem 3rem;
  margin-left: 15%;
  .cart-wrapper {
    background-color: var(--dark-grey);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* height: fit-content; */
    .res-name {
      font-size: 1.7rem;
      padding-bottom: 2rem;
    }
    hr {
      border-color: var(--dark-grey-brown);
    }
    .cart-items-header {
      display: grid;
      grid-template-columns: 1fr 4fr 1fr;
      font-size: 1.5rem;
      color: var(--dark-grey-brown);
      /* .cart-price-header {
        width: fit-content;
      } */
    }
    .cart-items-wrapper {
      display: grid;
      grid-template-columns: 1fr 4fr 1fr;
      font-size: 1.5rem;
      row-gap: 1.5rem;
      column-gap: 0.5rem;
    }
    .cart-total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.5rem;
      .cart-total-label {
        color: var(--dark-grey-brown);
      }
    }
    .cart-actions-wrapper {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      padding-top: 1rem;
      gap: 1rem;
      margin-top: auto;
      .cart-delete,
      .cart-edit {
        display: flex;
        align-items: center;
        color: var(--dark-grey-brown);
        font-size: 2rem;
        border: 1px solid var(--dark-grey-brown);
        padding: 1rem;
        border-radius: 10px;
        :hover {
          cursor: pointer;
        }
      }
      .cart-payment {
        margin-left: auto;
        background-color: var(--dark-grey-brown);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default Cart;
