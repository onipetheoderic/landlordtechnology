import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

import {device} from '../../helpers/device/device';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {size} from '../../helpers/device/size';
import bg from './assets/bg.jpg'

export const Body = styled.div`  
  background-image: url(${bg});
  top: 0;
  left: 0;
  right: 0;
`
export const GlobalStyle = createGlobalStyle`
  body {
    background-image:  url(${bg});
  }
`

export const LogoName = styled.div `
    color: lime;
    height: 60px;
    margin-top: 10px;
    width: 80%;
    margin-right:5%;
    margin-left:12%;  
    border-bottom: 1px solid gray;

`

export const Logo = styled.h1`
    color: lime;
    text-decoration: underline;
    float: left;
    margin-right: 150px;
    margin-left: 150px;
`

export const Button = styled.button`
  height: 40px;
  border: 1px solid white;
  margin-right:20px;
  width: ${props => props.Width || '200px'};
  color: ${props => props.fontColor || 'white'};
  border-radius: 3px;
  background-color: ${props => props.bgColor || 'transparent'};
  margin-bottom: 30px;
  float: left;
  margin-top: 18px;

`


export const Footer = styled.div`
width: 100%;
height: 200px;
bottom: 0;
background-color: white;
`
export const HeaderTextContainer = styled.div`
    margin-top: ${props => props.VerticalSpace || '200px'}; 
    width: 40%;
    margin-left: 10%;
`
export const HeaderText = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: ${props => props.textSize || '30px'};
  
`
export const BodyText = styled.h1`
  color: white;
  font-size: 13px;
  font-family: 'verdana';
  font-weight: 100;
`

export const ContainFooter = styled.section`
width: 100%;
height: 200px;

bottom: 0;

`
export const FooterTextContainer = styled.div`
    width: 20%;
    margin-left: 5%;
    float: left;
`
export const FooterHeader = styled.h5`
    font-size: 15px;
    height: 3px;
    font-weight: bold;
`
export const FooterText = styled.li`
    list-style-type: none;
    font-size: 12px;
    backround-color: #033046;
`

export const CurvedContainer = styled.div`
    width: 60%;
    right: 0;
    border-left-radius: 20px;
    border-start-start-radius: 15px;
    background-color: white;
    height: 100px;
    margin-left: 40%
`

export const CurvedContent = styled.div`
    width: 30%;
    float: left;

`

export const CurvedContentContain = styled.div`
  width: 100%;

`

export const Image = styled.img`
    width: 60px;
    height: 60px;
    float: left;
    padding-left: 15px;
    padding-top: 15px;
`


export const TopLine = styled.div`
    margin-top: 20px;
    position: absolute;
    width: 80%;
    margin-bottom: 40px;    
    margin-left: 12%;
    top: 40px;
    border-bottom: 1px solid gray;
`

export const ParentMenu = styled.div`
    margin-top: 20px;
    position: absolute;
    width: 80%;
    margin-bottom: 40px;    
    margin-left: 12%;
    top:100px;
    border-bottom: 2px solid gray;
`
export const Menu = styled.li`
    float: left;
    text-transform: capitalize;
    color: white;
    margin-right: 20px;
    :last-child {
        margin-right: 0;
    }
    padding-bottom: 10px;
    font-size: 12px;
    list-style-type: none;

`

export const CurvedContainerHeader = styled.div`
    font-size: 12px;
    float: left;
    padding-left: 15px;
    padding-top: 10px;
    color: gray;

`

export const CurvedContentText = styled.div`
  font-size:12px;
  color: black;
  margin-left: 90px;
margin-top: 38px;
font-size: 10px;
`
