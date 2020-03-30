import React from 'react';
import { Jumbotron,
         Button,
         ButtonGroup,
         Container,
} from 'reactstrap';

import './styles/landing-default.css';
import { Link,
         Element,
         Events,
         animateScroll as scroll,
         scrollSpy,
         scroller } from 'react-scroll';

export default class Landing extends React.Component {
    render() {
        return (
          <div id="landing-view">
            <div id="align-center">
              <h1 id="title">Matt Roberts</h1>
              <h2 id="subtitle">Software Engineer</h2>
              <div id="welcome-info-body">
                <hr id="line-breaker" />
                <p id="welcome-info-text">Welcome to my portfolio, here you will find the various projects I'm undertaking
                and my 'works of glory'. Feel free to connect with me via the social networks below.
                </p>
              </div>

              <ButtonGroup id="social-but-links" >
                <Button id="connect-button" href="https://github.com/codingmr" target="_blank" className="btn-gogo" outline color="info">GitHub</Button>

                <Button id="connect-button" href="https://stackoverflow.com/users/2189042/matt-roberts" target="_blank" className="btn-gogo" outline color="info">Stackoverflow</Button>
                <Button id="connect-button" href="https://www.linkedin.com/in/matt-roberts-8aa85875/" target="_blank" className="btn-gogo" outline color="info">LinkedIn</Button>
              </ButtonGroup>

            </div>
          </div>
        );
    }
}
