import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomize from 'randomatic';
import { TweenMax, Power1 } from 'gsap';
import './captions.css';

class Captions extends Component {
	componentDidUpdate = prevProps => {
		if (this.props.caption !== prevProps.caption) {
			this.moveCaptions(this.captionsRefs);
		}
	};

	captionsRefs = [];

	moveCaptions = array => {
		this.moveBottomToMain(array[1]);
		this.moveMainToTop(array[0]);
		this.moveTopOff(array[2], array);
	};

	moveBottomToMain = el => {
		TweenMax.fromTo(
			el,
			0.5,
			{ x: 0, y: 250, zIndex: 0, opacity: 0, marginTop: 0 },
			{
				x: 0,
				y: 125,
				zIndex: 1,
				opacity: 1,
				marginTop: 0,
				ease: Power1.easeInOut,
			}
		);
	};

	moveMainToTop = el => {
		TweenMax.fromTo(
			el,
			0.5,
			{ x: 0, y: 125, opacity: 1, zIndex: 1 },
			{ x: 0, y: 0, opacity: 0, zIndex: 0, ease: Power1.easeInOut }
		);
	};

	moveTopOff = (el, array) => {
		TweenMax.fromTo(
			el,
			0.5,
			{ x: 0, y: 0 },
			{
				x: 0,
				y: 250,
				onComplete: this.sortArray(array),
			}
		);
	};

	sortArray = array => {
		const firstElem = array.shift();
		array.push(firstElem);
		this.captionsRefs = array;
	};

	render() {
		const { lastCaption, caption } = this.props;
		const items = ['', '', ''];
		return (
			<div className="Captions">
				<div
					className="Captions-items"
					ref={ref => {
						this.captionsContainer = ref;
					}}
				>
					{items.map((item, i) => {
						return (
							<div
								ref={node => (this.captionsRefs[i] = node)}
								key={randomize('Aa', 10)}
								className="Captions-item"
							>
								{i == 1 && caption}
								{i == 0 && lastCaption}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

Captions.propTypes = {
	lastCaption: PropTypes.string,
	caption: PropTypes.string,
};

export default Captions;
