import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    border-radius: 10px;
    background-color: var(--primary-color);
    opacity: ${props => (props.secondary ? 0.5 : 1)};
    color: #fff;
    font-size: '16px';
    padding: 13px 55px;
    cursor: pointer;
    margin: 15px 10px 15px 10px;
    border: none;
`

const Button = ({ primary, secondary, ...props }) => {
    return (
        <StyledButton
            primary={primary}
            secondary={secondary}
            {...props}
        />
    )
}

export default Button