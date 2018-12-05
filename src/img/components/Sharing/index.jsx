import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Spring, animated } from 'react-spring';
import { Close, LinkedIn, Twitter, Share } from 'components/Icons';
import { shareToTwitter, shareToLinkedIn } from './sharing';
/* Analytics Tracking */
import { trackSocialShareClick } from 'components/Tracking/trackers/google_analytics_actions';
import './styles.css';

class Sharing extends React.Component {
	state = {
		isOpen: false,
	};

	suggestedText = `${this.props.tweetText} ${this.props.sharingUrl}  ${
		this.props.tweetHashTags
	}`;

	onShareButtonClick = () => {
		this.setState(state => ({ isOpen: !state.isOpen }));
	};

	onTwitterShare = event => {
		event.preventDefault();
		shareToTwitter(this.suggestedText, this.props.sharingUrl);
		trackSocialShareClick('Twitter', this.props.title);
	};

	onLinkedInShare = event => {
		event.preventDefault();
		shareToLinkedIn(this.suggestedText, this.props.sharingUrl);
		trackSocialShareClick('LinkedIn', this.props.title);
	};

	render() {
		const { isOpen } = this.state;
		const { tweetText, sharingUrl, tweetHashTags } = this.props;

		return (
			<div
				className={classNames({
					['Sharing']: true,
					['isOpen']: isOpen,
				})}
			>
				<div className="Sharing-inner">
					<button className="Sharing-button" onClick={this.onShareButtonClick}>
						{isOpen && <Close width={13} />}
						{!isOpen && <Share width={18} />}
					</button>

					<Spring native to={{ maxWidth: isOpen ? 100 : 0 }}>
						{props => (
							<animated.ul
								className={classNames({
									['Sharing-items']: true,
									['isOpen']: isOpen,
								})}
								style={{ ...props }}
							>
								<li className="Sharing-item" style={props}>
									<a
										href={`https://twitter.com/intent/tweet?text=${tweetText} ${tweetHashTags} ${sharingUrl}`}
										className="Sharing-link"
										title="Share insight on Twitter"
										onClick={this.onTwitterShare}
									>
										<Twitter width={32} />
									</a>
								</li>
								<li className="Sharing-item" style={props}>
									<a
										href="linkedin.com"
										title="Share insight on LinkedIn"
										className="Sharing-link"
										onClick={this.onLinkedInShare}
									>
										<LinkedIn width={28} />
									</a>
								</li>
							</animated.ul>
						)}
					</Spring>
				</div>
			</div>
		);
	}
}

Sharing.propTypes = {
	slug: PropTypes.string,
	title: PropTypes.string,
	tweetHashTags: PropTypes.string,
	tweetText: PropTypes.string,
	sharingUrl: PropTypes.string,
};

export default Sharing;
