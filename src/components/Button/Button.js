import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: ${(props) => (props.primary ? 'blue' : '#ccc')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  border-radius: 4px;
  border: solid 1px #ccc;
  padding: 6px 16px;
  min-width: 64px;
  line-height: 1.75;
  text-transform: uppercase;
  font-size: 14px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  font-weight: 600;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 255, 0, 0.2);
  }
`

const Button = ({ primary, children, handleClick }) => {
  return (
    <ButtonWrapper primary={primary} onClick={handleClick}>
      {children}
    </ButtonWrapper>
  )
}

export default Button;