import React,{Component, Children} from 'react';
import {Lister, OverallContainer, Container, Centifier, Image, ImageCentifier, UpperTextContent, BottomTextContent} from './CardStyles'



export default class Cards extends Component {
    
    render(){
        const lists = Children.map(this.props.children, child => ( 
    <Lister>{child}<UpperTextContent>{child.props.UpperText}</UpperTextContent><ImageCentifier><Image src={child.props.ImageLink}/></ImageCentifier><BottomTextContent>{child.props.Description}</BottomTextContent><Container><Centifier>{child.props.BottomText}</Centifier></Container> </Lister>
        ));
        return (
         <OverallContainer>
            {lists}
            </OverallContainer>
        )
    }
}
