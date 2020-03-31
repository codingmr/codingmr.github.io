import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
  } from 'reactstrap';


import { scroller } from 'react-scroll'
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
    scroller.scrollTo('landing-view', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  gotoAbout() {
    scroller.scrollTo('about-view', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  gotoProjects() {
    scroller.scrollTo('projects-view', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  gotoContact() {
    scroller.scrollTo('contact-view', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
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
