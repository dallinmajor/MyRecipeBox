import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Container } from '../components/Grid';
import RecipeForm from '../containers/recipeForm';

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

    render() {
        return (
            <div>
                <Container>
                <ButtonToolbar>
                    <Button onClick={this.handleNewRecipeClick} bsStyle="primary" bsSize="large" active>
                        New
                    </Button>
                    <Button bsSize="large" active>
                        Search by name
                    </Button>
                </ButtonToolbar>
            </Container>
            {this.state.isCreating ? <RecipeForm onXClicked={this.exitNewRecipe}/> : null}
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
