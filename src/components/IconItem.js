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
        <img id="icon_img" src={this.props.iconSrc} alt="alt Icon" />
        {this.state.showToolTip ? (
          <p id="tool-tip">{this.props.iconToolTip}</p>
        ) : (
          <p></p>
        )}
      </div>
    )
  }
}
