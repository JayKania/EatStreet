import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const CheckUser = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState({
    value: false,
    isInitializing: true,
  });

  useEffect(() => {
    (async () => {
      if (window.localStorage.getItem("email")) {
        const result = await axios.post(
          process.env.REACT_APP_API_URL + "/loggedin",
          {
            email: window.localStorage.getItem("email"),
          }
        );
        console.log(result.data);
        if (result.data.isLoggedIn) {
          setIsLoggedIn({
            value: true,
            isInitializing: false,
          });
        } else {
          setIsLoggedIn({
            value: false,
            isInitializing: false,
          });
        }
      } else {
        setIsLoggedIn({
          value: false,
          isInitializing: false,
        });
      }
    })();
  }, []);

  if (isLoggedIn.isInitializing) {
    return <h1 style={{ color: "var(--white" }}>Loading</h1>;
  } else if (!isLoggedIn.isInitializing && isLoggedIn.value) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
};

export default CheckUser;
