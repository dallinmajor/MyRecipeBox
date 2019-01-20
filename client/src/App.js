import React, { Component } from 'react';
import Page from './containers/page';
import NavigationBar from './containers/navigationBar';
import Card from './components/card';
import RecipeForm from './containers/recipeForm';
import Overlay from './components/Overlays/overlay';
import OverLay from './components/Overlays/overlay';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        {/* <Body></Body> */}
        <Router>
          <Route/>
          <Route/>
          <Route/>
        </Router>
      </div>
    )
  }
};