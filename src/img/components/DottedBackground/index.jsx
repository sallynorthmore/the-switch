import React from 'react';
import PropTypes from 'prop-types';
import DotRow from './DotRow';
import './styles.css';

class DottedBackground extends React.Component {
	componentDidMount() {
		const canvas = document.querySelector('#dots');
		this.ctx = canvas.getContext('2d');

		canvas.width = this.width;
		canvas.height = this.height;
		canvas.style.backgroundColor = this.props.background;

		this.generateRows();
		this.raf = requestAnimationFrame(this.loop);
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.raf);
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize = () => {
		const canvas = document.querySelector('#dots');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};

	generateRows = () => {
		const color = this.props.color;
		const ROWS = 70;
		const dotSize = this.height / ROWS;

		for (let i = 0; i < ROWS; i++) {
			this.dots.push(new DotRow(this.ctx, color, i, ROWS, dotSize));
		}
	};

	loop = tick => {
		this.raf = requestAnimationFrame(this.loop);

		if (this.tick === 0) {
			this.tick = tick;
		}

		// returns time in seconds
		const dt = (tick - this.tick) / 1000;
		const { height, width } = this.ctx.canvas;

		this.ctx.clearRect(0, 0, width, height);

		this.dots.forEach(dot => {
			dot.update(dt);
		});
	};

	dots = [];
	height = window.innerHeight;
	raf = null;
	tick = 0;
	width = window.innerWidth;

	render() {
		return (
			<div className="DottedBackground">
				<canvas className="DottedBackground-canvas" id="dots" />
			</div>
		);
	}
}

DottedBackground.propTypes = {
	background: PropTypes.string,
	color: PropTypes.string,
};

DottedBackground.defaultProps = {
	background: '#3E56B7',
	color: '#333DB9',
};

export default DottedBackground;
