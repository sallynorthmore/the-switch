import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { ContactFormComponent, Title, Label, Button } from './styles';

const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

class ContactForm extends React.Component {
	state = { name: '', email: '', message: '' };

	handleSubmit = e => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact',
				...this.state,
			}),
		})
			.then(() =>
				navigate('/', {
					state: { isContact: true, contactName: this.state.name },
				})
			)
			.catch(error => console.log(error));

		e.preventDefault();
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { title } = this.props;
		const { name, email, message } = this.state;

		return (
			<ContactFormComponent>
				<Title>{title}</Title>
				<form onSubmit={this.handleSubmit}>
					<Label>
						Your Name:
						<input
							type="text"
							name="name"
							value={name}
							onChange={this.handleChange}
							required
						/>
					</Label>

					<Label>
						Your Email:
						<input
							type="email"
							name="email"
							value={email}
							onChange={this.handleChange}
							required
						/>
					</Label>

					<Label>
						Message:
						<textarea
							name="message"
							value={message}
							required
							onChange={this.handleChange}
						/>
					</Label>

					<Button type="submit">Send</Button>
				</form>
			</ContactFormComponent>
		);
	}
}

ContactForm.propTypes = {
	title: PropTypes.string,
};

export default ContactForm;
