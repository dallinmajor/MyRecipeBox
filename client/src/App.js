import React, { Component } from 'react';
import MyNav from './containers/nav';
import Main from './containers/main';
import Foot from './components/foot';
import API from './utils/API';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import setRecipe from './store/actions/set_recipe_action';
import setUser from './store/actions/set_user_action';
import setCategories from './store/actions/set_categories_action';
import DisplayRecipe from './containers/display';

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
        this.props.setCategories(user.categories)
      });
  }

  render() {
    return (
      <div>
        <MyNav/>
        <div className='container'>
          <DisplayRecipe/>
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
    setUser: setUser,
    setCategories: setCategories
   }, dispatch);
}

export default connect(null, mapDipsatchToProps)(App); 