import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import { Link } from 'react-router-dom';
 import '../components/css/index.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='shadow'>
        <Navbar expand="md" bg="dark" variant="dark"  className='navbar navbar-expand-lg navbar-danger bg-danger'>
          <NavbarBrand href="/">React and Redux </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto link-light" navbar>
             <NavItem>
                <NavLink> <Link tag="a" to="/add" className='btn btn-outline-light' style={{marginLeft:'900px'}}>Add Post</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}