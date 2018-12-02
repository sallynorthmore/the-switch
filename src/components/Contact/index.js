import React from 'react';
import PropTypes from 'prop-types';
// import Content from '../Content';
import ContactForm from '../ContactForm';
import { ContactComponent } from './styles';

const Contact = ({ content, contentComponent }) => {
	// const PageContent = contentComponent || Content;

	return (
		<ContactComponent>
			{/* 			<PageContent content={content} /> */}
			<ContactForm title="Please get in touch with me about contract and permanent opportunities" />
		</ContactComponent>
	);
};

Contact.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
};

export default Contact;
