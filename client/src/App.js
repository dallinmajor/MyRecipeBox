import React, { Component } from 'react';
import Page from './containers/page';
import Navbar from './components/navbar';
import Card from './components/card';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
};