import React from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardHeader, CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';

import net_graph from '../media/net_graph.png';


export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-view">
                <div className="projects-section">
                    <Container>
                    <h2 className="projects-heading">Projects</h2>
                        <Row>
                            <Col>
                                <Card className="bottom-pad">
                                    <CardHeader className="card-header" tag="h3">Iwazeer</CardHeader>
                                    <CardBody>
                                        <CardSubtitle className="card-style">Web app for a website that allows visitors to leave a mark in a creative and personalised way.</CardSubtitle>
                                        <CardText className="card-text">React & Javascript & MongoDB</CardText>
                                    </CardBody>
                                    <CardLink href="#" className="link-style">Goto</CardLink>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="bottom-pad">
                                    <CardHeader className="card-header" tag="h3">Empty</CardHeader>
                                    <CardBody>
                                        <CardSubtitle className="card-style">A something that does something for some reason and provies something.</CardSubtitle>
                                        <CardText className="card-text">React</CardText>
                                    </CardBody>
                                    <CardLink href="#" className="link-style">Goto</CardLink>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="bottom-pad">
                                    <CardHeader className="card-header" tag="h3">Empty</CardHeader>
                                    <CardBody>
                                        <CardSubtitle className="card-style">A something that does something for some reason and provies something.</CardSubtitle>
                                        <CardText className="card-text">Java & Android</CardText>
                                    </CardBody>
                                    <CardLink href="#" className="link-style">Goto</CardLink>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}