import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../store/actions';
import { bindActionCreators } from 'redux';

class Page extends Component {

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        recipes: state.recipes,
        recipeOnDisplay: state.recipeOnDisplay
    }
};

export default connect(mapStateToProps)(Page);
