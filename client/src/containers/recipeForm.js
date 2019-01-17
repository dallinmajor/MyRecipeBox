import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { setUser } from '../store/actions';
// import { bindActionCreators } from 'redux';


class RecipeForm extends Component {

    render() {
        return (
            <div class='container'>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Example select</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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