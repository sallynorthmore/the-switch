import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner';
import Footer from 'components/Footer';
import './styles.css';

function Chrome({ children }) {
	return (
		<div className="Chrome">
			<div className="Chrome-banner">
				<Banner />
			</div>
			<div className="Chrome-content">{children}</div>
			<div className="Chrome-footer">
				<Footer />
			</div>
		</div>
	);
}

Chrome.propTypes = {
	children: PropTypes.any,
};

export default Chrome;
