import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import classNames from 'classnames';
import { Download } from 'components/Icons';
import DownloadLink from 'components/DownloadLink';
import './styles.css';

class DownloadExpander extends React.Component {
	constructor(props) {
		super(props);
		// Store a reference to the throttled function
		this.throttledFunction = throttle(this.handleScroll, 500);
	}

	state = {
		isOpen: true,
	};

	componentDidMount() {
		window.addEventListener('scroll', this.throttledFunction, false);
	}

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.throttledFunction, false);
	};

	onDownloadButtonClick = () => {
		this.setState(state => ({ isOpen: !state.isOpen }));
	};

	handleScroll = () => {
		if (this.state.isOpen) {
			this.setState(() => ({ isOpen: false }));
		}
	};

	render() {
		const { isOpen } = this.state;
		const { downloadUrl, onDownloadLinkClick } = this.props;
		return (
			<div
				className={classNames({
					['DownloadExpander']: true,
					['isOpen']: isOpen,
				})}
			>
				<div className="DownloadExpander-link">
					<DownloadLink
						hasIcon={false}
						downloadUrl={downloadUrl}
						onDownloadLinkClick={onDownloadLinkClick}
					/>
				</div>

				<button
					onClick={this.onDownloadButtonClick}
					className="DownloadExpander-button"
				>
					<Download width={14} />
				</button>
			</div>
		);
	}
}

DownloadExpander.propTypes = {
	isExpanded: PropTypes.bool,
	downloadUrl: PropTypes.string,
	onDownloadLinkClick: PropTypes.func,
};

DownloadExpander.defaultProps = {
	isExpanded: true,
};

export default DownloadExpander;
