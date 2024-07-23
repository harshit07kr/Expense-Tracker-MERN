import React from 'react';
import styled from 'styled-components';
import useAuthStore from "../../context/AuthStore";
import { useNavigate } from 'react-router-dom';

export default function Loginform() {
  const { Loginform, updateloginform, login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
    navigate("/");
  };

  return (
    <FormStyled onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={Loginform.email}
        onChange={updateloginform}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={Loginform.password}
        onChange={updateloginform}
      />
      <button type="submit">Login</button>
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
