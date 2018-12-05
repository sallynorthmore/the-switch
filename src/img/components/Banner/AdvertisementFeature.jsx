import React from 'react';
import Tooltip from '../Tooltip/';
import { Chevron } from '../Icons';
import { trackAdvertismentFeature } from '../Tracking/trackers/google_analytics_actions';
import './styles.css';

class AdvertismentFeature extends React.Component {
	state = {
		isTooltipShown: false,
	};

	handleTooltipToggle = () => {
		const isTooltipShown = !this.state.isTooltipShown;
		this.setState({ isTooltipShown });

		const label = isTooltipShown ? 'open' : 'close';
		trackAdvertismentFeature(label);
	};

	render() {
		const { isTooltipShown } = this.state;

		const tooltipClassName = isTooltipShown
			? 'Banner-tooltip Banner-tooltipShown'
			: 'Banner-tooltip';

		return (
			<div className="Banner-middle">
				<div
					className="Banner-adFeatureWrapper"
					onClick={this.handleTooltipToggle}
				>
					<div className={tooltipClassName}>
						<Tooltip
							copy="Our sponsors provide financial support for this website. We endeavour to give our sponsors the opportunity to communicate their messages in placements that are clearly demarcated. Such placements are clearly labelled as Advertisement, Advertisement feature, Sponsored content, Sponsor's perspective, “Brought to you by” the sponsor or words to that effect. Occasionally, we group together content from various sources relating to the same topic. In cases where content from The Economist Group is included, it will be clearly labelled as from The Economist or Economist Intelligence Unit. At all times there is a clear division between our editorial staff and sponsors, and sponsors are never allowed to influence what our editorial teams write. Sponsors are solely responsible for their content, and their views do not necessarily reflect those of The Economist."
							isVisible={this.state.isTooltipShown}
							onClose={this.handleTooltipToggle}
						/>
					</div>
					<div className="Banner-adFeature">
						Advertisement Feature
						<span className="Banner-adFeatureIcon">
							<Chevron width={10} />
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default AdvertismentFeature;
