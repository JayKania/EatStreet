import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiBackspace } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [pin, setPin] = useState("");
  const [selectedUser, setSelectedUser] = useState("Leslie K.");
  const [pinErr, setPinErr] = useState(false);
  const navigate = useNavigate();

  const pinHandler = (input) => {
    if (pin.length < 4) {
      const tempPin = pin + input;
      setPin(tempPin);
    }
  };

  const removePinErr = () => {
    setPin("");
    setPinErr(false);
  };

  useEffect(() => {
    const goToMenu = () => {
      if (pin === "1234") {
        navigate("/home");
      } else if (pin.length === 4) {
        setPinErr(true);
      }
    };
    goToMenu();
  });

  const deleteHandler = () => {
    const tempPin = pin.substring(0, pin.length - 1);
    setPin(tempPin);
  };

  const profileHandler = (name) => {
    setSelectedUser(name);
  };

  let pinPadHtml = [];
  for (let i = 1; i <= 10; i++) {
    pinPadHtml.push(
      <div
        className="button"
        onClick={() => pinHandler(i === 10 ? 0 : i)}
        key={i === 10 ? 0 : i}
      >
        <span>{`${i === 10 ? 0 : i}`}</span>
      </div>
    );
  }

  return (
    <StyledLogin>
      <StyledProfile className="profiles">
        <div
          className={`profile ${selectedUser === "Leslie K." ? "active" : ""}`}
          onClick={() => profileHandler("Leslie K.")}
        >
          <div className="logo">
            <span>L</span>
          </div>
          <span className="name">Leslie K.</span>
        </div>
        <div
          className={`profile ${selectedUser === "Cameron W." ? "active" : ""}`}
          onClick={() => profileHandler("Cameron W.")}
        >
          <div className="logo">
            <span>C</span>
          </div>
          <span className="name">Cameron W.</span>
        </div>
        <div
          className={`profile ${selectedUser === "Jacob J." ? "active" : ""}`}
          onClick={() => profileHandler("Jacob J.")}
        >
          <div className="logo">
            <span>J</span>
          </div>
          <span className="name">Jacob J.</span>
        </div>
      </StyledProfile>
      <StyledPinPad className="pin-pad-wrapper">
        <h5>Enter your pin</h5>
        <div
          className={`pin-input-wrapper ${pinErr ? "err" : ""}`}
          onAnimationEnd={removePinErr}
        >
          <div className={`pin-input ${pin.length > 0 ? "active" : ""}`}></div>
          <div className={`pin-input ${pin.length > 1 ? "active" : ""}`}></div>
          <div className={`pin-input ${pin.length > 2 ? "active" : ""}`}></div>
          <div className={`pin-input ${pin.length > 3 ? "active" : ""}`}></div>
        </div>
        <div className="pin-pad">
          {pinPadHtml}
          <div className="button delete" onClick={deleteHandler}>
            <HiBackspace />
          </div>
        </div>
      </StyledPinPad>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const StyledProfile = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .profile {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--white);
    gap: 2rem;
    font-size: 2rem;
    border: 1px solid var(--light-border);
    border-radius: 1rem;
    width: 500px;
    transition: background-color 250ms ease;
    .logo {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      background-color: var(--white);
      color: var(--black);
      border-radius: 50%;
      transition: background-color 250ms ease;
    }
    &.active {
      color: var(--black);
      background-color: var(--white);
      .logo {
        color: var(--white);
        background-color: var(--black);
      }
    }
    :hover {
      cursor: pointer;
    }
  }
`;

const StyledPinPad = styled.div`
  flex-basis: 30%;
  background-color: var(--dark-grey);
  border-radius: 2rem 0 0 2rem;
  color: var(--light-font-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  h5 {
    font-weight: 300;
    font-size: 1.3rem;
  }
  .pin-input-wrapper {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    &.err {
      animation: shake 500ms 1;
    }
    .pin-input {
      padding: 0.6rem;
      background-color: var(--dark-grey-brown);
      border-radius: 50%;
      &.active {
        background-color: var(--white);
      }
    }
  }
  .pin-pad {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    .button {
      font-size: 2rem;
      padding: 2rem 2.5rem;
      border-radius: 5px;
      background-color: var(--dark-grey-brown);
      display: flex;
      align-items: center;
      justify-content: center;
      &.delete {
        background: none;
        svg {
          color: var(--dark-grey-brown);
          font-size: 2.5rem;
        }
      }
      :hover {
        cursor: pointer;
      }
    }
    div:nth-of-type(10) {
      grid-column: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translateX(-5px);
    }
    20% {
      transform: translateX(10px);
    }
    40% {
      transform: translateX(-10px);
    }
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default Login;
