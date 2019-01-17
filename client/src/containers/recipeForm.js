import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { setUser } from '../store/actions';
// import { bindActionCreators } from 'redux';


class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            htmlVal: ''
        }
    }

    sanatizeInput = (input) => {
        return input.replace(/<.*?script|style=|class=/g, '');
    }

    handleOnChange = (e) => {
        let input = this.sanatizeInput(e.target.value);
        this.setState({
            inputVal: input,
            htmlVal: '<p>' + input.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>'
        });
        console.log(this.state.inputVal);
        console.log(this.state.htmlVal);
    }

    render() {
        return (
            <div className="recipe-card">
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Recipe Name</label>
                        <input className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Category</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Deserts</option>
                            <option>Soups</option>
                            <option>Sandwiches</option>
                            <option>Salads</option>
                            <option>Cookies</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" value={this.state.inputVal} onChange={this.handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }

// const mapDispatchToProps = (dispatch) => {

//     return bindActionCreators({ setUser: setUser }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Page);

export default RecipeForm