import React from 'react';
import PropTypes from 'prop-types';

// custom code from LinkedIn
const initLinkedIn = ({ trackingId }) => {
	/* eslint-disable */
	window._linkedin_data_partner_id = trackingId;

	(function() {
		var s = document.getElementsByTagName('script')[0];
		var b = document.createElement('script');
		b.type = 'text/javascript';
		b.async = true;
		b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
		s.parentNode.insertBefore(b, s);
	})();

	/* eslint-enable */
};

class LinkedIn extends React.PureComponent {
	componentDidMount() {
		const { trackingId } = this.props;
		initLinkedIn({ trackingId });
	}

	render() {
		const lin = (
			<noscript>
				<img
					height="1"
					width="1"
					style={{ display: 'none' }}
					alt=""
					src="https://dc.ads.linkedin.com/collect/?pid=302316&fmt=gif"
				/>
			</noscript>
		);

		return lin;
	}
}

// trackingId in a 'XXXXXX' format
LinkedIn.propTypes = {
	trackingId: PropTypes.string.isRequired,
};

export default LinkedIn;
