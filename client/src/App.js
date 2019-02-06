import React, { Component } from 'react';
import MyNav from './containers/nav';
import Head from './containers/head';
import Main from './containers/main';
import Foot from './components/foot';


export default class App extends Component {
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