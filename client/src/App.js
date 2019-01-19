import React, { Component } from 'react';
import Page from './containers/page';
import Navbar from './components/navbar';
import Card from './components/card';
import RecipeForm from './containers/recipeForm';
import Overlay from './components/Overlays/overlay';
import OverLay from './components/Overlays/overlay';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class='container'>

          <OverLay>
            <RecipeForm />
          </OverLay>
        </div>
      </div>
    );
  }
};