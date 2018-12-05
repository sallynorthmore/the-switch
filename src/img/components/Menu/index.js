import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineMax, TweenMax } from 'gsap';
import classNames from 'classnames';
import DownloadLink from 'components/DownloadLink';
import copy from './copy';
import back from './back.svg';
import './styles.css';
import Context from '../../utils/context';

const BANNER_HEIGHT = 80;

class Menu extends Component {
	state = {
		isScrolled: false,
	};

	componentDidMount() {
		const { hasMenuPlayed } = this.props;
		if (!hasMenuPlayed) {
			const tl = new TimelineMax();
			tl.add(TweenMax.staggerTo('.sequential', 0.1, { opacity: 1 }, 0.05));
			tl.add(TweenMax.staggerTo('.whole', 0.3, { opacity: 1 }, 0.1));
			tl.add(TweenMax.to('.extraneous', 0.5, { opacity: 1 }));
		}

		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	scheduledAnimationFrame = null;

	/* Shift desktop menu up to top of the browser, when scrolled */

	updateMenuY = () => {
		const y = window.scrollY;
		if (y > BANNER_HEIGHT && !this.state.isScrolled) {
			this.setState(() => ({ isScrolled: true }));
		} else if (y < BANNER_HEIGHT && this.state.isScrolled) {
			this.setState(() => ({ isScrolled: false }));
		}
		this.scheduledAnimationFrame = false;
	};

	onScroll = () => {
		// Prevent multiple rAF callbacks.
		if (this.scheduledAnimationFrame) {
			return;
		}
		this.scheduledAnimationFrame = true;
		requestAnimationFrame(this.updateMenuY);
	};

	render() {
		const {
			chapter,
			downloadUrl,
			onChapterClick,
			onDownloadLinkClick,
			hasMenuPlayed,
		} = this.props;
		const { isScrolled } = this.state;
		return (
			<Context.Consumer>
				{context => (
					<div
						className={classNames({
							['Menu']: true,
							['isCollapsed']: context.menuCollapsedDesktop,
							['isScrolled']: isScrolled,
						})}
					>
						<div className="Menu-inner">
							<div className="Menu-header">
								<img
									className="Menu-back"
									src={back}
									alt="back"
									onClick={() => context.toggleMenuOpen(false)}
								/>
							</div>
							<div className="Menu-body">
								<div className="Menu-bodyInner">
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
															if (!context.menuCollapsedDesktop) {
																context.toggleMenuCollapsedDesktop(true);
															}
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
							<div className="Menu-footer">
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
					</div>
				)}
			</Context.Consumer>
		);
	}
}

export default Menu;

Menu.propTypes = {
	chapter: PropTypes.string,
	downloadUrl: PropTypes.string,
	onChapterClick: PropTypes.func,
	onDownloadLinkClick: PropTypes.func,
	hasMenuPlayed: PropTypes.bool,
};

Menu.defaultProps = {
	hasMenuPlayed: false,
};
