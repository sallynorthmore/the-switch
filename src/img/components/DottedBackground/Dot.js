class Dot {
	constructor(color, opacity, size, x, y) {
		this.color = color;
		this.opacity = opacity;
		this.size = size;
		this.x = x;
		this.y = y;
	}

	draw(ctx) {
		ctx.save();
		ctx.beginPath();
		ctx.globalAlpha = this.opacity;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;

		ctx.fill();
		ctx.restore();
	}
}

export default Dot;
