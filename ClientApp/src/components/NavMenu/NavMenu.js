import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './NavMenu.css';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">react_fe_workshop</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              {/* <Link to={"/"}>Home</Link> */}
              <NavLink href={'/'}>Home</NavLink>
            </NavItem>
           {/* <NavItem>
               <Link to={"/counter"}>Conter</Link> 
            </NavItem>
            <NavItem>
               <Link to={"/fetchdata"}>Fetch Data</Link> 
            </NavItem>*/}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
