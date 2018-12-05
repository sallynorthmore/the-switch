import { trackScrollDepth } from '../trackers/google_analytics_actions'; // eslint-disable-line

export const THROTTLE_INTERVAL = 500;

export default class TrackScrollDepth {
	depths = {
		25: false,
		50: false,
		75: false,
		100: false,
	};

	constructor(title) {
		this.title = title;
	}

	checkDepth = depth => {
		if (!this.depths[depth]) {
			this.depths[depth] = true;
			trackScrollDepth(`${depth}%`, this.title);
		}
	};

	track() {
		const body = document.body;
		const height = Math.max(body.scrollHeight, body.offsetHeight);
		const visible = window.scrollY + window.innerHeight;

		const scrollDepth = visible / height;

		if (scrollDepth >= 0.25) {
			this.checkDepth(25);
		}

		if (scrollDepth >= 0.5) {
			this.checkDepth(25);
			this.checkDepth(50);
		}

		if (scrollDepth >= 0.75) {
			this.checkDepth(25);
			this.checkDepth(50);
			this.checkDepth(75);
		}

		if (scrollDepth === 1) {
			this.checkDepth(25);
			this.checkDepth(50);
			this.checkDepth(75);
			this.checkDepth(100);
		}
	}
}
