import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';
import { Burger } from 'components/Icons';
import './styles.css';

const BANNER_HEIGHT_MOBILE = 80;

class NavButton extends Component {
	state = {
		isExpanded: false,
		isScrolled: false,
	};

	componentDidMount = () => {
		window.addEventListener('scroll', this.onScroll);
	};

	componentWillReceiveProps(nextProps) {
		const { isMenuOpen: nextIsMenuOpen } = nextProps;
		const { isMenuOpen } = this.props;

		if (nextIsMenuOpen !== isMenuOpen && !nextIsMenuOpen) {
			this.animateClosed();
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	scheduledAnimationFrame = null;

	updateButtonY = () => {
		const y = window.scrollY;
		if (y > BANNER_HEIGHT_MOBILE && !this.state.isScrolled) {
			this.setState(() => ({ isScrolled: true, isExpanded: false }));
		} else if (y < BANNER_HEIGHT_MOBILE && this.state.isScrolled) {
			this.setState(() => ({ isScrolled: false, isExpanded: true }));
		}
		this.scheduledAnimationFrame = false;
	};
	onScroll = () => {
		// Prevent multiple rAF callbacks.
		if (this.scheduledAnimationFrame) {
			return;
		}
		this.scheduledAnimationFrame = true;
		requestAnimationFrame(this.updateButtonY);
	};

	handleClick = e => {
		const { onNavButtonClick } = this.props;
		e.preventDefault();

		const tl = new TimelineMax();
		tl.to(this.svg, 0.5, { width: '100vw', height: '100vh' }, 0);
		tl.to(
			this.background,
			0.5,
			{
				attr: {
					d: 'M 0 0 L 0 100 C 40 100 70 70 70 70 C 70 70 100 40 100 0 Z',
				},
				ease: 'linear',
			},
			0
		);
		tl.to(this.background, 0.5, {
			attr: {
				d: 'M 0 0 L 0 100 C 100 100 100 100 100 100 C 100 100 100 0 100 0 Z',
			},
			ease: 'linear',
		});
		tl.add(() => onNavButtonClick());
	};

	animateOpen = e => {
		const { onNavButtonClick } = this.props;
		e.preventDefault();

		const tl = new TimelineMax();
		tl.to(this.svg, 0.5, { width: '100vw', height: '100vh' }, 0);
		tl.to(
			this.background,
			0.5,
			{
				attr: {
					d: 'M 0 0 L 0 100 C 40 100 70 70 70 70 C 70 70 100 40 100 0 Z',
				},
				ease: 'linear',
			},
			0
		);
		tl.to(this.background, 0.5, {
			attr: {
				d: 'M 0 0 L 0 100 C 100 100 100 100 100 100 C 100 100 100 0 100 0 Z',
			},
			ease: 'linear',
		});
		tl.add(() => onNavButtonClick());
	};

	animateClosed = () => {
		const tl = new TimelineMax();
		tl.to(this.svg, 0.5, { width: '120px', height: '80px' }, 0);
		tl.to(
			this.background,
			0.5,
			{
				attr: {
					d: 'M 0 0 L 0 100 C 40 100 70 70 70 70 C 70 70 100 40 100 0 Z',
				},
				ease: 'linear',
			},
			0
		);
		tl.to(this.background, 0.5, {
			attr: {
				d: 'M 0 0 L 0 100 C 25 100 50 50 50 50 C 50 50 75 0 100 0 Z',
			},
			ease: 'linear',
		});
	};

	render() {
		const { isScrolled, isExpanded } = this.state;
		return (
			<div className={`NavButton ${isScrolled ? 'isFixed' : ''}`}>
				<button onClick={this.animateOpen}>
					<span className="NavButton-icon">
						<Burger width={16} />
					</span>
				</button>
				<svg
					className="NavButton-background"
					viewBox="0 0 100 100"
					ref={svg => {
						this.svg = svg;
					}}
					style={{
						width: isExpanded ? '120px' : '100px',
						height: isExpanded ? '80px' : '60px',
					}}
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient id="grad" x1="50%" y1="100%" x2="50%" y2="0%">
							<stop offset="0%" stopColor="rgb(0, 121, 181)" stopOpacity={1} />
							<stop
								offset="100%"
								stopColor="rgb(0, 173, 181)"
								stopOpacity={1}
							/>
						</linearGradient>
					</defs>
					<g fill="url(#grad)" fillRule="evenodd">
						<path
							ref={p => {
								this.background = p;
							}}
							d="M 0 0 L 0 100 C 25 100 50 50 50 50 C 50 50 75 0 100 0 Z"
						/>
					</g>
				</svg>
			</div>
		);
	}
}

export default NavButton;
