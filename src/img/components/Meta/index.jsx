import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function Meta({
	title,
	description,
	ogTitle,
	ogDescription,
	ogImage,
	ogUrl,
	twitterImage,
	linkedInImage,
	ogCreator,
}) {
	const themeColor = '#2646AD';
	const OGImage = linkedInImage ? linkedInImage : ogImage;
	const TwitterImage = twitterImage ? twitterImage : ogImage;

	return (
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<title>{title}</title>
			<meta name="description" content={description} />

			{/* General icons */}
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/images/icons/favicon-16x16.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/images/icons/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/images/icons/favicon-96x96.png"
			/>

			{/* Apple app icons */}
			<link
				rel="apple-touch-icon"
				sizes="57x57"
				href="/images/icons/apple-icon-57x57.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="60x60"
				href="/images/icons/apple-icon-60x60.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="72x72"
				href="/images/icons/apple-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="76x76"
				href="/images/icons/apple-icon-76x76.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/images/icons/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/images/icons/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/images/icons/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/images/icons/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/images/icons/apple-icon-180x180.png"
			/>

			{/* Android app icons with manifest */}
			<link rel="manifest" href="/images/icons/manifest.json" />
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/images/icons/android-icon-192x192.png"
			/>

			{/* Microsoft app icons */}
			<meta name="msapplication-TileColor" content={themeColor} />
			<meta
				name="msapplication-TileImage"
				content="/images/icons/ms-icon-144x144.png"
			/>

			{/* Favicon */}
			<link
				rel="shortcut icon"
				href="/images/icons/favicon.ico"
				type="image/x-icon"
			/>
			<link rel="icon" href="/images/icons/favicon.ico" type="image/x-icon" />

			{/* Color used for address bar, etc. */}
			<meta name="theme-color" content={themeColor} />

			{/* Twitter card tags */}
			{/* Only one card type per-page is supported. If more than one twitter:card value exists in the page, the “last” one in sequence will take priority.*/}
			<meta name="twitter:card" content="summary_large_image" />
			{/* @username for the content creator / author. */}
			<meta name="twitter:creator" content={ogCreator} />
			<meta name="twitter:image" content={TwitterImage} />

			{/* @username for the website used in the card footer. */}
			<meta name="twitter:site" content={ogCreator} />
			<link rel="me" href="https://twitter.com/TheEconomist" />

			{/* Open Graph tags */}
			<meta property="og:type" content="website" />
			<meta property="og:description" content={ogDescription} />
			{/* TODO ogImage path needs to be absolute */}
			<meta property="og:image" content={OGImage} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:url" content={ogUrl} />

			<link
				href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
				rel="stylesheet"
			/>
		</Helmet>
	);
}

Meta.propTypes = {
	description: PropTypes.string,
	linkedInImage: PropTypes.string,
	ogCreator: PropTypes.string,
	ogDescription: PropTypes.string,
	ogImage: PropTypes.string,
	ogTitle: PropTypes.string,
	ogUrl: PropTypes.string,
	title: PropTypes.string,
	twitterImage: PropTypes.string,
};

export default Meta;
