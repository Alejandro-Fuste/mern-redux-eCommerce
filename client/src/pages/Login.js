import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setformState] = useState({email: '', password: ''});
  const [login, {error}] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
          const mutationResponse = await login({
              variables: {email: formState.email, password: formState.password}
          });
          const token = mutationResponse.data.login.token;
          Auth.login(token);
      } catch (error) {
          console.log(error);
      }
  };

  const handleChange = (event) => {
      const {name, value} = event.target;
  };

  return ()
}

export default Login;
