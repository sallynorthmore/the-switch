import React from 'react';
import PropTypes from 'prop-types';

const Download = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 15.559 24.038"
	>
		<g transform="translate(1.148)">
			<line
				stroke={props.fillColor}
				fill="none"
				strokeWidth="2px"
				y2="17.89"
				transform="translate(6.622)"
			/>
			<path
				stroke={props.fillColor}
				fill="none"
				strokeWidth="2px"
				d="M6830.69,7758.75l6.642,6.642,2.906-2.906,3.736-3.736"
				transform="translate(-6830.69 -7747.423)"
			/>
		</g>
		<path
			stroke={props.fillColor}
			fill="none"
			strokeWidth="2px"
			d="M0,0H15.559"
			transform="translate(0 23.038)"
		/>
	</svg>
);

Download.propTypes = {
	fillColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

Download.defaultProps = {
	fillColor: 'currentColor',
	isPercent: false,
	width: 18,
};

export default Download;
