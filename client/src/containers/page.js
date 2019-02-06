import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Container } from '../components/Grid';
import RecipeForm from '../containers/recipeForm';
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
                <ButtonToolbar>
                    <Button onClick={this.handleNewRecipeClick} bsStyle="primary" bsSize="large" active>
                        New Recipe
                    </Button>
                    <Button bsSize="large" active>
                        Category
                    </Button>
                </ButtonToolbar>
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
            {this.state.isCreating ? <RecipeForm exitCard={this.exitNewRecipe}/> : null}
            
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

function mapDipsatchToProps(dispatch) {
    return bindActionCreators({ setRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDipsatchToProps)(Page);
