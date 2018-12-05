import React from 'react';
import PropTypes from 'prop-types';

const CircleArrow = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 26.133 26.133"
	>
		<g transform="translate(-184 -50.934)">
			<g transform="translate(202.946 66.832) rotate(180)">
				<path
					fill="none"
					stroke={props.fillColor}
					strokeWidth="2px"
					d="M4187.588,3996l5.941,5.941,5.941-5.941"
					transform="translate(-4187.588 -3996)"
				/>
			</g>
			<g
				fill="none"
				stroke={props.fillColor}
				strokeWidth="2px"
				transform="translate(210.133 77.066) rotate(180)"
			>
				<circle stroke="none" cx="13.066" cy="13.066" r="13.066" />
				<circle fill="none" cx="13.066" cy="13.066" r="12.066" />
			</g>
		</g>
	</svg>
);

CircleArrow.propTypes = {
	fillColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

CircleArrow.defaultProps = {
	fillColor: 'currentColor',
	isPercent: false,
	width: 18,
};

export default CircleArrow;
