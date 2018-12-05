import React from 'react';
import PropTypes from 'prop-types';
import { Download } from 'components/Icons';
import './styles.css';

function DownloadLink({ downloadUrl, onDownloadLinkClick, hasIcon }) {
	return (
		<a
			href={downloadUrl}
			className="DownloadLink"
			onClick={onDownloadLinkClick}
			download
		>
			<span className="DownloadLink-text">Download Report</span>

			{!hasIcon && (
				<span className="DownloadLink-icon">
					<Download width={14} />
				</span>
			)}
		</a>
	);
}

DownloadLink.propTypes = {
	hasIcon: PropTypes.bool,
	downloadUrl: PropTypes.string,
	onDownloadLinkClick: PropTypes.func,
};

DownloadLink.defaultProps = {
	hasIcon: false,
	downloadUrl: '#',
	onDownloadLinkClick: () => {},
};

export default DownloadLink;
