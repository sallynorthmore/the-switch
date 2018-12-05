import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomize from 'randomatic';
import inViewport from 'in-viewport';
import { Trail, Spring, animated, config } from 'react-spring';
import AnimatedNumber from './AnimatedNumber';
import './styles.css';

class Figures extends Component {
	state = {
		isInViewport: false,
		bars: [],
	};

	componentDidMount = () => {
		const bars = this.props.items.map(item => {
			return { ...item, key: randomize('Aa', 20) };
		});

		this.setState(() => ({ bars }));
		inViewport(this.figuresEl, { offset: -150 }, this.getVisibility);
	};

	getVisibility = () => {
		this.setState(() => ({ isInViewport: true }));
	};

	createString = string => {
		return string.split('');
	};

	render() {
		const { color, caption } = this.props;
		const { bars, isInViewport } = this.state;
		const chartHeight = `${bars.length * 115}px`; // TODO
		return (
			<div
				className="Figures"
				ref={figuresRef => {
					this.figuresEl = figuresRef;
				}}
			>
				<h2 className="Figures-caption" style={{ background: `${color}` }}>
					{caption}
				</h2>

				<div style={{ minHeight: chartHeight }}>
					{isInViewport && (
						<Trail
							config={config.molasses}
							native
							keys={item => item.key}
							items={bars}
							from={{ opacity: 0 }}
							to={{ opacity: 1 }}
						>
							{item => ({ opacity }) => (
								<animated.div
									key={randomize('Aa', 10)}
									style={{
										opacity,
										background: `${color}`,
									}}
									className="Figures-item"
								>
									<span className="Figures-background" />
									<div className="Figures-content">
										<h2 className="Figures-title">
											<AnimatedNumber items={this.createString(item.title)} />
										</h2>

										<Spring
											key={randomize('Aa', 10)}
											config={config.gentle}
											native
											from={{ opacity: 0 }}
											to={{ opacity: 1 }}
										>
											{props => (
												<animated.span style={props}>
													{item.description}
												</animated.span>
											)}
										</Spring>
									</div>
								</animated.div>
							)}
						</Trail>
					)}
				</div>
			</div>
		);
	}
}

Figures.propTypes = {
	caption: PropTypes.string,
	color: PropTypes.string,
	items: PropTypes.array,
};

Figures.defaultProps = {
	color: 'rgb(0, 173, 181)',
};

export default Figures;
