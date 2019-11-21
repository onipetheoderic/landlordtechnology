import React,{Component, Children} from 'react';
import styled from "styled-components";
import {Logo, Page, NavBar, Lister, Image, ClientName, ListParent, ClientProfession} from "./navigationStyles";
import imagePlaceholder from './placeholder-male.png';


export default class NavigationMenu extends Component {
    
    render(){
        const lists = Children.map(this.props.children, child => ( 
                 <Lister>{child}</Lister>
        ));
        return (
            <Page>
                <NavBar>
                 <Logo>Lasretrad</Logo>{lists}  <Image src={imagePlaceholder} /> <ListParent><ClientName>Ademola Gbadamosi</ClientName><ClientProfession>Landlord</ClientProfession></ListParent> 
                </NavBar>
            </Page>
            )
    }
}