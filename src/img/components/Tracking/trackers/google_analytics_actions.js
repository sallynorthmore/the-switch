/* CUSTOM DIMENSIONS */
const CD1_ARTICLE = 'Article';
const CD2_CLIENT_BRANDED = 'Client Branded';
const CD3_WORD_COUNT = 'Word Count';
const CD4_TECHNOLOGY = 'IT & TECHNOLOGY';

// ROOTS
const pageCustomDimensions = {
	// '/intro': { dimension1: CD1_SLIDESHOW },
};

/* CUSTOM CATEGORIES */
const DOWNLOADS = 'Downloads';
const NAV_BUTTONS = 'Navigation-Buttons';
const OPEN_CONTENT = 'Open-Content';
const OPEN_CONTENT_EXT = 'Open-content-external';
const READ_TIME = '15_seconds';
const SCROLL_DEPTH = 'Scroll-Depth';
const SOCIAL_SHARE = 'Social-Media-Share';

/* CUSTOM ACTIONS */

const AD_FEATURE = 'Advertisement Feature';
const BACK_TO_TOP = 'Back to Top';
const CTA_BUTTON = 'CTA Button';
const FOOTER = 'Footer';
const HOME = 'Home';
const MENU = 'Menu';
const REPORT = 'Report';
const THEME = 'Theme';

const getDimensionsForPathname = pathname => {
	// Remove everything up to last slash in string
	const stripped = pathname.replace(/^(.*[\\\/])/, ''); //eslint-disable-line
	const fragment = `/${stripped}`;
	return pageCustomDimensions[fragment];
};

export const trackPageView = pathname => {
	// Wrapped in try/catch to avoid errors when `window.ga` is not defined
	try {
		if (window.ga && pathname) {
			const dimensions = getDimensionsForPathname(pathname);

			const defaultDimensions = {
				hitType: 'pageview',
				page: pathname,
				dimension1: CD1_ARTICLE,
				dimension2: CD2_CLIENT_BRANDED,
				dimension3: CD3_WORD_COUNT,
				dimension4: CD4_TECHNOLOGY,
			};

			const attrs = Object.assign(defaultDimensions, dimensions);

			window.ga('send', attrs);
		} else {
			throw Error('ga not loaded/ready yet');
		}
	} catch (e) {
		// Fail silently
		// console.log('trackPageView error: ', e);
	}
};

export const sendGAEvent = options => {
	const { category, action, label, nonInteraction = false } = options;

	// avoid errors when `window.ga` is not defined
	try {
		if (window.ga) {
			window.ga('send', 'event', category, action, label, {
				// Optionally add non-interaction flag
				// https://developers.google.com/analytics/devguides/collection/analyticsjs/events#non_interaction_events
				nonInteraction,
			});
		} else {
			throw Error('ga not loaded/ready yet');
		}
	} catch (e) {
		// console.log('sendGAEvent error: ', e); //eslint-disable-line
		// Fail silently
	}
};

export const trackScrollDepth = (depthPercentage, label, nonInteraction) => {
	sendGAEvent({
		category: SCROLL_DEPTH,
		action: depthPercentage,
		label,
		nonInteraction,
	});
};

export const trackPageRead = (label = '') => {
	sendGAEvent({
		category: READ_TIME,
		action: 'Read',
		label,

		// Always treat page read time +15 seconds as passive event
		nonInteraction: true,
	});
};

/*
 * Site Banner
 *
 */
export const trackLogoHeaderClick = (label = '') => {
	sendGAEvent({ category: OPEN_CONTENT_EXT, action: 'Logo', label });
};

/*
 * Homepage
 *
 */

export const trackCTAButtonClick = (label = '') => {
	sendGAEvent({ category: NAV_BUTTONS, action: CTA_BUTTON, label });
};

/*
 * Navigation
 *
 */

export const trackNavLinkClick = (label = '') => {
	sendGAEvent({ category: OPEN_CONTENT, action: THEME, label });
};

export const trackNavButtonClick = (label = '') => {
	sendGAEvent({ category: NAV_BUTTONS, action: MENU, label });
};

export const trackHomeButtonClick = (label = '') => {
	sendGAEvent({ category: OPEN_CONTENT, action: HOME, label });
};

/*
 * Insights Page
 *
 */

export const trackDownloadButtonClick = (label = '') => {
	sendGAEvent({ category: DOWNLOADS, action: REPORT, label });
};

export const trackSocialShareClick = (type, label = '') => {
	sendGAEvent({ category: SOCIAL_SHARE, action: `${type}-Share`, label });
};

// TODO
export const trackBackToTopClick = (label = '') => {
	sendGAEvent({ category: NAV_BUTTONS, action: BACK_TO_TOP, label });
};

/*
 * Site Footer
 *
 */
export const trackExternalFooterClick = (label = '') => {
	sendGAEvent({ category: OPEN_CONTENT_EXT, action: FOOTER, label });
};

export const trackAdvertismentFeature = label => {
	sendGAEvent({ category: OPEN_CONTENT, action: AD_FEATURE, label });
};
