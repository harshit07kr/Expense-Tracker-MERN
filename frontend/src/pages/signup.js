import React from 'react';
import styled from 'styled-components';
import Signupform from '../components/Signupform/Signupform';

export default function Signup() {
  return (
    <SignupStyled>
      <div className="signup-container">
        <h1>Signup</h1>
        <Signupform />
        <h3>
          Already have an account? <a href="/login">Login</a>
        </h3>
      </div>
    </SignupStyled>
  );
}

const SignupStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;

  .signup-container {
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

