import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Power1, TweenMax, TimelineMax } from 'gsap';
import Captions from './Captions';
import './styles.css';

class ScrollingStats extends Component {
	constructor(props) {
		super(props);
		this.controller = null;
		this.bubbleDiv = null;
		this.loaderTween = null;
		this.tween = null;
		this.scene = null;
		this.ScrollMagic = null;
	}

	state = {
		index: 0,
		lastActiveIndex: null,
		scalePoints: [],
	};

	componentDidMount = () => {
		this.createScrollMagic();
	};

	componentWillUnmount = () => {
		this.controller.destroy();
		this.controller = null;
		this.tween = null;
		this.scene = null;
		this.ScrollMagic = null;
	};

	createScrollMagic = () => {
		/*
				Import ScrollMagic and animation.gsap here to
				fix production build error

				window is not defined
		 */
		this.ScrollMagic = require('scrollmagic');
		require('animation.gsap');

		const scales = this.props.items.map(item => {
			return item.scale;
		});

		this.setState({
			scalePoints: scales,
		});

		this.controller = new this.ScrollMagic.Controller();

		// var triggerPosition = scene.triggerPosition(); // could be useful
		// create tween
		this.tween = new TimelineMax();

		// Add tweens to timeline
		for (let i = 0; i < scales.length; i++) {
			this.tween.add(
				TweenMax.to(this.bubbleDiv, 1, {
					transform: `scale(${scales[i]})`,
					ease: Power1.easeInOut,
					onUpdate: this.tweenCallback,
					onUpdateParams: [i],
				})
			);
		}

		this.scene = new this.ScrollMagic.Scene({
			triggerElement: this.triggerDiv,
			duration: 200,
		})
			// .setPin(this.pinDiv)
			.setTween(this.tween)
			.addTo(this.controller);
	};

	tweenCallback = index => {
		const lastActiveIndex = this.state.index;
		if (index !== this.state.index) {
			this.setState({
				index,
				lastActiveIndex,
			});
		}
	};

	render() {
		const { index, scalePoints, lastActiveIndex } = this.state;
		const { isDiamond, title, items } = this.props;
		const lastCaption = lastActiveIndex
			? items[lastActiveIndex].caption
			: items[0].caption;

		return (
			<div
				ref={input => {
					this.triggerDiv = input;
				}}
			>
				<div
					className="ScrollingStats"
					ref={input => {
						this.pinDiv = input;
					}}
				>
					<div
						className="ScrollingStats-inner"
						ref={input => {
							this.pinDiv = input;
						}}
					>
						<div className="ScrollingStats-graphic">
							<div
								ref={div => (this.bubbleDiv = div)}
								style={{ transform: `scale(${scalePoints[0]})` }}
							>
								<div
									className={classNames({
										['ScrollingStats-circle']: true,
										['isDiamond']: isDiamond,
									})}
								/>
							</div>

							{items[index].label && (
								<div className="ScrollingStats-label">
									<h3 className="ScrollingStats-value">{items[index].value}</h3>
									{items[index].label}
								</div>
							)}
						</div>
					</div>

					<div className="ScrollingStats-captions">
						<Captions
							caption={items[index].caption}
							lastCaption={lastCaption}
						/>
					</div>
					{title && <div className="ScrollingStats-title">{title}</div>}
				</div>
			</div>
		);
	}
}

ScrollingStats.propTypes = {
	isDiamond: PropTypes.bool,
	items: PropTypes.array,
	title: PropTypes.string,
};

export default ScrollingStats;
