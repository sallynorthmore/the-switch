import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomize from 'randomatic';
import { Trail, animated, config } from 'react-spring';
import './AnimatedNumber.css';

class AnimatedNumber extends Component {
	render() {
		const { items } = this.props;

		return (
			<div className="AnimatedNumber">
				<Trail
					config={config.gentle}
					native
					keys={() => randomize('Aa', 20)}
					items={items}
					from={{ opacity: 0, x: -100 }}
					to={{ opacity: 1, x: 0 }}
				>
					{item => ({ x, opacity }) => (
						<animated.div
							key={randomize('Aa', 100)}
							className="AnimatedNumber-text"
							style={{
								opacity,
								transform: x.interpolate(x => `translate3d(0,${x}%,0)`),
							}}
						>
							{item}
						</animated.div>
					)}
				</Trail>
			</div>
		);
	}
}

AnimatedNumber.propTypes = {
	items: PropTypes.array,
};

AnimatedNumber.defaultProps = {
	items: [],
};

export default AnimatedNumber;
