import React from 'react';
import { storiesOf } from '@storybook/react';
import BumpChart from './index';

const stories = storiesOf('BumpChart', module);

const storyProps1 = {
	title: 'CEOs rating their ability to access and review their business data',
	items: [
		{
			label: 'Very Good',
			value: 51,
			height: 1,
		},
		{
			label: 'Good',
			value: 42,
			height: 0.9,
		},
		{
			label: 'Poor',
			value: 6,
			height: 0.3,
		},
		{
			label: 'Poorest',
			value: 0,
			height: 0,
		},
	],
};

const storyProps2 = {
	title: 'Timeliness of data used by CEOs in meetings and reports',
	items: [
		{
			label: 'Live data',
			value: 32,
			height: 1.1,
		},
		{
			label: 'Hourly',
			value: 15,
			height: 0.6,
		},
		{
			label: 'Daily',
			value: 24,
			height: 0.9,
		},
		{
			label: 'Weekly',
			value: 17,
			height: 0.7,
		},
		{
			label: 'Monthly or longer',
			value: 11,
			height: 0.5,
		},
	],
};

stories
	.add('4 Items', () => {
		return <BumpChart {...storyProps1} />;
	})
	.add('5 Items', () => {
		return <BumpChart {...storyProps2} />;
	});
