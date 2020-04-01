import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Badge
  } from 'reactstrap';


import { scroller } from 'react-scroll'
import './styles/navigation-default.css';
import './styles/scrollbutton-default.css';

import { IoIosArrowUp } from "react-icons/io";

export default class NavigationControl extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      theposition: 0,
      isVisible: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  gotoTop() {
    if (this.state.isOpen) {this.setState({isOpen: false})}
    scroller.scrollTo('landing-view', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  gotoAbout() {
    if (this.state.isOpen) {this.setState({isOpen: false})}
    scroller.scrollTo('about-view', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  gotoProjects() {
    if (this.state.isOpen) {this.setState({isOpen: false})}
    scroller.scrollTo('projects-view', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  gotoContact() {
    if (this.state.isOpen) {this.setState({isOpen: false})}
    scroller.scrollTo('contact-view', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }


  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = Math.round((winScroll / height) * 100)

    if (scrolled>20){
      this.setState({isVisible: true})

      if (scrolled==="100"){
        this.setState({
          theposition: "Top",
        })
      }
      else {
        this.setState({
          theposition: scrolled+"%",
        })
      }
    }
    else {
      this.setState({isVisible: false})
    }
  }

  render() {
    return (
      <div>
      {
        this.state.isVisible ?
        <Navbar color="none" dark expand="md" fixed={`top`} id="navbar-hidden">
          <NavbarBrand id="brand" onClick={() => this.gotoTop()}><b>coding</b>mroberts</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem id="nav-item">
                <Button id="nav-button" color="link"onClick={() => this.gotoAbout()}>About</Button>
              </NavItem>
              <NavItem id="nav-item">
                <Button id="nav-button" color="link"onClick={() => this.gotoProjects()}>Projects</Button>
              </NavItem>
              <NavItem id="nav-item">
                <Button id="nav-button" color="link"onClick={() => this.gotoContact()}>Contact</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        :
        <Navbar color="none" dark expand="md" fixed={`top`} id="navbar-visible">
          <NavbarBrand id="brand" onClick={() => this.gotoTop()}><b>coding</b>mroberts</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem id="nav-item">
                <Button id="nav-button" color="link"onClick={() => this.gotoAbout()}>About</Button>
              </NavItem>
              <NavItem id="nav-item">
                <Button id="nav-button" color="link"onClick={() => this.gotoProjects()}>Projects</Button>
              </NavItem>
              <NavItem id="nav-item">
                <Button id="nav-button" color="link"onClick={() => this.gotoContact()}>Contact</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      }

        <div id="scroll-button-body">
        {
              this.state.isVisible ?
              <Button id="scroll-button-visible" onClick={()=>this.gotoTop()}>
                <div><IoIosArrowUp /></div>
                <Badge id="scroll-percentage" color="secondary">{this.state.theposition}</Badge>
              </Button>
              :
              <Button id="scroll-button-hidden">
                <div><IoIosArrowUp /></div>
                <Badge id="scroll-percentage" color="secondary">{this.state.theposition}</Badge>
              </Button>
        }
        </div>
      </div>
    );
  }
}