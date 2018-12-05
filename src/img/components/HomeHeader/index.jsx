import React, { PureComponent } from 'react';
import { TimelineMax, Power4, Elastic } from 'gsap';
import './styles.css';

class HomeHeader extends PureComponent {
	componentDidMount() {
		this.animate();
	}

	animate = () => {
		const firstLineMask = document.getElementById('mask-first-line-rect');
		const secondLineMask = document.getElementById('mask-second-line-rect');
		const text = document.querySelector('.HomeHeader-text-moving');
		const circle = document.querySelector('.HomeHeader-circle');

		const firstLineDuration = 1.3;
		const secondLineDuration = 0.7;
		const textDuration = 0.5;
		const circleDuration = 0.7;

		const firstLineDelay = 0.3;
		const secondLineDelay = firstLineDuration + firstLineDelay - 0.5;
		const textDelay = firstLineDuration;
		const circleDelay = textDelay + 0.5;

		const textPosDiff = this.movingTextPosEndX - this.movingTextPosStartX;

		const timeline = new TimelineMax({ delay: 0 });

		timeline
			.fromTo(
				firstLineMask,
				firstLineDuration,
				{ scaleX: 0 },
				{ scaleX: 1, ease: Power4.easeInOut },
				firstLineDelay
			)
			.fromTo(
				text,
				textDuration,
				{ x: 0 },
				{ x: textPosDiff, ease: Power4.easeInOut },
				textDelay
			)
			.fromTo(
				circle,
				circleDuration,
				{
					y: 0,
					scaleX: 0,
					scaleY: 0,
					opacity: 0,
					transformOrigin: 'center center',
				},
				{
					y: this.circlePosYEnd - this.circlePosYStart,
					scaleX: 1,
					scaleY: 1,
					opacity: 1,
					ease: Elastic.easeOut.config(1.5, 0.2),
					transformOrigin: 'center center',
				},
				circleDelay
			)
			.fromTo(
				secondLineMask,
				secondLineDuration,
				{ scaleX: 0, opacity: 0 },
				{ scaleX: 1, opacity: 1, ease: Power4.easeInOut },
				secondLineDelay
			);
	};

	width = 330;
	height = 90;

	// font size of first line
	fontSizeSmall = 20;

	// position of lines
	firstLinePosX = 0;
	firstLinePosY = 25;
	secondLinePosX = 0;
	secondLinePosY = 37;
	movingTextPosStartX = 140;
	movingTextPosEndX = 166;

	// attributes of circle
	circleRadius = 8;
	circlePosX = 151.5;
	circlePosYOffset = 2;
	circlePosYStart = 22;
	circlePosYEnd = this.firstLinePosY - this.circleRadius + this.circlePosYOffset; // eslint-disable-line

	render() {
		// SVG - all sizes are relative to this viewbox size
		const viewBox = `0 0 ${this.width} ${this.height}`;

		const secondLineTransform = `translate(${this.secondLinePosX} ${this.secondLinePosY})`; // eslint-disable-line

		return (
			<header className="HomeHeader">
				<svg className="HomeHeader-svg" viewBox={viewBox}>
					<defs>
						<mask id="mask-first-line">
							<rect
								id="mask-first-line-rect"
								fill="white"
								x="0"
								y="0"
								width={this.width}
								height={this.height}
							/>
						</mask>
						<mask id="mask-second-line">
							<rect
								id="mask-second-line-rect"
								fill="white"
								x="0"
								y="0"
								width={this.width}
								height={this.height}
							/>
						</mask>
					</defs>
					<g mask="url(#mask-first-line)">
						<text
							className="HomeHeader-text-small"
							x={this.firstLinePosX}
							y={this.firstLinePosY}
							fontSize={this.fontSizeSmall}
						>
							Inspired ideas
						</text>
						<circle
							className="HomeHeader-circle"
							cx={this.circlePosX}
							cy={this.circlePosYStart}
							r={this.circleRadius}
						/>
						<text
							className="HomeHeader-text-small HomeHeader-text-moving"
							x={this.movingTextPosStartX}
							y={this.firstLinePosY}
							fontSize={this.fontSizeSmall}
						>
							come to the
						</text>
					</g>
					<g transform={secondLineTransform} mask="url(#mask-second-line)">
						<path 
							className="HomeHeader-text-color"
							d="M-134.246,1.2a28.009,28.009,0,0,1-12.771-2.8A20.826,20.826,0,0,1-155.7-9.632a23.666,23.666,0,0,1-3.139-12.384,24.061,24.061,0,0,1,3.01-12.04,21.727,21.727,0,0,1,8.6-8.428,26.186,26.186,0,0,1,12.9-3.1,37.624,37.624,0,0,1,8.256.946,28.069,28.069,0,0,1,6.966,2.408l-1.806,12.986a26.649,26.649,0,0,0-11.438-2.58q-5.16,0-8.127,2.58a8.86,8.86,0,0,0-2.967,7.052,8.772,8.772,0,0,0,3.01,7.095q3.01,2.537,8.342,2.537a30.918,30.918,0,0,0,11.7-2.58l1.548,12.642a27.113,27.113,0,0,1-7.1,2.709A35.144,35.144,0,0,1-134.246,1.2Zm46.612.172q-10.492,0-16-5.332t-5.5-15.566V-44.376h15.48v24.424q0,3.87,1.462,5.719a5.561,5.561,0,0,0,4.644,1.849,5.286,5.286,0,0,0,4.429-1.806Q-81.7-16-81.7-19.952V-44.376h15.48v24.854q0,10.32-5.461,15.609T-87.634,1.376Zm32.852-45.752h15.05l.172,6.622A12.987,12.987,0,0,1-35.088-43.3a11.469,11.469,0,0,1,6.622-1.935,12.522,12.522,0,0,1,5.074.946l-1.2,14.62a14.527,14.527,0,0,0-5.676-1.118,7.985,7.985,0,0,0-6.751,2.967Q-39.3-24.854-39.3-19.006V0h-15.48Zm39.818,0H.516V0h-15.48ZM34.658,1.376A25.872,25.872,0,0,1,22.4-1.548,22.525,22.525,0,0,1,13.545-9.89a23.109,23.109,0,0,1-3.311-12.3,23.526,23.526,0,0,1,3.053-11.825A22.538,22.538,0,0,1,21.93-42.57a25.271,25.271,0,0,1,12.728-3.182,25.872,25.872,0,0,1,12.255,2.924,22.224,22.224,0,0,1,8.815,8.342A23.34,23.34,0,0,1,59-22.188a23.551,23.551,0,0,1-3.01,11.782,22.62,22.62,0,0,1-8.6,8.557A25,25,0,0,1,34.658,1.376Zm0-13.76a8.3,8.3,0,0,0,6.45-2.752A10.1,10.1,0,0,0,43.6-22.188a10.1,10.1,0,0,0-2.494-7.052,8.3,8.3,0,0,0-6.45-2.752,8.438,8.438,0,0,0-6.493,2.752,10,10,0,0,0-2.537,7.052,10,10,0,0,0,2.537,7.052A8.438,8.438,0,0,0,34.658-12.384ZM89.87,1.376q-10.492,0-16-5.332t-5.5-15.566V-44.376H83.85v24.424q0,3.87,1.462,5.719a5.561,5.561,0,0,0,4.644,1.849,5.286,5.286,0,0,0,4.429-1.806Q95.8-16,95.8-19.952V-44.376h15.48v24.854q0,10.32-5.461,15.609T89.87,1.376Zm48.762,0a41.863,41.863,0,0,1-10.105-1.2,23.3,23.3,0,0,1-7.7-3.182l1.72-11.266a26.758,26.758,0,0,0,7.224,3.225,28.581,28.581,0,0,0,7.912,1.161q5.59,0,5.59-2.666a2.4,2.4,0,0,0-1.29-2.15,23.4,23.4,0,0,0-5.246-1.806q-8.17-2.15-11.653-5.59t-3.483-9.46a12.269,12.269,0,0,1,5.074-10.406q5.074-3.784,13.932-3.784a41.3,41.3,0,0,1,8.815.946,25.17,25.17,0,0,1,7.181,2.58l-1.548,11.094a32.66,32.66,0,0,0-6.708-2.451,28.072,28.072,0,0,0-6.794-.9q-4.73,0-4.73,2.58a2.469,2.469,0,0,0,1.376,2.193,21.8,21.8,0,0,0,5.246,1.763q8,1.978,11.61,5.59a13.018,13.018,0,0,1,3.612,9.632,12,12,0,0,1-5.246,10.406Q148.178,1.376,138.632,1.376Z"
							transform="translate(158.842 45.752)"
						/>
					</g>
				</svg>
			</header>
		);
	}
}
export default HomeHeader;
