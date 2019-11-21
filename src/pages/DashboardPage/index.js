import React,{Component} from 'react';
import NavigationMenu from '../../../src/components/NavigationMenu'
import { NavLink, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Card from '../../../src/components/Cards/Cards'
import house from '../../../src/components/Cards/assets/house.png';
import speech from '../../../src/components/Cards/assets/speech-bubble.png';
import user from '../../../src/components/Cards/assets/user.png';



class DashboardPage extends Component {
  
    render(){
      return(
        <>
        <Card>
        <div Description="Register Tenancy of A Property" UpperText="Register Tenancy" BottomText="Register" ImageLink={house}></div>
        <div Description="Register Tenancy of A Property" UpperText="Profile" BottomText="Get Started" ImageLink={user}></div>
        <div Description="Register Tenancy of A Property" UpperText="Report Tenant" BottomText="Report" ImageLink={speech}></div>
        
        </Card>
        </>
      )
      }
    }
  
  export default DashboardPage;
  