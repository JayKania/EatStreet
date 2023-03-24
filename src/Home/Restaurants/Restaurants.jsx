import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";

const Restaurants = ({ allData, restaurantHandler }) => {
  console.log(allData);
  if (allData.length === 0) {
    return <h2 style={{ color: "var(--white)" }}>Loading</h2>;
  }

  let restaurantsData = [];

  for (let i = 0; i < allData.length; i++) {
    restaurantsData.push(
      <div
        className="res-card"
        key={allData[i].res_id}
        id={allData[i].res_id}
        onClick={() => restaurantHandler(allData[i].res_id)}
      >
        <div className="res-img-wrapper">
          <img src={allData[i].res_img} alt="res_img" />
        </div>
        <div className="res-content">
          <div className="res-name">{allData[i].res_name}</div>
          <div className="res-location">
            <GoLocation />
            <span>{allData[i].res_location}</span>
          </div>
          <div className="res-cusines">
            <div>{allData[i].res_cusines[0]}</div>
            <div>{allData[i].res_cusines[1]}</div>
            <div>{allData[i].res_cusines[2]}</div>
          </div>
        </div>
      </div>
    );
  }

  return <StyledRestaurants>{restaurantsData}</StyledRestaurants>;
};

const StyledRestaurants = styled.div`
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  padding-top: 4rem;
  .res-card {
    border-left: 1rem solid var(--dark-green);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 2px 2px rgba(73, 69, 69, 0.5);
    overflow: hidden;
    background-color: var(--dark-grey);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    .res-img-wrapper {
      max-width: 600px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }

    .res-content {
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;
      .res-location {
        color: var(--light-grey-brown);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;
      }
      .res-cusines {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: var(--light-grey-brown);
        font-weight: 200;
        div {
          background-color: var(--dark-grey-brown);
          padding: 1rem 1.5rem;
          border-radius: 20px;
          font-size: 1.5rem;
        }
      }
    }
    :hover {
      cursor: pointer;
    }
  }
`;

export default Restaurants;
