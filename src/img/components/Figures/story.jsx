import React from 'react';
import { storiesOf } from '@storybook/react';
import Figures from './index';

const stories = storiesOf('Figures', module);

const storyProps = {
	color: 'rgb(0, 173, 181)',
	caption: 'When are CEOs checking their business data?',
	items: [
		{
			title: '23%',
			description: 'CEOs who check their data at lunch',
		},
		{
			title: '19%',
			description: 'CEOs who check their as they wake up',
		},
		{
			title: '17%',
			description: 'CEOs who check their data before bed',
		},
	],
};

stories.add('Figures', () => {
	return <Figures {...storyProps} />;
});
