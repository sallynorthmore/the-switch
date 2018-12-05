import React from 'react';
import PropTypes from 'prop-types';

const House = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 17.021 19.743"
	>
		<path
			fill="none"
			strokeWidth="2"
			stroke={props.fillColor}
			d="M9312.209,1051.224v-9.819l7.51-7.51,7.511,7.51v9.819h-7.511"
			transform="translate(-9311.209 -1032.481)"
		/>
	</svg>
);

House.propTypes = {
	fillColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

House.defaultProps = {
	fillColor: 'currentColor',
	isPercent: false,
	width: 18,
};

export default House;
