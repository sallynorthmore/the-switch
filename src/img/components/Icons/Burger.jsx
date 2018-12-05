import React from 'react';
import PropTypes from 'prop-types';

const Burger = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 15.931 14"
	>
		<g transform="translate(-19.035 -54.252)">
			<line
				fill="none"
				stroke={props.fillColor}
				strokeWidth="2px"
				x2="15.465"
				transform="translate(19.035 67.252)"
			/>
			<line
				fill="none"
				stroke={props.fillColor}
				strokeWidth="2px"
				x2="10.465"
				transform="translate(19.035 61.252)"
			/>
			<line
				fill="none"
				stroke={props.fillColor}
				strokeWidth="2px"
				x2="15.931"
				transform="translate(19.035 55.252)"
			/>
		</g>
	</svg>
);

Burger.propTypes = {
	fillColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

Burger.defaultProps = {
	fillColor: 'currentColor',
	isPercent: false,
	width: 18,
};

export default Burger;
