import styled from 'styled-components';
import {device} from '../../helpers/device/device';
import {size} from '../../helpers/device/size';


export const Lister = styled.div`
    border: 1px solid gray;
    transition: 0.3s;
    height: 250px;
    justify-content: center;
    position: relative;
    float: left;
    width: 25%;
    margin-left:8%;
    margin-top: 50px;
    :first-child {
        margin-left:4%;
    }
    :hover {
        border: 1px solid transparent;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    `
export const OverallContainer = styled.div`
  padding-left: 10%;
  width: 80%;
   
    `

export const Container = styled.div`
    background-color: #05405d;
    width: 100%;
    height: 50px;
    position: absolute;
    
    bottom: 0;
`

export const Centifier = styled.p`
    text-align: center;
    font-size: 15px;
    font-weight: 'bold';
    color: white;
`

export const ImageCentifier = styled.p`
    text-align: center;
    font-size: 15px;
    font-weight: 'bold';
    color: white;
`

export const Image = styled.img`
    width: 70px;
    height: 60px;

`

export const UpperTextContent = styled.p`
    color: #05405d;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 14px;
    font-weight: bold;
    text-transform: capitalize;

`

export const BottomTextContent = styled.p`
    color: #05405d;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 13px;
    text-transform: capitalize;

`