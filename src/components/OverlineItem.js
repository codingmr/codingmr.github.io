import React from 'react';

import './styles/overlineItem-default.css';

import gimp from '../media/ic_gimp.svg';


export default class OverlineItem extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
      iconsDesired: props.icons
    };
  }

  render() {
    return(
      <div id="container">
        <div id="body">
          <p id="overline">{this.state.title}</p>
          <p id="description">{this.state.description}</p>
        </div>
        <div id="icon-box">
          <div id="icon-back">
            <div id="icon"><img src={gimp} alt="GIMP Icon" /></div>
            <div id="icon"></div>
            <div id="icon"></div>
          </div>
        </div>
        <hr id="divider"/>

      </div>
    )
  }
}
