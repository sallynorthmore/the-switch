import Dot from './Dot';
import { TweenMax, Power4 } from 'gsap';
import { range } from '../../utils/maths';

class DotRow {
	constructor(ctx, color, index, max, size) {
		this.ctx = ctx;
		this.color = color;
		this.dots = [];
		this.index = index;
		this.max = max;
		this.endSize = size;
		this.running = false;

		this.generateDots();
	}

	generateDots() {
		const { width } = this.ctx.canvas;
		const rowAmount = Math.ceil(width / this.endSize) / 2;
		const opacity = range(this.index, 0, this.max, 0.2, 1);

		for (let i = 0; i < rowAmount; i++) {
			let x = this.endSize * 2 * i;
			if (this.index % 2 === 0) {
				x = width - this.endSize * 2 * i;
			}
			const y = this.index * (this.endSize * 4) + 60; // 60 = offset from top

			this.dots.push(new Dot(this.color, opacity, 0, x, y));
		}
	}

	onEnd = () => {
		const onEnd = () => (this.running = false);

		TweenMax.staggerTo(
			this.dots,
			2,
			{
				size: 0,
				ease: Power4.easeOut,
				yoyo: true,
				repeat: 1,
				onCompleteAll: onEnd,
			},
			0.1
		);
	};

	trigger() {
		this.running = true;
		const duration = 1 + Math.random() * 4;

		TweenMax.staggerTo(
			this.dots,
			duration,
			{
				size: this.endSize,
				ease: Power4.easeOut,
				onComplete: this.onEnd,
			},
			0.1
		);
	}

	update() {
		if (!this.running) {
			const r = Math.random() * 10;

			if (r < 0.1) {
				this.running = true;
				this.trigger();
			}
		}

		this.dots.forEach(dot => {
			dot.draw(this.ctx);
		});
	}
}

export default DotRow;
