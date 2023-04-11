import axios from "axios";
import React, { useRef, useState } from "react";
import { MdEmail, MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const adminRef = useRef(null);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!adminRef.current.checked) {
        const result = await axios.post(
          process.env.REACT_APP_API_URL + "/login",
          {
            email,
            password,
          }
        );
        console.log(result);
        if (result.status === 200) {
          window.localStorage.setItem("email", email);
          navigate("/home");
        }
      } else {
        const result = await axios.post(
          process.env.REACT_APP_API_URL + "/admin/login",
          {
            email,
            password,
          }
        );
        console.log(result);
        if (result.status === 200) {
          window.localStorage.setItem("email", email);
          navigate("/admin");
        }
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const inputHandler = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <StyledLoginWrapper>
      <StyledLogin className="login-wrapper" onSubmit={submitHandler}>
        <h3 className="login-header">Login</h3>
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
        <div className="admin-login-wrapper">
          <input type="checkbox" name="admin" id="admin" ref={adminRef} />
          <span>Admin Login</span>
        </div>
        <div className="signup-link-wrapper">
          <span>Create a new account.</span>
          <Link to="/signup">Signup</Link>
        </div>
        <p className="error">{error}</p>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </StyledLogin>
    </StyledLoginWrapper>
  );
};

const StyledLoginWrapper = styled.div`
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

const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  .login-header {
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

  .admin-login-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
    input {
      accent-color: var(--dark-grey-brown);
    }
  }
  .signup-link-wrapper {
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

export default Login;
