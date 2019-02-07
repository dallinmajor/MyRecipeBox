import React, { Component } from 'react';
import MyNav from './containers/nav';
import Head from './containers/head';
import Main from './containers/main';
import Foot from './components/foot';
import API from './utils/API';

export default class App extends Component {

  componentWillMount() {
    this.getUser();
  }

  getUser() {
    API
      .Recipes.create('5bfb2880ea906da73e1ea279', {
        name: 'Turkey Bacon Club',
        description: 'This is my fav sandwhich',
        category: 'poop',
        recipe: 'take a thing and put it in a thing',
        user: '5bfb2880ea906da73e1ea279'
      }).then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <MyNav/>
        <div className='container'>
          <Head/>
          <Main/>
        </div>
        <Foot/>
      </div>
    )
  }
};