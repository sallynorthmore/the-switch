import React from 'react';
import PropTypes from 'prop-types';
import { Spring, animated, config } from 'react-spring';
import { LinearGradient } from '@vx/gradient';

import './styles.css';

const Curve = ({ gradientFrom, gradientTo, height }) => {
	return (
		<div className="Curve">
			<div>
				<Spring
					config={config.molasses}
					native
					from={{ transform: 'scaleY(0)' }}
					to={{ transform: `scaleY(${height})` }}
				>
					{props => (
						<animated.div
							style={{ ...props, transformOrigin: 'bottom center' }}
						>
							<svg width="100%" viewBox="0 0 80 72">
								<LinearGradient
									from={gradientFrom}
									to={gradientTo}
									id="curve-gradient"
									transform="rotate(-90 0 0)"
								/>
								<g fill="url(#curve-gradient)">
									<path d="M78.36,72.62c-12.75,0-15.23-51-38.04-51s-27.47,51-39.35,51Z" />
								</g>
							</svg>
						</animated.div>
					)}
				</Spring>
			</div>
		</div>
	);
};

Curve.propTypes = {
	height: PropTypes.number,
	gradientFrom: PropTypes.string,
	gradientTo: PropTypes.string,
};

Curve.defaultProps = {
	height: 1,
};

export default Curve;
