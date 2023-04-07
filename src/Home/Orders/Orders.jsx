import React, { Fragment } from "react";
import styled from "styled-components";

const Orders = ({ ordersData }) => {
  const ordersHtml = ordersData.map((order, index) => {
    let total = 0;
    const itemsHtml = order.order_items.map((item, index) => {
      total += item.item_price * item.item_qty;
      return (
        <Fragment key={index}>
          <div>{item.item_qty}</div>
          <div>{item.item_name}</div>
          <div>${item.item_price}.00</div>
        </Fragment>
      );
    });
    return (
      <div className="order-wrapper" key={index}>
        <div className="res-name">{order.res_name}</div>
        <hr />
        <div className="order-items-header">
          <div className="order-qty-header">QT</div>
          <div className="order-items-header">Items</div>
          <div className="order-price-header">Price</div>
        </div>
        <div className="order-items-wrapper">{itemsHtml}</div>
        <hr />
        <div className="order-total">
          <span className="order-total-label">Total</span>
          <span className="order-total-amount">${total}.00</span>
        </div>
      </div>
    );
  });

  return <StyledOrders>{ordersHtml}</StyledOrders>;
};

const StyledOrders = styled.div`
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.7rem;
  padding: 4rem 3rem 2rem 3rem;
  margin-left: 15%;
  .order-wrapper {
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
    .order-items-header {
      display: grid;
      grid-template-columns: 1fr 4fr 1fr;
      font-size: 1.5rem;
      color: var(--dark-grey-brown);
      /* .order-price-header {
        width: fit-content;
      } */
    }
    .order-items-wrapper {
      display: grid;
      grid-template-columns: 1fr 4fr 1fr;
      font-size: 1.5rem;
      row-gap: 1.5rem;
      column-gap: 0.5rem;
    }
    .order-total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.5rem;
      .order-total-label {
        color: var(--dark-grey-brown);
      }
    }
  }
`;
export default Orders;
