import React, { Component } from 'react';
import DropDown from '../components/dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteRecipe from '../store/actions/delete_recipe_action';
import API from '../utils/API';


class EditDropDown extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    deleteRecipe() {
        console.log(this.props.id);
        this.props.deleteRecipe(this.props.id);
        this.props.exit();
    }

    handleDeleteClicked = () => {
        this.deleteRecipe()
    }

    render() {
    
        return this.props.id ? (
            <div className='edit'>
            <DropDown name='edit'>
                <p className='dropdown-item'>edit</p>
                <p className='dropdown-item' onClick={this.handleDeleteClicked}>delete</p>
            </DropDown>
            </div>
        ) : null;
    }
}

function mapDipsatchToProps(dispatch) {
    return bindActionCreators({ deleteRecipe }, dispatch);
}

// const mapStateToProps = (state) => {
//     return {
//         categories: state.categories,
//         user: state.user
//     }
// }

export default connect(null, mapDipsatchToProps)(EditDropDown);
