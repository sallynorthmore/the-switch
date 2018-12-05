import React from 'react';
import PropTypes from 'prop-types';

const Chevron = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 10 10"
	>
		<g transform="translate(-683 -700)">
			<path
				fill={props.fillColor}
				d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z"
				transform="translate(681 700)"
			/>
			<rect fill="none" width="10" height="10" transform="translate(683 700)" />
		</g>
	</svg>
);

Chevron.propTypes = {
	fillColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

Chevron.defaultProps = {
	fillColor: 'currentColor',
	isPercent: false,
	width: 18,
};

export default Chevron;
