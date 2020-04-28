import React from 'react';

import './styles/overlineItem-default.css';


export default class OverlineItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isHover: false,
      isOpen: false
    }
  }

  render() {
    const listIcons = this.props.icons.map((icon)=><li key={icon} id="icon"><img id="icon_img" src={icon} alt="alt Icon" /></li>);

    return(
      <div id="container">
        <div id="body" onClick={()=>this.setState({isOpen: !this.state.isOpen})}>
          <p id="overline">{this.props.title}</p>

          { this.state.isOpen ? (
            <p id="description" className="description_open">
              {this.props.description}
            </p>
          ):(
            <p id="description" className="description_closed">
              {this.props.description}
            </p>
            )
          }

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
