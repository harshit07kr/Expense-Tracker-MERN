import React from 'react';
import styled from 'styled-components';
import useAuthStore from "../../context/AuthStore";
import { useNavigate } from 'react-router-dom';

export default function Signupform() {
  const { Signupform, updatesignupform, signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup();
    navigate("/login");
  };

  return (
    <FormStyled onSubmit={handleSignup}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={Signupform.email}
        onChange={updatesignupform}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={Signupform.password}
        onChange={updatesignupform}
      />
      <button type="submit">Signup</button>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  button {
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
