import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineMax, TweenMax } from 'gsap';
import DownloadLink from 'components/DownloadLink';
import classNames from 'classnames';
import copy from './copy';
import back from './back.svg';
import './styles.css';
import Context from '../../utils/context';

class MobileMenu extends Component {
	componentDidMount() {
		const { hasMenuPlayed } = this.props;
		if (!hasMenuPlayed) {
			const tl = new TimelineMax();
			tl.add(TweenMax.staggerTo('.sequential', 0.1, { opacity: 1 }, 0.05));
			tl.add(TweenMax.staggerTo('.whole', 0.3, { opacity: 1 }, 0.1));
			tl.add(TweenMax.to('.extraneous', 0.5, { opacity: 1 }));
		}
	}

	render() {
		const {
			downloadUrl,
			onChapterClick,
			onDownloadLinkClick,
			chapter,
			toggleMenuOpen,
			hasMenuPlayed,
		} = this.props;
		return (
			<Context.Consumer>
				{context => (
					<div className="MobileMenu">
						<div className="MobileMenu-header">
							<img
								className="MobileMenu-back"
								src={back}
								alt="Back"
								onClick={() => context.toggleMenuOpen(false)}
							/>
						</div>
						<div className="MobileMenu-body">
							<div className="MobileMenu-bodyInner">
								<p>
									<span>
										{copy[0].startText.split('').map((s, i) => (
											<span
												className="sequential"
												style={{ opacity: hasMenuPlayed ? 1 : 0 }}
												key={i}
											>
												{s}
											</span>
										))}
									</span>
									{copy
										.filter(f => f.animationType === 'whole')
										.map((l, i) => (
											<span
												className="whole"
												style={{ opacity: hasMenuPlayed ? 1 : 0 }}
												key={i}
											>
												{l.startText}
												<a
													href={l.link}
													onClick={e => {
														onChapterClick(e);
														context.toggleMenuCollapsedDesktop(true);
														toggleMenuOpen(false);
													}}
													className={classNames({
														['MobileMenu-link']: true,
														['isActive']: chapter === l.link,
													})}
												>
													{l.linkText}
												</a>
												{l.endText}
											</span>
										))}
								</p>
							</div>
						</div>
						<div className="MobileMenu-footer">
							<div
								className="extraneous"
								style={{ opacity: hasMenuPlayed ? 1 : 0 }}
							>
								<DownloadLink
									downloadUrl={downloadUrl}
									onDownloadLinkClick={onDownloadLinkClick}
								/>
							</div>
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}

export default MobileMenu;

MobileMenu.propTypes = {
	chapter: PropTypes.string,
	downloadUrl: PropTypes.string,
	onChapterClick: PropTypes.func,
	onDownloadLinkClick: PropTypes.func,
	toggleMenuOpen: PropTypes.func,
	hasMenuPlayed: PropTypes.bool,
};

MobileMenu.defaultProps = {
	hasMenuPlayed: false,
};
