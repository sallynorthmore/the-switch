import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { withRouter } from 'react-static';
import classNames from 'classnames';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';
import NavButton from 'components/NavButton';
import Button from 'components/Button';
import Chapter from 'components/Chapter';
import DownloadExpander from 'components/DownloadExpander';

/* Analytics Tracking */
import {
	trackBackToTopClick,
	trackDownloadButtonClick,
	trackHomeButtonClick,
	trackNavButtonClick,
	trackNavLinkClick,
} from 'components/Tracking/trackers/google_analytics_actions';
import TrackScrollDepth from 'components/Tracking/utils/scroll';

import './styles.css';

class Chapters extends Component {
	constructor(props) {
		super(props);

		// Store a reference to the throttled function
		this.throttledFunction = throttle(this.handleScroll, 250);
		this.scroll = new TrackScrollDepth('Insights');
	}

	state = {
		isMenuOpen: true,
		chapter: '/insights/do-you-sleep-with-your-data',
		hasMenuPlayed: false,
	};

	componentDidMount = () => {
		/* Check if there is a chapter param in the URL */
		let chapterParam = this.getChapterName(this.props.location.pathname);

		/* Check if the chapter param matches an actual chapter slug */
		if (chapterParam && this.props.slugs.includes(chapterParam)) {
			// If mobile: go to this chapter, hide nav
			this.setState(() => ({ isMenuOpen: false }));

			this.chaptersRefs.map(ref => {
				if (ref.id === chapterParam) {
					this._scrollTo(ref.offsetTop);
				}
			});
		}

		window.addEventListener('scroll', this.throttledFunction, false);
	};

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.throttledFunction, false);
	};

	handleDownloadLinkClick = () => {
		/* Event must track download's filename */
		trackDownloadButtonClick(this.props.downloadUrl);
	};

	handleChapterClick = event => {
		const { hasMenuPlayed } = this.state;
		/* Prevent page load. */
		event.preventDefault();

		if (!hasMenuPlayed) {
			this.setState({ hasMenuPlayed: true });
		}

		/* Get chapterName */
		const chapterName = event.target.href.substr(
			event.target.href.lastIndexOf('/') + 1
		);

		/* Scrollto chapter */
		this.chaptersRefs.map(ref => {
			if (ref.id === chapterName) {
				// Magic Number: 80px accounts for Banner height
				this._scrollTo(ref.offsetTop + 80);
			}
		});

		/* Close mobile nav. */
		setTimeout(() => {
			this.setState(state => ({ isNavOpen: !state.isNavOpen }));
		}, 300);

		/* Track click */
		trackNavLinkClick(chapterName);
	};

	handleHomeButtonClick = event => {
		trackHomeButtonClick(event.target.href);
	};

	handleNavButtonClick = () => {
		trackNavButtonClick('open');
		this.setState(state => ({ isMenuOpen: !state.isMenuOpen }));
	};

	chaptersRefs = [];

	handleScroll = () => {
		/* Update the URL path with the chapter currently in view */
		for (let i = 0; i < this.chaptersRefs.length; i++) {
			const refTop = this.chaptersRefs[i].offsetTop;
			const refHeight = this.chaptersRefs[i].clientHeight;

			if (window.scrollY > refTop && window.scrollY < refTop + refHeight) {
				if (history.pushState) {
					history.pushState(null, null, `/insights/${this.chaptersRefs[i].id}`);
					// this.setState({ chapter: `/insights/${this.chaptersRefs[i].id}` });
				}
				break;
			}
		}

		/* Tracking script for tracking % of page scrolled */
		this.scroll.track();
	};

	scrollToTop = () => {
		trackBackToTopClick('Insights');
		this._scrollTo(0);
	};

	getChapterName = string => {
		const pathname = string;
		const params = pathname.match('/.*?/([^/]*)');
		let chapterParam;
		if (params && params[1].length) {
			chapterParam = params[1];
		}
		return chapterParam;
	};

	_scrollTo = offsetTop => {
		// window.scrollTo({ left: 0, top: offsetTop, behavior: 'auto' });
		document.body.scrollTop = offsetTop;
		document.documentElement.scrollTop = offsetTop;
	};

	render() {
		const { isMenuOpen, hasMenuPlayed } = this.state;
		const { chapters, downloadUrl } = this.props;

		return (
			<div
				className={classNames({
					['Chapters']: true,
					['hasNavOpen']: isMenuOpen,
				})}
			>
				{/* Desktop navigation */}
				<div className="Chapters-nav">
					<Menu
						chapter={this.state.chapter}
						onChapterClick={this.handleChapterClick}
						hasMenuPlayed={hasMenuPlayed}
						downloadUrl={downloadUrl}
					/>
				</div>

				{/* Content */}
				<div className="Chapters-main">
					{chapters.map((chapter, i) => (
						<div
							ref={node => (this.chaptersRefs[i] = node)}
							key={chapter.slug}
							id={chapter.slug}
						>
							<Chapter
								theme={chapter.theme}
								slug={chapter.slug}
								chapter={chapter.chapter}
								title={chapter.title}
								content={chapter.content}
								insight={chapter.insight}
								sharingPostUrl={chapter.meta.sharingPostUrl}
								sharingPostCopy={chapter.meta.postCopy}
								sharingHashTags={chapter.meta.hashtags}
							/>
						</div>
					))}
					<div className="Chapters-downloadExpander">
						<DownloadExpander
							downloadUrl={downloadUrl}
							onDownloadLinkClick={this.handleDownloadLinkClick}
						/>
					</div>
					{/* Back to top section */}
					<div className="Chapters-backToTop">
						<Button text="Back to top" onClick={this.scrollToTop} />
					</div>
				</div>

				{/* Mobile navigation */}
				<div className="Chapters-trigger">
					<NavButton
						isMenuOpen={isMenuOpen}
						onNavButtonClick={this.handleNavButtonClick}
					/>
				</div>
				<div
					className={classNames({
						['Chapters-slideNav']: true,
						['isOpen']: isMenuOpen,
					})}
				>
					{isMenuOpen && (
						<MobileMenu
							chapter={this.state.chapter}
							downloadUrl={downloadUrl}
							onChapterClick={this.handleChapterClick}
							onDownloadLinkClick={this.handleDownloadLinkClick}
							toggleMenuOpen={isMenuOpen => this.setState({ isMenuOpen })}
							hasMenuPlayed={hasMenuPlayed}
						/>
					)}
				</div>
			</div>
		);
	}
}

Chapters.propTypes = {
	downloadUrl: PropTypes.string,
	chapters: PropTypes.array,
	location: PropTypes.shape({ pathname: PropTypes.string }),
	slugs: PropTypes.array,
};

export default withRouter(Chapters);
