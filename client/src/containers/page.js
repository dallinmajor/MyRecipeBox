import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../store/actions';
import { bindActionCreators } from 'redux';
import Display from '../components/display';
import Search from '../components/search';
import API from '../utils/API';

class Page extends Component {

    handleSetUser = (username) => {
        API.User.validate(username)
            .then(res => this.props.setUser(res.data[0]));
    }

    render() {
        return (
            <div className='container'>
                <br></br>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Dallin's MERN stack build kit</h1>
                        <p className="lead">If on my hosted site, usernames include: test, johnsnow, peterparker, sasukeuchiha, saitama, </p>
                    </div>
                </div>
                <Search setUser={this.handleSetUser} />
                <br></br>
                {this.props.user ? (
                    <Display display={[this.props.user]} />
                ) : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ setUser: setUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
