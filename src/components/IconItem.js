import React from 'react';
import PropTypes from 'prop-types';
import './styles/IconItem-default.css';

export default class IconItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showToolTip: false,
		};
	}
	render() {
		return (
			<div
				className="icon-back"
				role="button"
				tabIndex={0}
				onClick={() => this.setState({ showToolTip: !this.state.showToolTip })}
				onKeyDown={() => this.setState({ showToolTip: !this.state.showToolTip })}
			>
				<img id="icon_img" loading="lazy" src={this.props.iconSrc} alt="alt Icon" />
				{this.state.showToolTip ? <p id="tool-tip">{this.props.iconToolTip}</p> : <p></p>}
			</div>
		);
	}
}

IconItem.propTypes = {
	iconSrc: PropTypes.string.isRequired,
	iconToolTip: PropTypes.string,
};
