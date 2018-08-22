import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import net_graph from '../media/net_graph.png';
// ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class About extends React.Component {
    render() {
        return (
            <Element name="land">
            <div className="about-view">
                <div className="about-section">
                    <Container>
                    <h2 className="section-heading">About me</h2>
                        <Row>
                            <Col xs="auto"><img className="box" src={net_graph} /></Col>
                            <Col className="maxWidth">
                                <div className="section-p">
                                    <p className="assured">
                                        I'm super interested in how things work, function, operate and most of all how
                                        an action can be automated. The projects that I've worked on so far have been
                                        ideal for quickly learning the different stages in a development cycle. The best
                                        candidate that gives the fastest results is React, infact this
                                        website was built with it.
                                    </p>
                                    
                                    <p className="assured">
                                        When I'm not spending my time hitting buttons (writing code) I enjoy exploring beautiful places, getting mind deep into a sci-fi film, 
                                        or poised in some strange position, <i>luckily they call it yoga these days.</i>
                                    </p>

                                    <p className="assured">
                                        Some technologies I'm familiar with are: <b>MySQL</b>, <b>React</b>, <b>Java</b> and <b>MongoDB</b>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            </Element>
        );
    }
}