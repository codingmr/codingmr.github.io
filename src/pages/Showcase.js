/*
 * Quick draft. Needs substantial work.
 */

import React from 'react';

import device_phone from '../media/device_phone_trans.svg';
import device_overlay from '../media/device_phone_overlay.svg';
import coffeeCup from '../media/coffeeCupNew.svg';
import worriedBill from '../media/worried-bill.svg';
import icon_right from '../media/arrowDoubleRight.svg';
import icon_left from '../media/arrowDoubleleft.svg';

import './styles/showcase-default.css';

import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const NUMBER_PAGES = 2;

export default class Showcase extends React.Component {
	constructor(props) {
		super(props);

		this.nextPage = this.nextPage.bind(this);
		this.lastPage = this.lastPage.bind(this);

		this.state = {
			pageSelectedIndex: 1,
			switching: false,
		};
	}

	componentDidMount() {
		this.switch();
	}

	switch() {
		this.setState({ switching: false });
		// wait for animation to finish
		setTimeout(
			function () {
				this.setState({ switching: true });
			}.bind(this),
			400,
		);
	}

	nextPage() {
		var tempIndex = this.state.pageSelectedIndex;

		if (tempIndex !== NUMBER_PAGES) {
			tempIndex += 1;
			this.setState({ pageSelectedIndex: tempIndex });
			this.switch();
		} else {
			tempIndex = 1;
			this.setState({ pageSelectedIndex: tempIndex });
			this.switch();
		}
	}

	lastPage() {
		var tempIndex = this.state.pageSelectedIndex;
		if (tempIndex !== 1) {
			tempIndex -= 1;
			this.setState({ pageSelectedIndex: tempIndex });
			this.switch();
		} else {
			tempIndex = 2;
			this.setState({ pageSelectedIndex: tempIndex });
			this.switch();
		}
	}

	render() {
		return (
			<Element id="showcase-view">
				<div id="showcase-body">
					<div id="showcase-section-body">
						<div id="carousel">
							<div id="screen-overlay">
								<Zoom>
									<img id="scale" src={device_phone} alt="device_phone" />
									<div id="test-layer"></div>
									<div id="iphone-navigation">
										<button onClick={this.lastPage} id="pullLeft">
											<img id="icon_left" src={icon_left} alt="icon_left" />
										</button>
										<button onClick={this.nextPage} id="pullRight">
											<img id="icon_right" src={icon_right} alt="icon_right" />
										</button>
									</div>
									<div id="dunno">
										<img id="over" src={device_overlay} alt="device_overlay" />
										<Zoom when={this.state.switching}>
											{this.state.pageSelectedIndex === 1 ? (
												<div id="screen-content-default">
													<img
														id="screen-icon"
														src={coffeeCup}
														alt="coffeeCup"
													/>
												</div>
											) : (
												<div id="screen-content-bill">
													<img
														id="screen-icon"
														src={worriedBill}
														alt="worriedBill"
													/>
												</div>
											)}
										</Zoom>
									</div>
								</Zoom>
							</div>
						</div>
						<div id="showcase-section-text">
							<Fade bottom when={this.state.switching}>
								{this.state.pageSelectedIndex === 1 ? (
									<>
										<h2 id="showcase-title">Showcase</h2>
										<p>Check out the projects I have worked on.</p>
										<p>
											Use the left and right navigation buttons on the display
											phone.
										</p>
									</>
								) : (
									<>
										<h2 id="showcase-title">Bill! Split the Bill</h2>
										<p>
											My first software development that completed a full life
											cycle (Design - Development - Testing - Production -
											Release)
										</p>
										<p>Visit the Play store. Visit the Github repo.</p>
									</>
								)}
							</Fade>
						</div>
					</div>
				</div>
			</Element>
		);
	}
}
