import React from 'react';

import './styles/overlineItem-default.css';


export default class OverlineItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isOpen: false
    }
  }



  render() {
    const listIcons = this.props.icons.map((icon)=><li key={icon} id="icon"><img id="icon_img" src={icon} alt="alt Icon" /></li>);

    return(
      <div id="container">
        <div id="body">
          <p id="overline">{this.props.title}</p>
          <p id="description">{this.props.description}</p>
          <div id="expand"><a>expand</a></div>
        </div>
        <div id="icon-box">
          <div id="icon-back">
            {listIcons}
          </div>
        </div>
        <hr id="divider"/>

      </div>
    )
  }
}
