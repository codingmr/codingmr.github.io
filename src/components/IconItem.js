import React from 'react';

import './styles/IconItem-default.css';


export default class IconItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      showToolTip: false
    }
  }

  render() {
    return(
      <div id="icon-back" onClick={()=>this.setState({showToolTip: !this.state.showToolTip})}>
        <img id="icon_img" src={this.props.icon} alt="alt Icon" />
        {this.state.showToolTip ? (
          <p id="tool-tip">{this.props.icon}</p>
        ) : (
          <p></p>
        )}
      </div>
    )
  }
}
