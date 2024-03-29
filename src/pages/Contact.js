import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Element } from 'react-scroll';

import './styles/contact-default.css';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: '',
		};
	}

	render() {
		const { status } = this.state;
		return (
			<Element id="contact-view">
				<div id="contact-body">
					<div id="contact-text">
						<h2 id="about-title">Contact me</h2>
						<p id="contact-description">
							Feel free to contact me at codingmroberts@gmail.com, or leave your email with me using
							the form below and I will contact you as soon as I am available.
						</p>
					</div>

					<Form
						id="contact-form"
						onSubmit={this.submitForm}
						action="https://formspree.io/mgelwver"
						method="POST"
					>
						<FormGroup id="contact-email">
							<Label for="exampleEmail">Your email:</Label>
							<Input type="email" placeholder="example@gmail.com" id="exampleEmail" name="email" />
						</FormGroup>
						<FormGroup id="contact-message">
							<Label for="exampleText">Message [optional]:</Label>
							<Input type="textarea" name="text" id="exampleText" />
						</FormGroup>
						<FormGroup id="contact-submit-group">
							{status === 'SUCCESS' ? (
								<p id="contact-response-success">✔ Successfully sent message.</p>
							) : (
								<Button color="info" id="contact-submit">
									Submit
								</Button>
							)}
							{status === 'ERROR' && <p id="contact-response-fail">✗ Message failed to send.</p>}
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
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
