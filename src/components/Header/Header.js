/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png'

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed; 
  top: 0;
  left: 0;
  padding: 20px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 9;
  transition: transform 0.3s;

  &.hidden {
    transform: translateY(-100%);
  }
`

const Logo = styled.img`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 21px;
`

const Header = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);
  let y = window.pageYOffset;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const newY = window.pageYOffset;

      setIsHidden(y < newY);

      y = newY;
    })
  })

  return (
    <HeaderWrapper className={isHidden ? 'hidden' : ''}>
      <Logo src={logo} />
      {children}
    </HeaderWrapper>
  )
}

export default Header;