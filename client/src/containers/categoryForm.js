import React, { Component } from 'react';
import Modal from '../components/modal';
import API from '../utils/API';
import { connect } from 'react-redux';
import addCategory from '../store/actions/add_category_action';

class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'category': ''
        }
    }

    handleInputChange = (e) => {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // API.Categories
        //     .create(this.state.category)
        //     .then(res => console.log(res));

        this.props.addCategory(this.state.category);
        this.props.exitCard();
    }

    render() {
        return (
            <Modal exit={this.props.exitCard}>
            <form>
                <input value={this.state.category} name={'category'} onChange={this.handleInputChange}/>
                <button className='form-btn' onClick={this.handleSubmit}>Add Category</button>
            </form>
            </Modal>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        user: state.user
    }
}

export default connect(mapStateToProps, { addCategory })(CategoryForm);