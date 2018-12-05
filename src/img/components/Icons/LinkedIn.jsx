import React from 'react';
import PropTypes from 'prop-types';

const LinkedIn = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 45 45"
	>
		<g transform="translate(-1136 -1479)">
			<circle
				fill={props.fillColor}
				cx="22.5"
				cy="22.5"
				r="22.5"
				transform="translate(1136 1479)"
			/>
			<g transform="translate(1119.932 1467.031)">
				<path
					fill={props.iconColor}
					d="M49.818,37.3v8.412H44.941V37.86c0-1.971-.7-3.316-2.47-3.316a2.668,2.668,0,0,0-2.5,1.783,3.338,3.338,0,0,0-.161,1.189v8.193H34.93s.065-13.293,0-14.669h4.878v2.079c-.01.016-.024.032-.032.048h.032v-.048A4.843,4.843,0,0,1,44.2,30.7c3.209,0,5.614,2.1,5.614,6.6ZM29.828,23.969a2.542,2.542,0,1,0-.064,5.069H29.8a2.543,2.543,0,1,0,.032-5.069Zm-2.47,21.74h4.876V31.04H27.358Z"
				/>
			</g>
		</g>
	</svg>
);

LinkedIn.propTypes = {
	fillColor: PropTypes.string,
	iconColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

LinkedIn.defaultProps = {
	fillColor: 'transparent',
	iconColor: 'currentColor',
	isPercent: false,
	width: 18,
};

export default LinkedIn;
