import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container } from '../components/Grid';
import Card from '../components/card';
import Body from '../components/Wrappers/body';
import setRecipe from '../store/actions/recipeActions';

class Page extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isCreating: false
        }
    }
    handleNewRecipeClick = () => {
        this.setState({isCreating: true})
    }

    exitNewRecipe = () => {
        this.setState({isCreating: false})
    }

    recipeClicked = (recipe) => {
        console.log(recipe);
    }

    render() {
        return (
            <div>
                <Container>
                <Body>
                {this.props.recipes ? this.props.recipes.map(recipe => {
                    return <Card
                                title={recipe.name}
                                description={recipe.description}
                                recipe={[recipe.recipe]}
                                recipeClicked={this.recipeClicked}
                            />
                }) : null}
                </Body>   
            </Container>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipeOnDisplay: state.recipeOnDisplay
    }
};

function mapDipsatchToProps(dispatch) {
    return bindActionCreators({ setRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDipsatchToProps)(Page);
