import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import device_phone from '../media/device_phone_trans.svg';
import device_overlay from '../media/device_phone_overlay.svg';
import device_page1 from '../media/device_page1.svg';
import device_page2 from '../media/device_page2.svg';
import device_page3 from '../media/device_page3.svg';
import coffeeCup from '../media/coffeeCupNew.svg';
import worriedBill from '../media/worried-bill.svg';

import './styles/showcase-default.css';

import { Element } from 'react-scroll'


const NUMBER_PAGES = 2;

export default class Showcase extends React.Component {
  constructor(props){
    super(props)

    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);

    this.state = {
      pageSelectedIndex: 1
    }
  }

  nextPage() {
    var tempIndex = this.state.pageSelectedIndex;

    if (tempIndex !== NUMBER_PAGES){
      tempIndex += 1;
      this.setState({pageSelectedIndex: tempIndex})
    }
  }

  lastPage() {
    var tempIndex = this.state.pageSelectedIndex;
    if (tempIndex !== 1){
      tempIndex -= 1;
      this.setState({pageSelectedIndex: tempIndex})
    }
  }

    render() {
        return (
            <Element id="showcase-view">
              <div id="showcase-body">
                <div id="showcase-section-body">
                    <div id="carousel">
                      <div id="screen-overlay">
                        <img id="scale" src={device_phone} />

                        <div id="dunno">
                        <img id="over" src={device_overlay} />

                          { (this.state.pageSelectedIndex===1) ? (
                            <div id="screen-content-default">
                              <img id="screen-icon" src={coffeeCup} />
                            </div>
                          ) : (
                            <div id="screen-content-bill">
                              <img id="screen-icon" src={worriedBill} />
                            </div>
                          )}


                          <div id="iphone-navigation">
                            <button onClick={this.lastPage} id="pullLeft"></button>
                            <button onClick={this.nextPage} id="pullRight"></button>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div id="showcase-section-text">

                    { (this.state.pageSelectedIndex===1) ? (
                      <>
                      <h2 id="section-title">Showcase</h2>
                      <p id="text">
                        Check out the projects I've worked on.
                      </p>
                      <p id="text">
                        Use the left and right navigation buttons on the display phone.
                      </p>
                      </>
                    ) : (
                      <>
                      <h2 id="section-title">Bill! Split the Bill</h2>
                      <p id="text">
                        My first software development that complete a full life cycle (Design -> Development -> Testing -> Production -> Release)
                      </p>
                      <p id="text">
                        Visit the Play store. Visit the Github repo.
                      </p>
                      </>
                    )
                    }


                    </div>
                </div>
              </div>
            </Element>
        );
    }
}
