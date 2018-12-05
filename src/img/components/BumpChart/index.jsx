import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomize from 'randomatic';
import inViewport from 'in-viewport';
import { Spring, animated, config } from 'react-spring';
import Curve from 'components/Curve';
import './styles.css';

class BumpChart extends Component {
	state = {
		isInViewport: false,
	};

	componentDidMount = () => {
		inViewport(this.bumpEl, { offset: -200 }, this.getVisibility);
	};

	getVisibility = () => {
		this.setState(() => ({ isInViewport: true }));
	};

	render() {
		const { items, title, gradientTo, gradientFrom } = this.props;
		const { isInViewport } = this.state;
		const chartHeight = `130px`; // TODO
		return (
			<div
				className="BumpChart-BumpChart"
				ref={bumpChartRef => {
					this.bumpEl = bumpChartRef;
				}}
			>
				<div className="BumpChart-items">
					{items.map(item => (
						<div
							key={randomize('Aa', 10)}
							className="BumpChart-item"
							style={{ minHeight: chartHeight }}
						>
							<div className="BumpChart-figure">
								<Spring
									config={config.stiff}
									native
									from={{ opacity: 0, bottom: `${item.height * 60}%` }}
									to={{ opacity: 1, bottom: `${item.height * 70}%` }}
								>
									{props => (
										<animated.div
											className="BumpChart-value"
											style={{ ...props }}
										>
											{item.value}%
										</animated.div>
									)}
								</Spring>
								{isInViewport && (
									<div className="BumpChart-curve">
										<Curve
											height={item.height}
											gradientTo={gradientTo}
											gradientFrom={gradientFrom}
										/>
									</div>
								)}
							</div>
							<div className="BumpChart-label">{item.label}</div>
						</div>
					))}
				</div>

				{title && <div className="BumpChart-caption">{title}</div>}
			</div>
		);
	}
}

BumpChart.propTypes = {
	items: PropTypes.array,
	title: PropTypes.string,
	gradientFrom: PropTypes.string,
	gradientTo: PropTypes.string,
};

BumpChart.defaultProps = {
	title: null,
	gradientFrom: '#00adb5',
	gradientTo: '#0068b5',
	items: [],
};

export default BumpChart;
