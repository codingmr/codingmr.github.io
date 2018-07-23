import React from 'react';
import { Jumbotron, Button } from 'reactstrap';


export default class Landing extends React.Component {
    render() {
        return (
            <div>
            <Jumbotron>
            <div className="jumbo">
                <h1 className="display-6">Matt Roberts</h1>
                <p className="lead">Computer Science Student @ Cardiff Metropolitan University</p>
                <hr className="my-2" />
                <p>Welcome to my portfolio, here you will find the various projects I'm undertaking
                    and my previous works of glory. Feel free to connect with me via the social networks below.
                </p>
                <p className="lead">
                <Button className="btn-gogo" color="primary">GitHub</Button>
                <Button className="btn-gogo" color="primary">Stack Overflow</Button>
                <Button className="btn-gogo" color="primary">LinkedIn</Button>
                
                </p>
            </div>
            </Jumbotron>
            </div>
        );
    }
}