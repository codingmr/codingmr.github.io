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
                    <CardText>A simple console program to save, view and edit media items stored in the system.</CardText>
                    <Button id="java-button" href="https://github.com/codingmr/Media-Review">Source code</Button>

                  </CardBody>
                  <CardFooter></CardFooter>
                </Card>

                <Card id="card-body">
                  <CardHeader>Procrastinotion</CardHeader>
                  <CardBody>
                    <CardTitle>JavaScript</CardTitle>
                    <CardText>A chrome extention project. It monitors a users browsing habits and prompts after a period of using social media.</CardText>
                    <Button id="javascript-button" href="https://github.com/Apachean/procrastinotion">Source Code</Button>
                  </CardBody>
                  <CardFooter className="text-muted"></CardFooter>
                </Card>

                <Card id="card-body">
                  <CardHeader>A collection of scripts</CardHeader>
                  <CardBody>
                    <CardTitle>Python</CardTitle>
                    <CardText>Preprocessing data for machine learning algorithms and execution of machine learning algorithms.</CardText>
                    <Button id="python-button" href="https://github.com/codingmr/Dissertation-projectcode">Source code</Button>
                  </CardBody>
                  <CardFooter className="text-muted"></CardFooter>
                </Card>

              </div>
            </div>
            </Element>
        );
    }
}
