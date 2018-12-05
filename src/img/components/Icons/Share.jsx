import React from 'react';
import PropTypes from 'prop-types';

const Share = props => (
	<svg
		width={`${props.width}${props.isPercent ? '%' : 'px'}`}
		viewBox="0 0 18.247 18.678"
	>
		<g transform="translate(-225.959 -0.05)">
			<g transform="translate(-0.041 0.05)">
				<path
					fill={props.fillColor}
					d="M12.728,13.023a3.471,3.471,0,0,1,1.32-.729,3.279,3.279,0,1,1-2.39,3.159.267.267,0,0,0-.17-.275c-2.049-1.045-4.107-2.09-6.156-3.143a.269.269,0,0,0-.308.016A3.263,3.263,0,1,1,5.2,6.729a.247.247,0,0,0,.316.032Q8.5,5.243,11.481,3.724a.281.281,0,0,0,.186-.308,3.271,3.271,0,0,1,2.608-3.3,3.3,3.3,0,0,1,3.912,2.843,3.27,3.27,0,0,1-2.5,3.556,3.191,3.191,0,0,1-2.722-.567.257.257,0,0,0-.316-.032C10.663,6.932,8.67,7.952,6.669,8.957c-.13.065-.186.13-.17.275a.872.872,0,0,1-.008.324c-.065.219.024.316.219.413q2.928,1.482,5.857,2.973C12.623,12.966,12.672,13,12.728,13.023Z"
					transform="translate(226.041 -0.05)"
				/>
			</g>
		</g>
	</svg>
);

Share.propTypes = {
	fillColor: PropTypes.string,
	isPercent: PropTypes.bool,
	width: PropTypes.number,
};

Share.defaultProps = {
	fillColor: 'currentColor',
	isPercent: false,
	width: 40,
};

export default Share;
