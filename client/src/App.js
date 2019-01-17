import React, { Component } from 'react';
import Page from './containers/page';
import Navbar from './components/navbar';
import Card from './components/card';
import RecipeForm from './containers/recipeForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class='container'>
          <RecipeForm />
          {/* <div className='container'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
        </div>
      </div>
    );
  }
};