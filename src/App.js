import React,{Component} from 'react';
import NavigationMenu from '../src/components/NavigationMenu'
import Card from '../src/components/Cards'
import house from '../src/components/Cards/assets/house.png';
import speech from '../src/components/Cards/assets/speech-bubble.png';
import user from '../src/components/Cards/assets/user.png';
import { NavLink, Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import DashboardPage from '../src/pages/DashboardPage'
//import LicencePage from '../src/pages/LicencePage'
import HomePage from '../src/pages/HomePage'

class App extends Component {
  
  render(){
    return(
      <>
       <NavigationMenu> 
       <NavLink to="/dashboard" activeStyle={{ fontWeight: 'bold' }} style={{ textDecoration: 'none', color:'white' }}>Dashboard</NavLink>
       <NavLink to="/licence" activeStyle={{ fontWeight: 'bold' }} style={{ textDecoration: 'none', color:'white' }}>Licence</NavLink>
       <NavLink to="/homepage" activeStyle={{ fontWeight: 'bold' }} style={{ textDecoration: 'none', color:'white' }}>HomePage</NavLink>
       <NavLink to="/dashboard" activeStyle={{ fontWeight: 'bold' }} style={{ textDecoration: 'none', color:'white' }}>Dashboard</NavLink>
       <NavLink to="/licence" activeStyle={{ fontWeight: 'bold' }} style={{ textDecoration: 'none', color:'white' }}>Licence</NavLink>
       <NavLink to="/licence" activeStyle={{ fontWeight: 'bold' }} style={{ textDecoration: 'none', color:'white' }}>Licence</NavLink>
     
        </NavigationMenu>
      </>
    )
    }
  }

export default App;
