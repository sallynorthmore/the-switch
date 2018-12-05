import React from 'react';
import PropTypes from 'prop-types';

const Twitter = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 45 45"
	>
		<g transform="translate(-1212 -1479)">
			<circle
				fill={props.fillColor}
				cx="22.5"
				cy="22.5"
				r="22.5"
				transform="translate(1212 1479)"
			/>
			<path
				fill={props.iconColor}
				d="M47.447,36.178a9.146,9.146,0,0,1-2.633.721,4.6,4.6,0,0,0,2.016-2.536,9.177,9.177,0,0,1-2.911,1.112,4.588,4.588,0,0,0-7.812,4.182,13.013,13.013,0,0,1-9.449-4.79,4.589,4.589,0,0,0,1.418,6.121A4.552,4.552,0,0,1,26,40.413c0,.019,0,.039,0,.058a4.587,4.587,0,0,0,3.678,4.495,4.6,4.6,0,0,1-2.07.079,4.589,4.589,0,0,0,4.282,3.184,9.254,9.254,0,0,1-6.787,1.9,13.037,13.037,0,0,0,20.07-10.984c0-.2,0-.4-.013-.593a9.3,9.3,0,0,0,2.288-2.373Z"
				transform="translate(1197.897 1457.972)"
			/>
		</g>
	</svg>
);

Twitter.propTypes = {
	fillColor: PropTypes.string,
	iconColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

Twitter.defaultProps = {
	fillColor: 'transparent',
	iconColor: 'currentColor',
	isPercent: false,
	width: 18,
};

export default Twitter;
