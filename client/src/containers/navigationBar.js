import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">RecipeBox</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="#">Logout</NavItem>               
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};


export default connect(mapStateToProps)(NavigationBar);