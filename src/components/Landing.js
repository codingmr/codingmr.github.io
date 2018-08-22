import React from 'react';
import { Jumbotron, Button, ButtonGroup } from 'reactstrap';


export default class Landing extends React.Component {
    render() {
        return (
            <div className="landing-view">
            <Jumbotron className="jumbo-adjust">
                <div className="jumbo">
                    <h1 className="main-head">Matt Roberts</h1>
                    <p className="lead">Computer Science Student @ Cardiff Metropolitan University</p>
                    <hr className="my-2" />
                    <p className="front-textbody">Welcome to my portfolio, here you will find the various projects I'm undertaking
                        and my `works of glory`. Feel free to connect with me via the social networks below.
                    </p>
                    <p className="lead">
                    <ButtonGroup className="front-buttons">
                        <Button className="btn-gogo" outline color="info">GitHub</Button>

                        <Button className="btn-gogo" outline color="info">Stackoverflow</Button>
                        <Button className="btn-gogo" outline color="info">LinkedIn</Button>
                    </ButtonGroup>

                    </p>
                </div>
            </Jumbotron>
            </div>
        );
    }
}