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
import './styles/navigation-default.css';

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

  gotoContact() {
    var html = document.documentElement.clientHeight * 3;

    scroll.scrollTo(html);
  }

  render() {
    return (
      <div>
        <Navbar color="none" dark expand="md" fixed={`top`} id="navbar-border">
          <NavbarBrand id="brand" onClick={this.gotoTop}><b>coding</b>mroberts</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem id="nav-item">
                <Button id="nav-button" color="link"onClick={this.gotoAbout}>About</Button>
              </NavItem>
              <NavItem id="nav-item">
                <Button id="nav-button" color="link"onClick={this.gotoProjects}>Projects</Button>
              </NavItem>
              <NavItem id="nav-item">
                <Button id="nav-button" color="link"onClick={this.gotoContact}>Contact</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
