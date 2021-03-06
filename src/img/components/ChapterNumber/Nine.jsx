import React from 'react';
import PropTypes from 'prop-types';

const Nine = props => (
	<svg height={`${props.height}px`} viewBox="0 0 123.67 153.27">
		<path
			fill={props.fillColor}
			d="M70.82,113.36c0,6.87-2.3,12.35-6.91,16.44c-4.6,4.09-10.93,6.14-18.97,6.14h-1.32 c-0.88,0.88-1.32,1.9-1.32,3.07c0,2.19,1.83,3.29,5.48,3.29c8.77,0,16.01-2.74,21.71-8.22c5.7-5.48,8.55-12.53,8.55-21.16 c0-5.26-1.28-10.63-3.84-16.12c-2.56-5.48-5.89-10.05-9.98-13.7c-5.41,0.73-10.52,1.1-15.35,1.1c-15.64,0-27.7-3.29-36.18-9.87 C4.24,67.75,0,58.32,0,46.05c0-8.48,2.41-16.23,7.24-23.24c4.82-7.02,11.66-12.57,20.5-16.66C36.58,2.05,47,0,58.98,0 c21.78,0,38.52,6.43,50.21,19.3c11.69,12.86,17.54,31.14,17.54,54.82c0,15.64-2.82,29.46-8.44,41.44 c-5.63,11.99-13.74,21.27-24.34,27.85c-10.6,6.58-23.43,9.87-38.48,9.87c-9.21,0-17.62-1.53-25.22-4.6 c-7.6-3.07-13.74-7.46-18.42-13.16c-4.68-5.7-7.02-11.98-7.02-18.86c0-8.77,3.1-15.64,9.32-20.61c6.21-4.97,14.65-7.46,25.33-7.46 c10.09,0,17.83,2.16,23.24,6.47C68.12,99.37,70.82,105.47,70.82,113.36z M60.74,11.18c-2.63,0-3.95,1.97-3.95,5.92v49.12 c0,3.95,1.32,5.92,3.95,5.92c2.63,0,3.95-1.97,3.95-5.92V17.1C64.68,13.16,63.37,11.18,60.74,11.18z"
		/>
	</svg>
);

Nine.propTypes = {
	fillColor: PropTypes.string,
	height: PropTypes.number,
};

Nine.defaultProps = {
	fillColor: 'currentColor',
	height: 84,
};

export default Nine;
