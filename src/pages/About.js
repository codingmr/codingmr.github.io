import React from 'react';

import thumbsUp from '../media/thumbsUp.svg';


import './styles/about-default.css';

import { Element } from 'react-scroll'
import Slide from 'react-reveal/Slide';

export default class About extends React.Component {
    render() {
        return (
            <Element id="about-view">
              <div id="about-body">
                <div id="section-body">
                    <div id="img-body">
                      <Slide right>
                      <img id="img" src={thumbsUp} alt="Node Network" />
                      </Slide>
                    </div>
                    <div id="section-text">
                      <Slide left>
                      <h2 id="section-title">About me</h2>
                      <p>
                          I'm super interested in how things work, function, operate and most of all how
                          actions can be automated. The projects that I've worked on so far have been
                          ideal for learning the different stages throughout a life cycle of a project.
                          One of my favourite technologies that give fast results is React, infact this
                          website was built with it!
                      </p>

                      <p>
                          When I'm not spending my time hitting buttons (writing code) I enjoy exploring beautiful places, getting mind deep into a sci-fi film,
                          or poised in some strange position, <i>luckily other people do it too and call it yoga.</i>
                      </p>

                      <p>
                          Some technologies I'm familiar with are: <b>MySQL</b>, <b>React</b>, <b>Java</b> and <b>Python</b>
                      </p>
                      </Slide>
                    </div>
                </div>
              </div>
            </Element>
        );
    }
}
