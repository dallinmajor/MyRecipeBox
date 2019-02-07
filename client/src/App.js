import React, { Component } from 'react';
import MyNav from './containers/nav';
import Head from './containers/head';
import Main from './containers/main';
import Foot from './components/foot';
import API from './utils/API';
import { connect } from 'react-redux';
import setRecipe from './store/actions/set_recipe_action';
import setUser from './store/actions/set_user_action';

class App extends Component {

  componentWillMount() {
    this.setRedux();
  }

  setRedux() {
    API
      .User
      .validate('dallinmajor', 'Pin4Dallin')
      .then(res => {
        const user = res.data[0]
        const userProp = {
          username: user.username,
          id: user._id
        };

        this.props.setUser(userProp);
        this.props.setRecipe(user.recipes);
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

function mapDipsatchToProps(dispatch) {
  return bindActionCreators({ 
    setRecipe: setRecipe,
    setUser: setUser
   }, dispatch);
}

export default connect(null, mapDipsatchToProps)(App); 