import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import device_phone from '../media/device_phone.svg';

import './styles/showcase-default.css';

import { Element } from 'react-scroll'

export default class Showcase extends React.Component {
    render() {
        return (
            <Element id="showcase-view">
              <div id="showcase-body">
                <div id="showcase-section-body">
                    <div id="carousel-body">
                      <img id="carousel" src={device_phone} alt="Node Network" />
                      <div id="screen-overlay">
                        <div id="screen">
                        </div>
                      </div>

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
                          or poised in some strange position, <i>luckily other people do it too and call it yoga.</i>
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
