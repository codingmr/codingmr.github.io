import React from 'react';
import { Button,
         ButtonGroup,
} from 'reactstrap';

import './styles/landing-default.css';

import github from '../media/icons/ic_github.svg';

import { Element } from 'react-scroll'

export default class Landing extends React.Component {
    render() {
        return (
          <Element id="landing-view">
            <div id="align-center">
              <h1 id="title">Matt Roberts</h1>
              <h2 id="subtitle">Software Engineer</h2>
              <hr id="line-breaker" />
              <div id="welcome-info-body">
                <p id="welcome-info-text">Welcome to my portfolio!</p>
                <p id="welcome-info-text-italic">Pizza, coffee and a pinch of magic, and imagination will become reality</p>
              </div>

              <ButtonGroup id="social-but-links" >
                <a id="connect-button" href="https://github.com/codingmr" color="info"><img id="icon_img" src={github} alt="Github Icon" /></a>
              </ButtonGroup>

            </div>
        </Element>
        );
    }
}
