import React, { Component } from 'react';
import NavigationBar from './containers/navigationBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card_1 from './components/Wrappers/card_1';
import RecipeForm from './containers/recipeForm';

const AddRecipe = () => <Card_1><RecipeForm/></Card_1>;


export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        {/* <Body></Body> */}
        <Router>
          <Route path='/recipe/new' Component={AddRecipe}/>
          <Route/>
          <Route/>
        </Router>
      </div>
    )
  }
};