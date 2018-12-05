import React from 'react';
import { trackLogoHeaderClick } from '../Tracking/trackers/google_analytics_actions';
import economistLogo from './economist_logo.png';
import './styles.css';

const EconomistLogo = () => {
	return (
		<div className="Banner-left">
			<a
				className="Banner-economistLogo"
				href="https://www.economist.com/"
				rel="noopener noreferrer"
				target="_blank"
				onClick={() =>
					trackLogoHeaderClick('The Economist', 'https://www.economist.com/')
				}
			>
				<img src={economistLogo} alt="Economist logo" />
			</a>
		</div>
	);
};

export default EconomistLogo;
