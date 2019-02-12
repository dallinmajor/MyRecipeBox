import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modal';
import setRecipeDisplay from '../store/actions/set_display_recipe_action';

class DisplayRecipe extends Component {

    render() {

        const recipe = this.props.displayRecipe ? this.props.displayRecipe : false;

        function createMarkup() {
            return { __html: "<p>" + recipe.recipe + "</p>" };
        }

        function renderHTML() {
            return <div dangerouslySetInnerHTML={createMarkup()} />;
        }

        return this.props.displayRecipe ? (
            <div>
                <Modal exit={this.props.setRecipeDisplay}>
                    <div className='recipe-card'>
                        <h2 className='center'>{recipe.name}</h2>
                        <h4>{recipe.description}</h4>
                        <br />
                        {renderHTML()}
                    </div>

                </Modal>
            </div>
        ) : null;
    }
}

const mapStateToProps = (state) => {
    return {
        displayRecipe: state.displayRecipe
    }
}

export default connect(mapStateToProps, { setRecipeDisplay })(DisplayRecipe);