import React from 'react';

import './styles/landing-default.css';

import github from '../media/icons/ic_github.svg';

import { Element } from 'react-scroll';
import Flip from 'react-reveal/Flip';

import Fade from 'react-reveal/Fade';

export default class Landing extends React.Component {
	componentDidUpdate() {}

	render() {
		return (
			<>
				<Element id="landing-view">
					<div id="align-center">
						<Flip bottom when={this.componentDidMount}>
							<h1 id="title">Matt Roberts</h1>
							<h2 id="subtitle">Software Developer</h2>
						</Flip>
						<hr id="line-breaker" />
						<Fade bottom>
							<div id="welcome-info-body">
								<p id="welcome-info-text">Welcome to my portfolio!</p>
								<p id="welcome-info-text-italic">
									Pizza, coffee, a pinch of magic and imagination becomes
									reality
								</p>
							</div>

							<a
								id="connect-button"
								href="https://github.com/codingmr"
								color="info"
							>
								<img id="icon_welcome_img" src={github} alt="Github Icon" />
							</a>
						</Fade>
					</div>
				</Element>
				<div id="background-overlay"></div>
			</>
		);
	}
}
