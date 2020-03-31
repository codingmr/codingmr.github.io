import React from 'react';

import net_graph from '../media/net_graph.png';

import './styles/about-default.css';

import { Element } from 'react-scroll'

export default class About extends React.Component {
    render() {
        return (
            <Element id="about-view">
              <div id="about-body">
                <div id="section-body">
                    <div id="img-body">
                      <img id="img" src={net_graph} alt="Node Network" />
                    </div>
                    <div id="section-text">
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
                          or poised in some strange position, <i>luckily other people do it too and they call it yoga.</i>
                      </p>

                      <p>
                          Some technologies I'm familiar with are: <b>MySQL</b>, <b>React</b>, <b>Java</b> and <b>Python</b>
                      </p>
                    </div>
                </div>
              </div>
            </Element>
        );
    }
}
