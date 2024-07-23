import React from "react";
import styled from "styled-components";
import Loginform from "../components/Loginform/Loginform";

export default function Login() {
  return (
    <LoginStyled>
      <div className="login-container">
        <h1>Login</h1>
        <Loginform />
        <h3>
          Don't have an account? <a href="/signup">Signup</a>
        </h3>
      </div>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;

  .login-container {
    background: white;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    h1 {
      margin-bottom: 2rem;
      color: #333;
    }

    h3 {
      margin-top: 2rem;
      color: #666;

      a {
        color: #007bff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

