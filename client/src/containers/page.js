import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Container } from '../components/Grid';

class Page extends Component {

    render() {
        return (
            <Container>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" active>
                        New
                    </Button>
                    <Button bsSize="large" active>
                        Search by name
                    </Button>
                </ButtonToolbar>
            </Container>
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
