import React from 'react';
import PropTypes from 'prop-types';

const Seven = props => (
	<svg height={`${props.height}px`} viewBox="0 0 119.94 153.27">
		<path
			fill={props.fillColor}
			d="M58.33,59.2c-6.29,6.14-11.81,10.45-16.55,12.94c-4.75,2.49-9.69,3.73-14.8,3.73c-8.77,0-15.46-2.81-20.06-8.44 C2.3,61.8,0,53.65,0,42.98c0-7.02,0.84-14,2.52-20.94C4.2,15.1,6.58,8.85,9.65,3.29C10.82,1.1,11.91,0,12.94,0h2.63 c0.73,0,1.24,0.19,1.54,0.55c0.29,0.37,0.73,1.35,1.32,2.96c2.04,5.85,5.19,10.09,9.43,12.72c4.24,2.63,9.94,3.95,17.1,3.95 c5.99-0.14,11.87-0.95,17.65-2.41c5.77-1.46,11.29-3.14,16.55-5.04c5.26-1.9,10.23-3.58,14.91-5.04c4.68-1.46,8.91-2.26,12.72-2.41 c3.95,0,7.13,1.06,9.54,3.18c2.41,2.12,3.62,4.86,3.62,8.22c0,2.34-0.77,4.75-2.3,7.24c-1.53,2.49-4.2,5.56-8,9.21L76.74,65.12 c17.25,16.81,25.87,34.42,25.87,52.84c0,10.52-3.58,19.04-10.74,25.54c-7.16,6.5-16.59,9.76-28.29,9.76 c-7.75,0-14.66-1.39-20.72-4.17c-6.07-2.77-10.85-6.72-14.36-11.84c-3.51-5.12-5.26-11.04-5.26-17.76c0-6.28,1.61-12.2,4.82-17.76 c3.21-5.55,8.84-12.28,16.88-20.17l61.83-60.08c1.46-1.46,2.19-2.85,2.19-4.17c0-0.73-0.26-1.35-0.77-1.86 c-0.51-0.51-1.13-0.77-1.86-0.77c-0.73,0-1.46,0.22-2.19,0.66c-0.73,0.44-1.97,1.46-3.73,3.07L58.33,59.2z"
		/>{' '}
	</svg>
);
Seven.propTypes = { fillColor: PropTypes.string, height: PropTypes.number };
Seven.defaultProps = {
	fillColor: 'currentColor',
	height: 84,
};

export default Seven;
