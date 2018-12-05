import React from 'react';
import { storiesOf } from '@storybook/react';
import Chapter from './index';
import insightImagePath from '../../../public/images/chapters/1@2x.png';

const stories = storiesOf('Chapter', module);

const storyProps = {
	theme: '#009ea6',
	chapter: 'one',
	slug: 'sleep',
	title: 'Do you sleep with your data?',
	content: [
		{
			type: 'Text',
			content:
				'The digital era means there’s a growing trend to be ‘always on’, with CEOs harnessing the power of their data around the clock.',
		},
		{
			type: 'ImageGrid',
			content: {
				copy: [
					'Freeze time to get more done',
					'Teleport to avoid travel time',
					'Invisibility to observe operations',
					'Clone for meetings',
				],
			},
		},
		{
			type: 'BumpChart',
			content: {
				title:
					'CEOs rating their ability to access and review their business data',
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
			},
		},
		{
			type: 'Text',
			content:
				'Over a quarter of CEOs aged 25-34 check their business data as soon as they wake up and before they go to bed, compared to just 7% of those aged 45+.',
		},
		{
			type: 'ScrollingStats',
			content: {
				items: [
					{
						value: '10%',
						label: 'CTOs',
						scale: 0.33,
						caption:
							'This confidence is reflected by the fact that half of CEOs think it’s their responsibility to connect and manage data insights.',
					},
					{
						value: '30%',
						label: 'You',
						scale: 1,
						caption:
							'A quarter think it’s IT’s job, but is it wise to be beholden to one department? ',
					},
					{
						value: '18%',
						label: 'Myself',
						scale: 0.55,
						caption:
							'Only a tiny percentage think it’s everyone’s responsibility - a strategy that would lessen the burden, empower staff and make every team more agile.',
					},
				],
			},
		},
		{
			type: 'Text',
			content:
				'This could explain why the same CEOs who are always on are also more likely to trust their gut instinct. Perhaps they aren’t guessing – they just have all the evidence at their fingertips to make decisions quickly.',
		},
		{
			type: 'Figures',
			content: {
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
			},
		},
		{
			type: 'BarChart',
			content: {
				title: 'CEOs who check their data before going to bed',
				items: [
					{ label: '25-34', value: '26%', width: '100%' },
					{ label: '35-44', value: '18%', width: '60%' },
					{ label: '45-54', value: '7%', width: '20%' },
					{ label: '55+', value: '0%', width: '0%' },
				],
			},
		},
	],
	insight: {
		layout: 1,
		body:
			'Get an extra 7 hours of creativity a week by keeping your phone out of the bedroom. Using digital devices last thing at night means it can take an hour longer to fall asleep.',
		imagePath: insightImagePath,
		title: 'Perform better in bed',
	},
};

stories.add('example content', () => {
	return <Chapter {...storyProps} />;
});
