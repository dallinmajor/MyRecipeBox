import React, { Component } from 'react';
import MyNav from './containers/nav';
import Head from './containers/head';
import Main from './containers/main';
import Foot from './components/foot';
import API from './utils/API';
import { connect } from 'react-redux';
import setRecipe from './store/actions/set_recipe_action';

class App extends Component {

  componentWillMount() {
    this.getUser();
  }

  getUser() {
    API
      .User
      .validate('dallinmajor', 'Pin4Dallin')
      .then(res => {
        const test = {};

        test[res.data[0].recipes[0]["_id"]] = res.data[0].recipes[0];

        console.log(test);

        this.props.setRecipe(res.data[0].recipes)
      });
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

export default connect(null, { setRecipe })(App); 