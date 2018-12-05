import React, { Component } from 'react';
import PropTypes from 'prop-types';
import inViewport from 'in-viewport';
import randomize from 'randomatic';
import classNames from 'classnames';
import { Trail, Spring, animated, config } from 'react-spring';
import './styles.css';

const Bar = ({ label, value, barWidth, color }) => {
	const styles = color ? { background: `${color}` } : null;
	return (
		<div className="Bar" style={{ width: '100%' }}>
			<div className="Bar-label">{label}</div>

			<Spring
				config={config.molasses}
				native
				from={{ opacity: 0, width: '0%' }}
				to={{ opacity: 1, width: barWidth }}
			>
				{props => (
					<animated.div className="Bar-bar" style={{ ...props, ...styles }} />
				)}
			</Spring>
			{value !== '0%' && <div className="Bar-point" style={{ ...styles }} />}
			<div
				className={classNames({
					['Bar-value']: true,
					['isZero']: barWidth === '0%',
				})}
			>
				{value}
			</div>
		</div>
	);
};

class BarChart extends Component {
	state = {
		isInViewport: false,
		bars: [],
	};

	componentDidMount = () => {
		const bars = this.props.items.map(item => {
			return { ...item, key: randomize('Aa', 20) };
		});

		this.setState(() => ({ bars }));

		inViewport(this.barEl, { offset: -200 }, this.getVisibility);
	};

	getVisibility = () => {
		this.setState(() => ({ isInViewport: true }));
	};

	render() {
		const { caption, title } = this.props;
		const { bars, isInViewport } = this.state;
		const chartHeight = `${bars.length * 24}px`; // TODO

		return (
			<div
				className="BarChart"
				ref={barChartRef => {
					this.barEl = barChartRef;
				}}
			>
				{title && <h2 className="BarChart-title">{title}</h2>}
				<figure
					className={classNames({
						['BarChart-figure']: true,
						['isVisible']: isInViewport,
					})}
					style={{ minHeight: chartHeight }}
				>
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
									style={{
										opacity,
									}}
								>
									<Bar
										color={item.color}
										label={item.label}
										value={item.value}
										barWidth={item.width}
									/>
								</animated.div>
							)}
						</Trail>
					)}
				</figure>
				{caption && (
					<figcaption className="BarChart-caption">{caption}</figcaption>
				)}
			</div>
		);
	}
}

Bar.propTypes = {
	color: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	barWidth: PropTypes.string,
};

BarChart.propTypes = {
	items: PropTypes.array,
	caption: PropTypes.string,
	title: PropTypes.string,
};

BarChart.defaultProps = {
	items: [],
};

export default BarChart;

// export default Dimensions()(BarChart);
