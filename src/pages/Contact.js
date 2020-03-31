import React from 'react';
import { Button,
         Form,
         FormGroup,
         Label,
         Input
} from 'reactstrap';

import { Element } from 'react-scroll'

import './styles/contact-default.css';


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

    render() {
      const { status } = this.state;
        return (
            <Element id="contact-view">
              <div id="contact-body">
                <Form
                  id="contact-form"
                  onSubmit={this.submitForm}
                  action="https://formspree.io/mgelwver"
                  method="POST"
                  >

                  <FormGroup id="contact-email">
                    <Label for="exampleEmail">Email:</Label>
                    <Input type="email" placeholder="example@gmail.com" id="exampleEmail" name="email" />
                  </FormGroup>
                  <FormGroup id="contact-message">
                    <Label for="exampleText">Message:</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                  <FormGroup id="contact-submit-group">
                    <p id="contact-response">Error! Sending message was unsuccessful. Please contact me at codingmroberts@gmail.com</p>
                    {status === "SUCCESS" ? <p>Thank you! Sending message was successful.</p> : <Button id="contact-submit">Submit</Button>}
                    {status === "ERROR" && <p>Error! Sending message was unsuccessful. Please contact me at codingmroberts@gmail.com</p>}
                  </FormGroup>
              </Form>
              </div>
            </Element>
        );
    }

    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
    xhr.send(data);
  }

}
