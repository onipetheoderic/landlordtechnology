import styled from 'styled-components';
import {device} from '../../helpers/device/device';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {size} from '../../helpers/device/size';


export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "#05405d"};
  background: white;
  width: 90%;
  border: 1px solid #DDDDDD;
  padding: 1em;
  margin-top: 20px;
  float: left;
  border-radius: 3px;
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
 :focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
 }
 

  @media ${device.laptop} {
    width: ${props => props.inputWidth || '25%'};
    
    border: 1px solid gray;
  }

`;

export const StyledIcon = styled(FontAwesomeIcon)`  
  padding-left:4;
  padding-right:4;
  padding-bottom: 12px;
  padding-top: 10px;  
  background: #05405d;
  color: white;
  min-width: 50px;
  text-align: center;
  height: 19px;
  margin-top: 20px;

`;

export const Container = styled.div`
  width: 70%
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  font-family: "sans-serif";
  text-align: center;
`

export const IconFormContainer = styled.div`
display: flex;
width: 100%;
margin-bottom: 15px;

`

export const Spacer = styled.div `
  margin: 2%;
`

export const IconInput = styled.input`
  width: 40%;
  padding: 10px;
  outline: none;
  height: 19px;
  margin-top: 20px;

`

export const Label = styled.label`
  font-size: 11px;
`

export const Button = styled.button`
  height: 45px;
  border: none;
  width: 100%;
  color: white;
  border-radius: 3px;
  background-color: #05405d;

`
