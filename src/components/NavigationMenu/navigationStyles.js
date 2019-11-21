import styled from 'styled-components';
import {device} from '../../helpers/device/device';
import {size} from '../../helpers/device/size';


export const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.laptop} {  // -> "@media (min-width: ${size.laptop})" -> "@media (min-width: 1024px)"
    min-width: ${size.laptop};
  }

  @media ${device.desktop} {
    max-width: 1800px;
  }
`;

export const NavBar = styled.div`
    right: 0;
    left: 0;
    background-color: #07608c;
    height: 70px;
`
export const ClientName = styled.li`
    font-weight: bold;
    color:white;
    text-align: left;
    list-style-type: none;
    font-size: 12px;
`
export const ClientProfession = styled.li`
    color:white;
    text-align: left;
    list-style-type: none;
    font-size: 12px;
`
export const ListParent = styled.div`
    padding-top: 22px;
    font-family: 'verdana';

`
export const Lister = styled.div`
    list-style-type: none;
    float: left;
    display: block;
	margin-right: 20px;
	cursor: pointer;
    padding-left: 15px;
    font-size: 12px;
    padding-right: 15px;
	padding-top:25px;
    padding-bottom: 23px;
    color: white;
    font-family: 'verdana';
    :hover {
        font-weight: bold;
        border-bottom: 4px solid white;
       -webkit-transition:border-bottom .25s ease;
        -moz-transition:border-bottom .25s ease;
        -ms-transition:border-bottom .25s ease;
         -o-transition:border-bottom .25s ease;
            transition:border-bottom .25s ease;
    
    }
    :visited {
        border-bottom: 4px solid white;
        font-weight: bold;
    }

`
export const Logo = styled.div`
    float: left;
    padding-top: 24px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 7%;
    margin-left: 7%;
    font-size:20px;
    `
export const Container = styled.div`border-radius:50%`
export const Image = styled.img`
    width: 70px;
    border-right: 3px solid transparent;
    height: 60px;
    float: left;
    border-radius: 50%;
`

