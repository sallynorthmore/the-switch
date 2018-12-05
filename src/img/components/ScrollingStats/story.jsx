import React from 'react';
import { storiesOf } from '@storybook/react';
import ScrollingStats from './index';

const stories = storiesOf('ScrollingStats', module);

const story1Props = {
	items: [
		{
			value: '45%',
			label: 'Myself',
			scale: 0.55,
			caption:
				'This confidence is reflected by the fact that half of CEOs think it’s their responsibility to connect and manage data insights.',
		},
		{
			value: '24%',
			label: 'CTO and IT',
			scale: 0.34,
			caption:
				'A quarter think it’s IT’s job, but is it wise to be beholden to one department? ',
		},
		{
			value: '6%',
			label: 'Responsibility shared',
			scale: 0.16,
			caption:
				'Only a tiny percentage think its everyones responsibility - a strategy that would lessen the burden, empower staff and make every team more agile.',
		},
	],
	isDiamond: false,
};

const story2Props = {
	items: [
		{
			value: '100%',
			label: 'Myself',
			scale: 1,
			caption:
				'1 This confidence is reflected by the fact that half of CEOs think it’s their responsibility to connect and manage data insights.',
		},
		{
			value: '50%',
			label: 'CTO and IT',
			scale: 0.5,
			caption:
				'2 A quarter think it’s IT’s job, but is it wise to be beholden to one department? ',
		},
		{
			value: '25%',
			label: 'Responsibility shared',
			scale: 0.25,
			caption:
				'3 Only a tiny percentage think its everyones responsibility - a strategy that would lessen the burden, empower staff and make every team more agile.',
		},
	],
	isDiamond: true,
};

stories
	.addDecorator(story => (
		<div
			style={{
				minHeight: '500vh',
				width: '100%',
			}}
		>
			<div
				style={{
					marginTop: '100vh',
					position: 'absolute',
					top: '50px',
					width: '100%',
				}}
			>
				{story()}
			</div>
		</div>
	))
	.add('Default', () => {
		return <ScrollingStats {...story1Props} />;
	})
	.add('Diamond', () => {
		return <ScrollingStats {...story2Props} />;
	});
