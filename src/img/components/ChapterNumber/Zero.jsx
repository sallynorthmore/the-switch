import React from 'react';
import PropTypes from 'prop-types';

const Eleven = props => (
	<svg height={`${props.height}px`} viewBox="0 0 127.61 153.27">
		<path
			fill={props.fillColor}
			d="M63.81,153.27c-19.73,0-35.3-6.83-46.7-20.5C5.7,119.1,0,100.42,0,76.74c0-24.85,5.44-43.85,16.33-57.01 C27.22,6.58,43.05,0,63.81,0c20.75,0,36.58,6.58,47.47,19.73c10.89,13.16,16.33,32.16,16.33,57.01c0,23.68-5.7,42.36-17.1,56.02 C99.11,146.44,83.54,153.27,63.81,153.27z M63.81,142.08c2.63,0,3.95-1.97,3.95-5.92V17.1c0-3.95-1.32-5.92-3.95-5.92 c-2.63,0-3.95,1.97-3.95,5.92v119.06C59.86,140.11,61.17,142.08,63.81,142.08z"
		/>
	</svg>
);

Eleven.propTypes = {
	fillColor: PropTypes.string,
	height: PropTypes.number,
};

Eleven.defaultProps = {
	fillColor: 'currentColor',
	height: 84,
};

export default Eleven;
