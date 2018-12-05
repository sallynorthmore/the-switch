import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styles from './styles.module.css';

function Meta({ title, description, ogDescription, ogImage, ogTitle, ogUrl }) {
	return (
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{title}</title>
			<meta name="description" content={description} />
			{/* Twitter card tags */}
			{/* Only one card type per-page is supported. If more than one twitter:card value exists in the page, the “last” one in sequence will take priority.*/}
			{/*<meta name="twitter:card" content="summary_large_image" />*/}

			{/* @username for the content creator / author. */}
			<meta name="twitter:creator" content="@TheSwitch" />
			<meta name="twitter:image" content={ogImage} />

			{/* @username for the website used in the card footer. */}
			<meta name="twitter:site" content="@TheSwitch" />
			<link rel="me" href="https://twitter.com/TheSwitch" />

			{/* Open Graph tags */}
			<meta property="og:type" content="website" />
			<meta property="og:description" content={ogDescription} />
			{/* TODO ogImage path needs to be absolute */}
			<meta property="og:image" content={ogImage} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:url" content={ogUrl} />
		</Helmet>
	);
}

Meta.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	ogDescription: PropTypes.string,
	ogImage: PropTypes.string,
	ogTitle: PropTypes.string,
	ogUrl: PropTypes.string,
};

Meta.defaultProps = {
	title: 'The Switch',
	description: "Chronicling one household's switch to a life without plastic.",
	ogDescription:
		"Chronicling one household's switch to a life without plastic.",
	// OGImage: PropTypes.string,
	ogTitle: 'The Switch',
	ogUrl: 'http://the-switch.org',
};

export default Meta;
