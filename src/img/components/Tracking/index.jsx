import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleAnalytics from './trackers/GoogleAnalytics';
import Bluekai from './trackers/Bluekai';
import CrazyEgg from './trackers/CrazyEgg';
import LinkedIn from './trackers/LinkedIn';
import SixSense from './trackers/SixSense';
import Lytics from './trackers/Lytics';
import './trackers/evidon_tracking_banner.css';

import {
	bluekaiId,
	bluekaiOptions,
	crazyEggId,
	googleAnalyticsId,
	linkedInId,
} from 'config';

/* eslint-disable */
class TrackingScripts extends Component {
	state = {
		isTrackingEnabled: false,
	};

	componentDidMount() {
		(function(id, enableTracking, disableTracking) {
			function append(scriptid, url, async) {
				var d = document,
					sn = 'script',
					f = d.getElementsByTagName(sn)[0];
				if (!f) f = d.head;
				var s = d.createElement(sn);
				s.async = true;
				s.id = scriptid;
				s.src = url;
				f.parentNode.insertBefore(s, f);
			}

			function getRootDomain() {
				var parts = window.location.hostname.split('.');
				if (parts.length === 2) rootDomain = parts[0];
				else if (parts.length > 2) {
					// see if the next to last value is a common tld
					var part = parts[parts.length - 2];
					if (part === 'com' || part === 'co') {
						rootDomain = parts[parts.length - 3]; // go back one more
					} else {
						rootDomain = part;
					}
				}

				return rootDomain;
			}

			window.evidon = {};
			window.evidon.id = id;
			var cdn = '//c.evidon.com/',
				rootDomain = getRootDomain(),
				noticecdn = cdn + 'sitenotice/';
			append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
			append('evidon-location', cdn + 'geo/country.js', true);
			append('evidon-themes', noticecdn + id + '/snthemes.js', true);
			if (rootDomain)
				append(
					'evidon-settings',
					noticecdn + id + '/' + rootDomain + '/settings.js',
					true
				);

			window.evidon.priorConsentCallback = function() {
				// add the tags which need to wait for prior consent
				// here.  This should be all your advertising tags and
				// probably most of your social and tracking tags.
				enableTracking();
			};

			window.evidon.closeCallback = function() {
				// this is executed when a user closes a UI element (banner/barrier) without
				// providing consent.
				disableTracking();
			};

			window.evidon.consentWithdrawnCallback = function() {
				// this is exeucted if the user withdraws consent and elects to
				// no longer allow technologies to run on the site.
				disableTracking();
			};
		})(2254, this.enableTracking, this.disableTracking);

		(function() {
			var gdprAppliesGlobally = false;

			// based on the IAB spec this frame is required so advertisers running in child frames can
			// look for IAB support.  The frame itself doesn't do anything, it just acts as a marker.
			function addFrame() {
				if (!window.frames['__cmpLocator']) {
					if (document.body) {
						var body = document.body,
							iframe = document.createElement('iframe');
						iframe.style.cssText = 'display:none';
						iframe.name = '__cmpLocator';
						body.appendChild(iframe);
					} else {
						// In the case where this stub is located in the head,
						// this allows us to inject the iframe more quickly than
						// relying on DOMContentLoaded or other events.
						setTimeout(addFrame, 5);
					}
				}
			}
			// init the add frame call
			addFrame();

			// this creates the stub implementation of the __cmp object.  With this
			// implementation the calls from advertisers are stored in an array which
			// is processed by the evidon-cmp script when it loads.
			function stubCMP() {
				var args = arguments;
				// console.log('stubCMP', args);
				__cmp.a = __cmp.a || [];

				if (!args.length) return __cmp.a;
				// eslint-disable-line
				else if (args[0] === 'ping') {
					args[2](
						{
							gdprAppliesGlobally: gdprAppliesGlobally,
							cmpLoaded: false,
						},
						true
					);
				} else {
					__cmp.a.push([].slice.apply(args)); // eslint-disable-line
				}
			}

			// this creates the message handler that handles calls from child frames where
			// they are not able to access the __cmp api directly.
			function cmpMsgHandler(event) {
				var msgIsString = typeof event.data === 'string';
				var json = msgIsString ? JSON.parse(event.data) : event.data;
				if (!json.__cmpCall) return;
				var call = json.__cmpCall;
				window.__cmp(call.command, call.parameter, function(retValue, success) {
					var returnMsg = {
						__cmpReturn: {
							returnValue: retValue,
							success: success,
							callId: call.callId,
						},
					};

					event.source.postMessage(
						msgIsString ? JSON.stringify(returnMsg) : returnMsg,
						'*'
					);
				});
			}
			// this looks to see if the __cmp is present or not on the page.   If not
			// we add the stub.
			if (typeof __cmp !== 'function') {
				window.__cmp = stubCMP;
				__cmp.msgHandler = cmpMsgHandler;

				if (window.addEventListener)
					window.addEventListener('message', cmpMsgHandler, false);
				else window.attachEvent('onmessage', cmpMsgHandler);
			}
		})();
	}

	enableTracking = () => {
		this.setState({ isTrackingEnabled: true });
	};

	disableTracking = () => {
		this.setState({ isTrackingEnabled: false });
	};

	render() {
		const { isTrackingEnabled } = this.state;
		const { googleAnalyticsOptions } = this.props;
		const isTrackingClass = `tracking-${
			this.state.isTrackingEnabled ? 'enabled' : 'disabled'
		}`;

		return (
			<div className={`TrackingScripts ${isTrackingClass}`}>
				{isTrackingEnabled && (
					<div>
						<GoogleAnalytics
							key="google-analytics-tracking"
							trackingId={googleAnalyticsId}
							options={googleAnalyticsOptions}
						/>
						<CrazyEgg key="crazy-egg-tracking" trackingId={crazyEggId} />
						<Bluekai
							key="bluekai-tracking"
							trackingId={bluekaiId}
							options={bluekaiOptions}
						/>
						<LinkedIn key="linked-in-tracking" trackingId={linkedInId} />
						<Lytics />
						<SixSense />
					</div>
				)}
			</div>
		);
	}
}

TrackingScripts.defaultProps = {
	googleAnalyticsOptions: undefined,
	bluekaiOptions: undefined,
};

TrackingScripts.propTypes = {
	googleAnalyticsOptions: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	bluekaiOptions: PropTypes.shape({
		pixelLimit: PropTypes.number,
	}),
};

export default TrackingScripts;
