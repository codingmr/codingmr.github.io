import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
  } from 'reactstrap';

  import * as Scroll from 'react-scroll';
  import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
   

export default class Navigationbar extends React.Component {
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

  gotoTop() {
    scroll.scrollToTop();
  }

  gotoAbout() {
    var html = document.documentElement.clientHeight;
    
    scroll.scrollTo(html);
  }
  
  gotoProjects() {
    var html = document.documentElement.clientHeight * 2;

    scroll.scrollTo(html);
  }

  render() {
    return (
      <div>
        <Navbar color="none" dark expand="md" fixed={`top`} className="navbar-border">
          <NavbarBrand className="brand" onClick={this.gotoTop}><b>coding</b>mroberts</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-button" onClick={this.gotoAbout}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-button" onClick={this.gotoProjects}>Projects</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}