import React,{Component} from 'react';
import NavigationMenu from '../../../src/components/NavigationMenu'
import Card from '../../../src/components/Cards/Cards'
import house from '../../../src/components/Cards/assets/house.png';
import speech from '../../../src/components/Cards/assets/speech-bubble.png';
import user from '../../../src/components/Cards/assets/user.png';
import {Logo, Button, CurvedContentContain, ContainFooter, LogoName, TopLine, ParentMenu, Menu, CurvedContentText, CurvedContent, Image, CurvedContainerHeader, CurvedContainer, HeaderTextContainer, HeaderText, GlobalStyle, BodyText, Footer, FooterTextContainer, FooterHeader, FooterText} from '../../../src/components/BackgroundImage'
import { faHome, faSearch, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import images from '../../../src/components/BackgroundImage/assets/images.jpg'
import index from '../../../src/components/BackgroundImage/assets/index.jpg'



class HomePage extends Component {

    render(){
      return(
        <>
          <GlobalStyle whiteColor />

        <LogoName>
            <Button  fontColor="white"><FontAwesomeIcon icon={faHamburger} />   Download Tenancy Form</Button>
            <Button Width='80px'><FontAwesomeIcon icon={faSearch} /></Button>

            <Logo>LASRETRAD</Logo>
            
            <Button Width='110px'> <NavLink to="/dashboard" activeStyle={{ fontWeight: 'bold' }} style={{ textDecoration: 'none', color:'white' }}>Dashboard</NavLink></Button>
            <Button Width='110px' bgColor="white" fontColor="black">Login</Button>
        </LogoName>
            
          

        <ParentMenu>
        <Menu>Directory</Menu>
        <Menu>Get & Renew Licence</Menu>
        <Menu>Registration </Menu>    
        <Menu>Complaints & Petitions</Menu>
        <Menu>Information and Data Analysis</Menu>
        <Menu>Whistle Blowing</Menu>     
        <Menu>Education</Menu>
        <Menu>Rules & Regulations</Menu>
        <Menu>News & Events</Menu>
          </ParentMenu>

         <HeaderTextContainer>
             <HeaderText>Lagos State Real Estate transaction Department</HeaderText>
             <BodyText>The Legislation for the establishment of Real estate transactions Department was confirmed by an executive order
                 EO/BRF/009 of 2012 by the erstwhile Governor of Lagos State. Mr Babatunde Raji Fashola (SAN)
             </BodyText>
             
         </HeaderTextContainer>

         <HeaderTextContainer VerticalSpace="300px">
             <HeaderText textSize='15px'>New Lasertrad Policy</HeaderText>
             <BodyText>The Legacy of a New Lagos, A New Dawn
             </BodyText>
             
         </HeaderTextContainer>

        
<ContainFooter>
<CurvedContentContain>
<CurvedContainer>
            <CurvedContent>
                <Image src={images} />
                <CurvedContainerHeader>Feedback</CurvedContainerHeader>
                <CurvedContentText>Ministry of Housing (LASRETRAD), AUG, 2014</CurvedContentText>
            </CurvedContent>
            <CurvedContent>
                <Image src={index} />
                <CurvedContainerHeader>Agent</CurvedContainerHeader>
                <CurvedContentText>Lagos State supporting Real Estate Agent</CurvedContentText>
            </CurvedContent>
            <CurvedContent>
                <Image src={images} />
                <CurvedContainerHeader>Developer</CurvedContainerHeader>
                <CurvedContentText>Starting the Construction of New Lagos</CurvedContentText>
            </CurvedContent>
        </CurvedContainer>
</CurvedContentContain>
    <Footer>
        <FooterTextContainer>
            <FooterHeader>LASRETRAD</FooterHeader>
            <FooterText>Lagos State Real Estate Transaction Department</FooterText>
            <FooterText>Block 21, First Floor, Room 119</FooterText>
            <FooterText>The Secretariate</FooterText>
            <FooterText>Alausa, Ikeja</FooterText>
            <FooterText>Lagos</FooterText>
        </FooterTextContainer>
        <FooterTextContainer>
            <FooterHeader>COMPANY</FooterHeader>
            <FooterText>About Us</FooterText>
            <FooterText>About Lagos</FooterText>
            <FooterText>FAQ</FooterText>
            <FooterText>Latest News</FooterText>
            <FooterText>Contact</FooterText>
        </FooterTextContainer>
        <FooterTextContainer>
            <FooterHeader>Product</FooterHeader>
            <FooterText>Download Complaint Form</FooterText>
            <FooterText>Download Agent Licence Registration</FooterText>
            <FooterText>Download LaserTrad Register</FooterText>
            <FooterText>Publication</FooterText>
            <FooterText>Property Price Survey</FooterText>
        </FooterTextContainer>
        <FooterTextContainer>
            <FooterHeader>LASRETRAD</FooterHeader>
            <FooterText>01-1234597</FooterText>
            <FooterText>info@lasretrad.com</FooterText>
            <FooterText>Terms of Service</FooterText>
            <FooterText>Privacy Policy</FooterText>
        </FooterTextContainer>
         </Footer>
         </ContainFooter>
        </>


      )
      }
    }
  
  export default HomePage;
  