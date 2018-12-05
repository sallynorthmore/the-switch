import React from 'react';
import EconomistLogo from './EconomistLogo';
import AdvertismentFeature from './AdvertisementFeature';
import SponsorLogos from './SponsorLogos';
import './styles.css';

const Banner = () => {
	return (
		<header className="Banner">
			<EconomistLogo />
			<AdvertismentFeature />
			<SponsorLogos />
		</header>
	);
};

export default Banner;
