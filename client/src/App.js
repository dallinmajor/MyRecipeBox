import React, { Component } from 'react';
import Page from './containers/page';
import NavigationBar from './containers/navigationBar';
import Card from './components/card';
import RecipeForm from './containers/recipeForm';
import Overlay from './components/Overlays/overlay';
import OverLay from './components/Overlays/overlay';
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <NavigationBar/>
    )
  }
};