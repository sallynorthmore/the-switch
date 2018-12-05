import React from 'react';
import PropTypes from 'prop-types';

// custom code from CrazyEgg
const initCrazyEgg = trackingId => {
	setTimeout(() => {
		const a = document.createElement('script');
		const b = document.getElementsByTagName('script')[0];

		const protocol = document.location.protocol;
		const address = '//script.crazyegg.com/pages/scripts/';
		const hours = Math.floor(new Date().getTime() / 3600000);

		a.src = `${protocol}${address}${trackingId}.js?${hours}`;
		a.async = true;
		a.type = 'text/javascript';
		b.parentNode.insertBefore(a, b);
	}, 1);
};

class CrazyEgg extends React.PureComponent {
	componentDidMount() {
		initCrazyEgg(this.props.trackingId);
	}

	render() {
		return null;
	}
}

// trackingId in a 'XXXX/XXXX' format
CrazyEgg.propTypes = {
	trackingId: PropTypes.string.isRequired,
};

export default CrazyEgg;
