import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

import './styles/projects-default.css';
import { Element } from 'react-scroll';

export default class Projects extends React.Component {
    render() {
        return (
            <Element name="projects">
            <div id="projects-view">
              <div id="projects-body">
                <Card id="card-body">
                  <CardHeader>Media Review</CardHeader>
                  <CardBody>
                    <CardTitle>Java</CardTitle>
                    <CardText id="card-text">A simple console program to save, view and edit media items stored in the system.</CardText>
                    <div id="card-button-body">
                      <Button id="java-button" outline href="https://github.com/codingmr/Media-Review">Source code</Button>
                    </div>
                  </CardBody>
                  <CardFooter></CardFooter>
                </Card>

                <Card id="card-body">
                  <CardHeader>Procrastinotion</CardHeader>
                  <CardBody>
                    <CardTitle>JavaScript</CardTitle>
                    <CardText id="card-text">A chrome extention project. It monitors a users browsing habits and prompts after a period of using social media.</CardText>
                    <div id="card-button-body">
                      <Button id="javascript-button" outline href="https://github.com/Apachean/procrastinotion">Source Code</Button>
                    </div>
                  </CardBody>
                  <CardFooter className="text-muted"></CardFooter>
                </Card>

                <Card id="card-body">
                  <CardHeader>A collection of scripts</CardHeader>
                  <CardBody>
                    <CardTitle>Python</CardTitle>
                    <CardText id="card-text">Preprocessing data for machine learning algorithms and execution of machine learning algorithms.</CardText>
                    <div id="card-button-body">
                      <Button id="python-button" outline href="https://github.com/codingmr/Dissertation-projectcode">Source code</Button>
                    </div>
                  </CardBody>
                  <CardFooter className="text-muted"></CardFooter>
                </Card>

              </div>
            </div>
            </Element>
        );
    }
}
