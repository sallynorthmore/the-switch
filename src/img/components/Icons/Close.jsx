import React from 'react';
import PropTypes from 'prop-types';

const Close = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 10 10"
	>
		<g
			stroke={props.fillColor}
			strokeMiterlimit="10"
			fill="none"
			strokeWidth="1px"
		>
			<path d="M0.612980769,9.92938702 L9.94288791,0.59947988" />
			<path
				d="M0.612980769,9.92938702 L9.94288791,0.59947988"
				transform="translate(5.277934, 5.264433) scale(-1, 1) translate(-5.277934, -5.264433) "
			/>
		</g>
	</svg>
);

Close.propTypes = {
	fillColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

Close.defaultProps = {
	fillColor: 'currentColor',
	isPercent: false,
	width: 18,
};

export default Close;
