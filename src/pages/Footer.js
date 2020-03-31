import React from 'react';
import { Container,
         Row,
         Col,
         } from 'reactstrap';

import './styles/footer-default.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer-view">
              <div id="footer-body">
                <p>© Matt Roberts 2020 All rights reserved.</p>
              </div>
            </div>
        );
    }
}
