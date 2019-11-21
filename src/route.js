import React,{Component} from 'react';
import LicencePage from './pages/LicencePage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export const Routing = (
  <Router>
    <div>
    <Route path="/" component={App} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/licence" component={LicencePage} />
      <Route path="/homepage" component={HomePage} />
    </div>
  </Router>
)