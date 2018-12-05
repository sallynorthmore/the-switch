import React from 'react';
import PropTypes from 'prop-types';

const Arrow = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		style={{ transform: `rotate(${props.rotate}deg)` }}
		viewBox="0 0 16 16"
	>
		<path
			fill={props.fillColor}
			d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z"
			transform="translate(16) rotate(90)"
		/>
	</svg>
);

Arrow.propTypes = {
	fillColor: PropTypes.string,
	isPercent: PropTypes.bool,
	rotate: PropTypes.number,
	width: PropTypes.number,
};

Arrow.defaultProps = {
	fillColor: 'currentColor',
	isPercent: false,
	rotate: 90,
	width: 18,
};

export default Arrow;
