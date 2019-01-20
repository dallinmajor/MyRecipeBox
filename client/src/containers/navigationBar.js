import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, FormGroup, Button, FormControl } from 'react-bootstrap';
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
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                    </Navbar.Form>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
                            {this.props.categories ? this.props.categories.map((category, index) => {
                                return <MenuItem eventKey={index}>{category}</MenuItem>
                            }) : null}
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>New Category</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="/recipe/new">New Recipe</NavItem>
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