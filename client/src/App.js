import React, { Component } from 'react';
import NavigationBar from './containers/navigationBar';
import Card_1 from './components/Wrappers/card_1';
import RecipeForm from './containers/recipeForm';
import Page from './containers/page';

const AddRecipe = () => {
  console.log('this was ran')
  return (
    <Card_1><RecipeForm /></Card_1>
  )
};


export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Page/>
        <AddRecipe/>
      </div>
    )
  }
};