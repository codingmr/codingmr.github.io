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
                                    <CardHeader className="card-header" tag="h3">Media Review</CardHeader>
                                    <CardBody>
                                        <CardSubtitle className="card-style">A simple console program to save, view and edit media items that have been added to the system.</CardSubtitle>
                                        <CardText className="card-text">Java</CardText>
                                    </CardBody>
                                    <CardLink href="https://github.com/codingmr/Media-Review" className="link-style">Goto</CardLink>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="bottom-pad">
                                    <CardHeader className="card-header" tag="h3">Procrastinotion</CardHeader>
                                    <CardBody>
                                        <CardSubtitle className="card-style">A collaborative chrome extention project. The App monitors a users browsing habits and prompts the user if it detects procrastination.</CardSubtitle>
                                        <CardText className="card-text">JavaScript</CardText>
                                    </CardBody>
                                    <CardLink href="https://github.com/Apachean/procrastinotion" className="link-style">Goto</CardLink>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="bottom-pad">
                                    <CardHeader className="card-header" tag="h3">A collection of python scripts</CardHeader>
                                    <CardBody>
                                        <CardSubtitle className="card-style">Python scripts used for preprocessing data for a number of machine learning algorithms and to visualize the results.</CardSubtitle>
                                        <CardText className="card-text">Python & Machine Learning</CardText>
                                    </CardBody>
                                    <CardLink href="https://github.com/codingmr/Dissertation-projectcode" className="link-style">Goto</CardLink>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="bottom-pad">
                                    <CardHeader className="card-header" tag="h3">Media Review</CardHeader>
                                    <CardBody>
                                        <CardSubtitle className="card-style">A simple console program to save, view and edit media items that have been added to the system.</CardSubtitle>
                                        <CardText className="card-text">Java</CardText>
                                    </CardBody>
                                    <CardLink href="https://github.com/codingmr/Media-Review" className="link-style">Goto</CardLink>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
