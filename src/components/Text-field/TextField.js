import React from 'react';
import styled from 'styled-components';

const ThemeWrapper = styled.div`
     margin-top:50px;
     font-family:sans-serif;
`

const DivWrapper = styled.div`
    width: 200px;
    position: relative;
 `
const Bar = styled.span`
    position: relative;
    display: block;
    width: 300px;
    &:before, &:after {
    content:'';
    height:2px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background: black; 
    transition:0.2s ease all; 
    }
    &:before {
      left:50%;
    }
    &:after {
      right:50%; 
    }
 `

const Label = styled.label`
    color: #999;
    font-size: 18px;
    font-weight: 100;
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 20px;
    transition: 0.2s ease all;
    z-index:10;
    background: white;
 `

const TextWrapper = styled.input`
    font-size: 18px;
    padding: 18.5px 14px;
    display: block;
    width: 300px;
    border: ${(props) => (props.variant === 'outlined' ? 'solid #c4c4c4 1px' : 'none')};;
    border-bottom: 1px solid #c4c4c4;
    box-sizing: border-box;
    &:focus{
       outline:none; 
       }
    &:focus {
       border-color: blue;
       }
    &:hover ~ span:before, &:hover ~ span:after {
       width: 50%
       }
    &:focus ~ span:before, &:focus ~ span:after {
       width: 50%
       }
      &:focus ~ span:before, &:focus ~ span:after {
       background: #2076d2
       }
    &:focus ~ label {

      top :-10px;
      font-size:14px;
      color:#5264AE;
      padding: 0 5px;
    }
`

const TextField = ({ placeholder, variant }) => {
  return (
    <ThemeWrapper>
      <DivWrapper >
        <TextWrapper variant={variant} />
        <Bar />
        <Label>{placeholder}</Label>
      </DivWrapper>
    </ThemeWrapper>

  )
}

export default TextField;