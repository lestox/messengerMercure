import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    border-radius: 12px;
    background-color: #007FFF;
    opacity: ${props => (props.secondary ? 0.5 : 1)};
    color: #fff;
    padding: 10px 15px;
    font-size: '16px';
    font-weight: bold;
    padding: 12px 24px;
    cursor: pointer;
    margin: 15px 30px 15px 0px;
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