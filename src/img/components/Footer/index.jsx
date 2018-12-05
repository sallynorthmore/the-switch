import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { trackExternalFooterClick } from 'components/Tracking/trackers/google_analytics_actions';
import './styles.css';

const FooterLink = ({ url, text }) => {
	return (
		<a
			className="Footer-link"
			href={url}
			onClick={() => {
				trackExternalFooterClick(text, url);
			}}
			rel="noopener noreferrer"
			target="_blank"
		>
			{text}
		</a>
	);
};

class Footer extends PureComponent {
	render() {
		return (
			<div className="Footer">
				<div className="Footer-inner">
					<h2 className="Footer-title">
						<span className="Footer-titleInner">More Time To Think</span>
					</h2>
					<div className="Footer-links">
						<FooterLink
							url="http://www.economist.com/legal/terms-of-use"
							text="Terms of use"
						/>
						<FooterLink
							url="http://www.economistgroup.com/results_and_governance/governance/privacy"
							text="Privacy"
						/>
						<FooterLink
							url="http://www.economist.com/cookies-info"
							text="Cookie Policy"
						/>
						<FooterLink
							url="http://www.economist.com/help/accessibilitypolicy"
							text="Accessibility"
						/>
						<FooterLink
							url="http://www.economistgroup.com/pdfs/Modern_Slavery_statement.pdf"
							text="Modern Slavery Statement"
						/>
						<a
							className="Footer-link"
							href="#"
							onClick={event => {
								event.preventDefault();
								window.evidon.notice.showConsentTool();
							}}
						>
							Manage Cookie Preferences
						</a>
						<span className="Footer-link evidon-notice-link" />
					</div>

					<div className="Footer-copyright">
						Copyright &copy; The Economist Newspaper Limited 2018. All rights
						reserved.
					</div>
				</div>
				<div className="Footer-tracking" />
			</div>
		);
	}
}

FooterLink.propTypes = {
	url: PropTypes.string,
	text: PropTypes.string,
};

export default Footer;
