import { range, easeInOutQuint } from '../../utils/maths';

const ANIMATION_TIME = 8;

class Dots {
	constructor(context, index, max, size) {
		this.ctx = context;
		this.dots = [];
		this.index = index;
		this.max = max;
		this.endSize = size;

		this.draw();
	}

	draw() {
		const rowAmount = Math.ceil(window.innerWidth / this.endSize) * 0.8;

		for (let i = 0; i < rowAmount; i++) {
			this.dots.push({
				index: i,
				size: 0,
				x: this.endSize * 1.25 * i,
				y: this.index * (this.endSize * 1.25),
			});
		}
	}

	update(tick) {
		// speeds up animation on y axis to create wavy effect
		const rowTime = ANIMATION_TIME * 0.8;

		// inverts delay based on index
		const rowDelay = range(this.index, 0, this.max - 1, rowTime, 0);
		const time = tick - rowDelay < 0 ? 0 : tick - rowDelay;

		this.dots.forEach(dot => {
			// inverts animation direction
			const [a, b] = this.index % 2 === 0 ? [1, 2] : [2, 1];

			// adds delay to dot based on its index
			const offset = range(dot.index, 0, this.dots.length, a, b);

			// maps the time onto a range in order to ease it
			const t = range(time * offset, 0, ANIMATION_TIME, 0, 1);
			const ease = easeInOutQuint(t);

			const size = Math.min(this.endSize * ease, this.endSize);
			dot.size = size;

			this.ctx.fillStyle = '#333DB9';
			this.ctx.beginPath();
			this.ctx.lineWidth = 1;
			this.ctx.arc(dot.x, dot.y, size, 0, 2 * Math.PI);
			this.ctx.fill();
		});
	}
}

export default Dots;
