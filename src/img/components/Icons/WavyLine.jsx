import React from 'react';
import PropTypes from 'prop-types';

const WavyLine = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 310 9.381"
	>
		<g
			transform="translate(-20 -178)"
			stroke={props.fillColor}
			strokeMiterlimit="10"
			fill="none"
			strokeWidth="2px"
		>
			<path
				d="M0,1C7.381,1,7.381,8.381,14.762,8.381S22.143,1,29.524,1,36.9,8.381,44.286,8.381,51.667,1,59.048,1,66.429,8.381,73.81,8.381,81.19,1,88.571,1s7.381,7.381,14.762,7.381S110.714,1,118.1,1s7.381,7.381,14.762,7.381S140.238,1,147.619,1,155,8.381,162.381,8.381,169.762,1,177.143,1s7.381,7.381,14.762,7.381S199.286,1,206.667,1s7.381,7.381,14.762,7.381S228.81,1,236.19,1s7.381,7.381,14.762,7.381S258.333,1,265.714,1s7.381,7.381,14.762,7.381S287.857,1,295.238,1,302.619,8.381,310,8.381"
				transform="translate(20 178)"
			/>
		</g>
	</svg>
);

WavyLine.propTypes = {
	fillColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

WavyLine.defaultProps = {
	fillColor: 'currentColor',
	isPercent: false,
	width: 100,
};

export default WavyLine;
