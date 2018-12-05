import React from 'react';
import PropTypes from 'prop-types';

const One = props => (
	<svg height={`${props.height}px`} viewBox="0 0 93.85 151.95">
		<path
			fill={props.fillColor}
			d="M3.95,151.95c-1.75,0-2.63-0.73-2.63-2.19v-2.63c0-1.46,0.73-2.41,2.19-2.85c4.68-1.75,7.97-3.29,9.87-4.6 c1.9-1.32,3.18-2.88,3.84-4.71c0.66-1.83,0.99-4.42,0.99-7.78V38.81H2.41C0.8,38.81,0,38.08,0,36.62v-4.82 c0-1.46,0.8-2.19,2.41-2.19h14.47c12.28,0,23.17-2.56,32.67-7.67c9.5-5.11,15.27-11.47,17.32-19.08c0.29-1.17,0.62-1.94,0.99-2.3 C68.23,0.19,68.85,0,69.73,0h4.82c1.61,0,2.41,0.88,2.41,2.63v124.54c0,3.8,0.4,6.62,1.21,8.44c0.8,1.83,2.23,3.36,4.28,4.6 c2.05,1.24,5.12,2.6,9.21,4.06c1.46,0.44,2.19,1.39,2.19,2.85v2.63c0,1.46-0.88,2.19-2.63,2.19H3.95z"
		/>
	</svg>
);

One.propTypes = {
	fillColor: PropTypes.string,
	height: PropTypes.number,
};

One.defaultProps = {
	fillColor: 'currentColor',
	height: 84,
};

export default One;
