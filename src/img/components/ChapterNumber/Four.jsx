import React from 'react';
import PropTypes from 'prop-types';

const Four = props => (
	<svg height={`${props.height}px`} viewBox="0 0 135.51 151.73">
		<path
			fill={props.fillColor}
			d="M44.07,151.73c-1.75,0-2.63-0.73-2.63-2.19v-2.63c0-1.46,0.73-2.41,2.19-2.85c4.68-1.75,7.97-3.29,9.87-4.6 c1.9-1.32,3.18-2.88,3.84-4.71c0.66-1.83,0.99-4.42,0.99-7.78v-16.23h-6.58c-3.95,3.22-8.55,6.43-13.81,9.65 c-7.16,4.24-13.67,6.36-19.51,6.36c-5.41,0-9.83-1.54-13.26-4.6C1.72,119.06,0,115.04,0,110.07c0-4.68,1.57-8.59,4.71-11.73 c3.14-3.14,7.05-4.71,11.73-4.71c3.21,0.15,6.1,0.88,8.66,2.19c2.56,1.32,4.86,2.67,6.91,4.06c2.05,1.39,3.95,2.16,5.7,2.3 c4.38-3.8,6.58-8.7,6.58-14.69c-0.15-4.09-1.21-8.22-3.18-12.39s-4.31-8.44-7.02-12.83c-2.71-4.39-5.04-8.84-7.02-13.38 c-1.97-4.53-3.04-9.21-3.18-14.03c0-10.38,3.8-18.78,11.4-25.22C42.9,3.22,52.77,0,64.9,0c11.11,0,19.99,3.11,26.64,9.32 c6.65,6.21,9.98,14.29,9.98,24.23c0,4.97-1.24,10.56-3.73,16.77c-2.49,6.21-6,12.39-10.52,18.53c-2.49,3.22-4.97,6.21-7.46,8.99 c-2.49,2.78-7.16,7.6-14.03,14.47c-2.34,2.34-3.91,4.06-4.71,5.15c-0.8,1.1-1.21,2.08-1.21,2.96s0.4,1.68,1.21,2.41 c0.8,0.73,1.79,1.1,2.96,1.1c9.5-8.04,17.69-16.37,24.56-25c4.82-6.14,8.66-11.73,11.51-16.77s5.22-10.49,7.13-16.34 c0.14-0.73,0.4-1.24,0.77-1.53c0.36-0.29,0.99-0.44,1.86-0.44h4.17c1.17,0,1.97,0.22,2.41,0.66s0.66,1.24,0.66,2.41v55.25h15.79 c1.75,0,2.63,0.73,2.63,2.19v4.17c0,1.46-0.88,2.19-2.63,2.19h-15.79v16.23c0,3.8,0.4,6.62,1.21,8.44c0.8,1.83,2.23,3.36,4.28,4.6 c2.04,1.24,5.12,2.6,9.21,4.06c1.46,0.44,2.19,1.39,2.19,2.85v2.63c0,1.46-0.88,2.19-2.63,2.19H44.07z"
		/>
	</svg>
);

Four.propTypes = {
	fillColor: PropTypes.string,
	height: PropTypes.number,
};

Four.defaultProps = {
	fillColor: 'currentColor',
	height: 84,
};

export default Four;