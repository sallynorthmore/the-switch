import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-static';
import { TweenMax, TimelineMax } from 'gsap';
import './styles.css';

class NewWaves extends Component {
	componentWillReceiveProps(nextProps) {
		const { open } = this.props;
		const { open: nextOpen } = nextProps;

		if (nextOpen !== open) {
			return nextOpen ? this.animateOpen() : this.animateClosed();
		}
	}

	animateOpen = () => {
		const { history } = this.props;
		const tl = new TimelineMax();
		tl.to('.arc', 0.2, { opacity: 1 }, 0);
		tl.add(
			TweenMax.staggerTo(
				[this.arc1, this.arc2, this.arc3, this.arc4],
				0.5,
				{
					attr: {
						d:
							'M 0 100 L 0 0 C 25 0 50 50 50 50 C 75 100 100 100 100 100 L 100 100 Z',
					},
					ease: 'linear',
				},
				0.2
			),
			0
		);
		tl.add(
			TweenMax.staggerTo(
				[this.arc1, this.arc2, this.arc3, this.arc4],
				0.5,
				{
					attr: {
						d: 'M 0 100 L 0 0 C 25 0 50 0 50 0 C 75 0 100 0 100 0 L 100 100 Z',
					},
					ease: 'linear',
				},
				0.2
			),
			0.4
		);
		tl.add(() => history.push('/insights'));
		tl.to('.arc', 2, { opacity: 0 });
	};

	animateClosed = () => {
		const { history } = this.props;
		const tl = new TimelineMax();
		tl.to('.arc', 0.2, { opacity: 1 }, 0);
		tl.add(() => history.push('/'));
		tl.add(
			TweenMax.staggerTo(
				[this.arc4, this.arc3, this.arc2, this.arc1],
				0.5,
				{
					attr: {
						d:
							'M 0 100 L 0 0 C 25 0 50 50 50 50 C 75 100 100 100 100 100 L 100 100 Z',
					},
					ease: 'linear',
				},
				0.2
			),
			0
		);
		tl.add(
			TweenMax.staggerTo(
				[this.arc4, this.arc3, this.arc2, this.arc1],
				0.5,
				{
					attr: {
						d:
							'M 0 100 L 0 100 C 25 100 50 100 50 100 C 75 100 100 100 100 100 L 100 100 Z',
					},
					ease: 'linear',
				},
				0.2
			),
			0.4
		);
	};

	render() {
		const { open } = this.props;
		return (
			<svg
				preserveAspectRatio="none"
				className="arc"
				viewBox="0 0 100 100"
				style={{ opacity: 0 }}
			>
				<path
					fill="#2D35AD"
					ref={p => {
						this.arc1 = p;
					}}
					d={
						open
							? 'M 0 100 L 0 100 C 25 100 50 100 50 100 C 75 100 100 100 100 100 L 100 100 Z'
							: 'M 0 100 L 0 0 C 25 0 50 0 50 0 C 75 0 100 0 100 0 L 100 100 Z'
					}
				/>
				<path
					fill="#354CAC"
					ref={p => {
						this.arc2 = p;
					}}
					d={
						open
							? 'M 0 100 L 0 100 C 25 100 50 100 50 100 C 75 100 100 100 100 100 L 100 100 Z'
							: 'M 0 100 L 0 0 C 25 0 50 0 50 0 C 75 0 100 0 100 0 L 100 100 Z'
					}
				/>
				<path
					fill="#3376AA"
					ref={p => {
						this.arc3 = p;
					}}
					d={
						open
							? 'M 0 100 L 0 100 C 25 100 50 100 50 100 C 75 100 100 100 100 100 L 100 100 Z'
							: 'M 0 100 L 0 0 C 25 0 50 0 50 0 C 75 0 100 0 100 0 L 100 100 Z'
					}
				/>
				<path
					fill="#00adb5"
					ref={p => {
						this.arc4 = p;
					}}
					d={
						open
							? 'M 0 100 L 0 100 C 25 100 50 100 50 100 C 75 100 100 100 100 100 L 100 100 Z'
							: 'M 0 100 L 0 0 C 25 0 50 0 50 0 C 75 0 100 0 100 0 L 100 100 Z'
					}
				/>
			</svg>
		);
	}
}

export default withRouter(NewWaves);

NewWaves.propTypes = {
	open: PropTypes.bool,
	history: PropTypes.object.isRequired,
};

NewWaves.defaultProps = {
	open: false,
};
