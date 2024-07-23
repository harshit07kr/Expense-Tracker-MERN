import React from 'react';
import styled from 'styled-components';

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;

    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        gap: 0.3rem;
    }
`;

export default Button;
