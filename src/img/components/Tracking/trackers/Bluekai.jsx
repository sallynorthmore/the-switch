import React from 'react';
import PropTypes from 'prop-types';

// custom code from Bluekai
const initBluekai = ({ trackingId, pixelLimit }) => {
	/* eslint-disable */
	window.bk_async = function() {
		/*
  this is where your phints go currently there is only 1 phint named page please replace value with the value of the page
  For additional phints just copy the below and replace page with the new phint name
  and add the value for that phint where it currently has value
  */

		bk_addPageCtx('page', 'Value');

		// siteID and pixel limit
		BKTAG.doTag(trackingId, pixelLimit);
	};

	(function() {
		var scripts = document.getElementsByTagName('script')[0];
		var s = document.createElement('script');
		s.async = true;
		s.src = 'https://tags.bkrtx.com/js/bk-coretag.js';
		scripts.parentNode.insertBefore(s, scripts);
	})();
	/* eslint-enable */
};

class Bluekai extends React.PureComponent {
	componentDidMount() {
		const { trackingId } = this.props;
		const { pixelLimit } = this.props.options;
		initBluekai({ trackingId, pixelLimit });
	}

	render() {
		return null;
	}
}

Bluekai.defaultProps = {
	options: {
		pixelLimit: 1,
	},
};

// trackingId in a 'XXXXX' format
Bluekai.propTypes = {
	trackingId: PropTypes.number.isRequired,
	options: PropTypes.shape({
		pixelLimit: PropTypes.number,
	}),
};

export default Bluekai;
