import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutuationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutuationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <Link></Link>
      <h2></h2>

      <form>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <button></button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
