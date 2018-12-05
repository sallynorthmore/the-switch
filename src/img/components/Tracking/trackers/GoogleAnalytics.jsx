import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as config from '../../../../config';
import { isDevEnv } from '../utils/environments';

import { trackPageView, trackPageRead } from './google_analytics_actions';

const debug = false; // use this for switching up debugging
let currentPathname = null;
let currentTimeout = null;
let analyticsURI = debug
	? 'https://www.google-analytics.com/analytics_debug.js'
	: 'https://www.google-analytics.com/analytics.js';

function trackReading(pathname) {
	if (pathname !== currentPathname) {
		currentPathname = pathname;

		window.clearTimeout(currentTimeout);

		currentTimeout = window.setTimeout(() => trackPageRead(pathname), 15000);
	}
}

// custom code from GA
const initGoogleAnalytics = () => {
	/* eslint-disable */
	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		(i[r] =
			i[r] ||
			function() {
				(i[r].q = i[r].q || []).push(arguments);
			}),
			(i[r].l = 1 * new Date());
		(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m);
	})(window, document, 'script', analyticsURI, 'ga');
	/* eslint-enable */
};

class GoogleAnalytics extends React.PureComponent {
	componentDidMount() {
		initGoogleAnalytics();

		window.ga_debug = { trace: isDevEnv };
		window.ga('create', this.props.trackingId, this.props.options);

		this.handlePageChange();
	}

	componentDidUpdate(prevProps) {
		const prevPathname = prevProps.location.pathname;
		const hasPathnameChanged = prevPathname !== this.props.location.pathname;

		if (!config.isStatic && hasPathnameChanged) {
			this.handlePageChange();
		}
	}

	handlePageChange() {
		const { pathname } = this.props.location;
		trackPageView(pathname);
		trackReading(pathname);
	}

	render() {
		return null;
	}
}

GoogleAnalytics.defaultProps = {
	options: 'auto',
	location: {
		pathname: '',
	},
};

// trackingId in a 'UA-XXXXX-Y' format
GoogleAnalytics.propTypes = {
	trackingId: PropTypes.string.isRequired,
	options: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}),
};

export default withRouter(GoogleAnalytics);
