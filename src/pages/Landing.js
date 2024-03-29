import React from 'react';

import './styles/landing-default.css';

import github from '../media/icons/ic_github.svg';

import { Element } from 'react-scroll';

import Fade from 'react-reveal/Fade';

export default class Landing extends React.Component {
	render() {
		return (
			<>
				<Element id="landing-view">
					<div id="align-center">
						<h1 id="title">Matt Roberts</h1>
						<h2 id="subtitle">Software Developer</h2>
						<hr id="line-breaker" />
						<Fade bottom delay={250}>
							<div id="welcome-info-body">
								<p id="welcome-info-text">Welcome to my portfolio!</p>
								<p id="welcome-info-text-italic">
									Pizza, coffee, a pinch of magic and imagination becomes reality
								</p>
							</div>
						</Fade>
						<Fade duration={2000} delay={1100}>
							<a id="connect-button" href="https://github.com/codingmr" color="info">
								<img
									id="icon_welcome_img"
									src={github}
									alt="Github Icon"
									loading="lazy"
									width="150"
									height="150"
								/>
							</a>
						</Fade>
					</div>
				</Element>
				<div id="background-overlay"></div>
			</>
		);
	}
}
