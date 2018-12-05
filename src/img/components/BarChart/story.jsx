import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import BarChart from './index';

const stories = storiesOf('BarChart', module);

const storyProps1 = {
	caption: text('Caption', 'CEOs who check their data before going to bed'),
	items: [
		{ label: '25-34', value: '26%', width: '100%' },
		{ label: '35-44', value: '18%', width: '60%' },
		{ label: '45-54', value: '7%', width: '20%' },
		{ label: '55+', value: '0%', width: '0%' },
	],
};

const storyProps2 = {
	title: text('Title', 'In a fixed office'),
	items: [
		{
			label: 'UK/Ireland',
			value: '49%',
			width: '80%',
			color: 'rgb(255, 153, 34)',
		},
		{
			label: 'Germany',
			value: '55%',
			width: '100%',
			color: 'rgb(0, 173, 181)',
		},
		{ label: 'France', value: '31%', width: '30%', color: 'rgb(0, 121, 181)' },
	],
};

stories
	.add('default with caption text', () => {
		return <BarChart {...storyProps1} />;
	})
	.add('custom colors with title text', () => {
		return <BarChart {...storyProps2} />;
	});
