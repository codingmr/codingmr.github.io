import React from 'react';
import { Jumbotron,
         Button,
         ButtonGroup,
         Container,
} from 'reactstrap';

import './styles/landing-default.css';


export default class Landing extends React.Component {
    render() {
        return (
            <Container fluid id="landing-view">
              <Jumbotron fluid id="jumbo">
                <Container fluid>
                  <Container id="align-center">
                    <h1 id="title">Matt Roberts</h1>
                    <h2 id="subtitle">Software Engineer</h2>
                    <Container id="welcome-info-body">
                      <hr id="line-breaker" />
                      <p id="welcome-info-text">Welcome to my portfolio, here you will find the various projects I'm undertaking
                          and my `works of glory`. Feel free to connect with me via the social networks below.
                      </p>
                    </Container>
                    <ButtonGroup id="social-but-links" >
                      <Button href="https://github.com/codingmr" target="_blank" className="btn-gogo" outline color="info">GitHub</Button>

                      <Button href="https://stackoverflow.com/users/2189042/matt-roberts" target="_blank" className="btn-gogo" outline color="info">Stackoverflow</Button>
                      <Button href="https://www.linkedin.com/in/matt-roberts-8aa85875/" target="_blank" className="btn-gogo" outline color="info">LinkedIn</Button>
                    </ButtonGroup>
                  </Container>
                </Container>
              </Jumbotron>
            </Container>
        );
    }
}
