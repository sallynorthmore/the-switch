import React from 'react';
import './styles.css';

const colors = [
	{ name: 'Black', rgb: 'rgb(0, 0, 0)' },
	{ name: 'Blue', rgb: 'rgb(0, 121, 181)' },
	{ name: 'Orange', rgb: 'rgb(255, 153, 34)' },
	{ name: 'Purple', rgb: 'rgb(39, 41, 175)' },
	{ name: 'Turquoise', rgb: 'rgb(0, 173, 181  )' },
	{ name: 'White', rgb: 'rgb(255, 255, 255)' },
];

const typeScale = [
	{ name: 'Type -1', styles: { fontSize: '0.75rem', lineHeight: '1rem' } },
	{ name: 'Type 0', styles: { fontSize: '1rem', lineHeight: '1.5rem' } },
	{ name: 'Type 1', styles: { fontSize: '1.25rem', lineHeight: '1.5rem' } },
	{ name: 'Type 2', styles: { fontSize: '1.875rem', lineHeight: '2.5rem' } },
];

const typeStyles = [
	{
		name: 'Chapter Title',
		styles: { font: '400 2rem/2.5rem NHaasGroteskDSPro-55Rg, sans-serif' },
	},
	{
		name: 'Insight Title',
		styles: { font: '300 2rem/2.5rem NHaasGroteskDSPro-45Lt, sans-serif' },
	},
	{
		name: 'Nav',
		styles: { font: '400 1.25rem/1.5rem "Open Sans", sans-serif' },
	},
	{
		name: 'Body Copy',
		styles: { font: '400 1rem/1.5rem "Open Sans", sans-serif' },
	},
	{
		name: 'Caption',
		styles: { font: '300 .75rem/1rem "Open Sans", sans-serif' },
	},
];

const StyleGuide = () => (
	<div className="StyleGuide">
		<h2 className="Styleguide-title">Colour Palette</h2>
		<ul className="Styleguide-items">
			{colors.map(({ name, rgb }) => {
				const divStyle = { backgroundColor: rgb };
				return (
					<li key={name} className="Styleguide-item">
						<div className="Styleguide-figure" style={divStyle} />
						<h3 className="Styleguide-subtitle">
							<span className="Styleguide-details">{name}</span>
							<span className="Styleguide-details">{rgb}</span>
						</h3>
					</li>
				);
			})}
		</ul>

		<h2 className="Styleguide-title">Type Scale</h2>
		<ul className="Styleguide-types">
			{typeScale.map(({ name, styles }) => {
				return (
					<li key={name} className="Styleguide-type">
						<h3 className="Styleguide-subtitle">
							<span style={styles}>{name}</span>
							<span className="Styleguide-details">
								{styles.fontSize} / {styles.lineHeight}
							</span>
						</h3>
					</li>
				);
			})}
		</ul>

		<h2 className="Styleguide-title">Type Styles</h2>
		<ul className="Styleguide-types">
			{typeStyles.map(({ name, styles }) => {
				return (
					<li key={name} className="Styleguide-type">
						<h3 className="Styleguide-subtitle">
							<span style={styles}>{name}</span>
							<span>
								<code>{styles.font}</code>
							</span>
						</h3>
					</li>
				);
			})}
		</ul>
	</div>
);

export default StyleGuide;
