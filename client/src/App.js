import React, { Component } from 'react';
import NavigationBar from './containers/navigationBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Card_1 from './components/Wrappers/card_1';
import RecipeForm from './containers/recipeForm';

const AddRecipe = () => {
  console.log('this was ran')
  return (
    <Card_1><RecipeForm /></Card_1>
  )
};


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          {/* <Body></Body> */}

          <Route path='/recipe/new' Component={AddRecipe} />
          <Route />
          <Route />

        </div>
      </Router >
    )
  }
};