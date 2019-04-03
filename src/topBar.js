import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, FormGroup, Button, Input } from 'reactstrap';

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMZFzQw4GUNeJz26PswTpAGojWR6zJn-745K2E2GiC6vHLqma1w "
              alt=""
            />
          </NavbarBrand>
          <NavbarBrand href="/">Title</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem />
              <NavItem>
                <FormGroup>
                  <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                  <Button>Submit</Button>
                </FormGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
