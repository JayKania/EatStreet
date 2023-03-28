import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdEmail, MdLockOutline, MdPerson } from "react-icons/md";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const inputHandler = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(
        process.env.REACT_APP_API_URL + "/users",
        {
          username,
          email,
          password,
        }
      );
      if (result.status === 200) {
        navigate("/home");
      }
    } catch (err) {
      console.error(err.response.data.message);
      setError(err.response.data.message);
    }
  };

  return (
    <StyledSignupWrapper>
      <StyledSignup className="signup-wrapper" onSubmit={submitHandler}>
        <h3 className="signup-header">Signup</h3>
        <div className="input-wrapper">
          <label htmlFor="username"></label>
          <div className="input-logo-wrapper">
            <div className="logo-wrapper">
              <MdPerson />
            </div>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              value={username}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email"></label>
          <div className="input-logo-wrapper">
            <div className="logo-wrapper">
              <MdEmail />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password"></label>
          <div className="input-logo-wrapper">
            <div className="logo-wrapper">
              <MdLockOutline />
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="login-link-wrapper">
          <span>Already have an account?</span>
          <Link to="/">Login</Link>
        </div>
        <p className="error">{error}</p>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </StyledSignup>
    </StyledSignupWrapper>
  );
};

const StyledSignupWrapper = styled.div`
  background-color: var(--dark-grey);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  border-radius: 10px;
  min-width: 400px;
  border: 1px solid var(--dark-grey-brown);
`;

const StyledSignup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  .signup-header {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
  }
  .input-wrapper {
    .input-logo-wrapper {
      display: flex;
      align-items: center;
      position: relative;
      .logo-wrapper {
        position: absolute;
        left: 0.5rem;
        padding: 1rem;
        border-radius: 20px;
        font-size: 2rem;
        display: flex;
        color: var(--light-grey-brown);
      }
      input {
        width: 100%;
        background-color: var(--dark-grey-brown);
        outline: none;
        border: none;
        padding: 1rem 2rem 1rem 5rem;
        border-radius: 20px;
        color: var(--white);
        font-size: 1.5rem;
        ::placeholder {
          color: var(--light-grey-brown);
        }
      }
    }
  }
  .login-link-wrapper {
    color: var(--light-grey-brown);
    display: flex;
    gap: 1rem;
    font-size: 1.2rem;
    a {
      color: white;
    }
  }
  .error {
    font-size: 1.3rem;
    color: var(--error);
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

export default Signup;
