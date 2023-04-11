import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Admin = () => {
  const [input, setInput] = useState("");
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const result = await axios.post(
      process.env.REACT_APP_API_URL + "/offers/publish",
      {
        message: input,
      }
    );
    console.log(result.data);
    setInput("");
  };
  return (
    <StyldAdmin onSubmit={submitHandler}>
      <input
        type="text"
        required
        value={input}
        onChange={inputHandler}
        placeholder="Publish new Offers"
      />
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </StyldAdmin>
  );
};

const StyldAdmin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 400px;
  background-color: var(--dark-grey);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  border-radius: 10px;
  min-width: 400px;
  border: 1px solid var(--dark-grey-brown);
  input {
    background-color: var(--dark-grey-brown);
    outline: none;
    border: none;
    padding: 1rem 2rem;
    border-radius: 20px;
    color: var(--white);
    font-size: 1.5rem;
    ::placeholder {
      color: var(--light-grey-brown);
    }
  }
  .submit-btn {
    margin-top: 2rem;
    background-color: rgb(145, 145, 145);
    color: var(--white);
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 20px;
    :hover {
      cursor: pointer;
    }
  }
`;

export default Admin;
