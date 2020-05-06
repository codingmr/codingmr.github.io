import React from 'react';

import thumbsUp from '../media/thumbsUp.svg';

import './styles/about-default.css';

import { Element } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';

export default class About extends React.Component {
	render() {
		return (
			<Element id="about-view">
				<div id="about-body">
					<div id="section-body">
						<div id="img-body">
							<Zoom bottom>
								<img id="img" src={thumbsUp} alt="Node Network" />
							</Zoom>
						</div>
						<div id="section-text">
							<Zoom>
								<h2 id="about-title">About me</h2>
								<p>
									I am super interested in how things work, function, operate
									and most of all how actions can be automated. The projects
									that I have worked on so far have been ideal for learning the
									different stages throughout a life cycle of a project. One of
									my favourite technologies that give fast results is React,
									infact this website was built with it!
								</p>

								<p>
									When I am not spending my time hitting buttons (writing code)
									I enjoy exploring beautiful places, getting mind deep into a
									sci-fi film, or poised in some strange position,{' '}
									<i>luckily other people do it too and call it yoga.</i>
								</p>

								<p>
									Some technologies I am familiar with are: <b>MySQL</b>,{' '}
									<b>React</b>, <b>Java</b> and <b>Python</b>
								</p>
							</Zoom>
						</div>
					</div>
				</div>
			</Element>
		);
	}
}
