import { Component } from 'react';
import { env } from 'config';

class SixSense extends Component {
	componentDidMount() {
		if (env !== 'development') {
			window._6si = window._6si || [];

			window._6si.push(['enableEventTracking', true]);

			window._6si.push(['setToken', 'f77930cde4fc0a1755c599b8fa1f63cc']);

			window._6si.push(['setEndpoint', 'b.6sc.co']);

			(function() {
				var gd = document.createElement('script');

				gd.type = 'text/javascript';

				gd.async = true;

				gd.src = '//j.6sc.co/6si.min.js';

				var s = document.getElementsByTagName('script')[0];

				s.parentNode.insertBefore(gd, s);
			})();
		}
	}

	render() {
		return null;
	}
}

export default SixSense;
