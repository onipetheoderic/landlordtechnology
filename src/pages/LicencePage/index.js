import React,{Component} from 'react';
import NavigationMenu from '../../../src/components/NavigationMenu'
import { NavLink, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Card from '../../../src/components/Cards/Cards'
import house from '../../../src/components/Cards/assets/house.png';
import speech from '../../../src/components/Cards/assets/speech-bubble.png';
import user from '../../../src/components/Cards/assets/user.png';
import {Input, Container,IconFormContainer,IconInput, StyledIcon, Spacer, Button, Label } from '../../../src/components/Input'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class LicencePage extends Component {
  
    render(){
      return(
        <>

    <Container>
   
   
  <IconFormContainer>
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" name="firstname"/>
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    <Input type="text" defaultValue="Username" inputWidth='16%' margin="false"/>
    <Input type="text" defaultValue="Username" inputWidth='16%'/>  
  </IconFormContainer>
  
  <IconFormContainer>
  <Input type="text" defaultValue="Username" inputWidth='29%'/>
  <Input type="text" defaultValue="Username" inputWidth='29%'/>
  <Input type="text" defaultValue="Username" inputWidth='29%'/>
  </IconFormContainer>

  <IconFormContainer>
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    <Input type="text" defaultValue="Username" inputWidth='55%'/>
  </IconFormContainer>

  <IconFormContainer>
  <IconInput defaultValue="@geelen" type="text" inputColor="rebeccapurple" /> <StyledIcon icon={faHome} />
  <Spacer/>
   <Input type="text" defaultValue="Username" inputWidth='29%'/>
   <Spacer/>
   <IconInput defaultValue="@geelen" type="text" inputColor="rebeccapurple" /> <StyledIcon icon={faHome} />
  </IconFormContainer>
  
  <IconFormContainer>
   <IconInput defaultValue="@geelen" type="text" inputColor="rebeccapurple" /> <StyledIcon icon={faHome} />
   <Spacer/>
   <Input type="text" defaultValue="Username" inputWidth='35%'/>
   <Spacer/>
   <Input type="text" defaultValue="Username" inputWidth='35%'/>
  </IconFormContainer>

        <Button>Register</Button>
      </Container>


        </>
      )
      }
    }
  
  export default LicencePage;
  