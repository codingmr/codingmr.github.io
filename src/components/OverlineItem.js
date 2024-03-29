import React from 'react';
import PropTypes from 'prop-types';
import './styles/overlineItem-default.css';

import IconItem from './IconItem';

export default class OverlineItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isHover: false,
			isOpen: false,
		};
	}

	mapIconsToList = () => {
		return this.props.icons.map((icon) => (
			<div key={icon.key} id="icon">
				<IconItem iconSrc={icon.src} iconToolTip={icon.toolTip} />
			</div>
		));
	};

	render() {
		return (
			<div id="container">
				<div
					className="section"
					role="button"
					tabIndex={0}
					onClick={() => this.setState({ isOpen: !this.state.isOpen })}
					onKeyDown={() => this.setState({ isOpen: !this.state.isOpen })}
				>
					<p id="overline">{this.props.title}</p>

					{this.state.isOpen ? (
						<p id="description" className="description_open">
							{this.props.description}
						</p>
					) : (
						<p id="description" className="description_closed">
							{this.props.description}
						</p>
					)}
				</div>
				<div id="icon-box">{this.mapIconsToList()}</div>
				<hr id="divider" />
			</div>
		);
	}
}

OverlineItem.propTypes = {
	icons: PropTypes.array,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
};
