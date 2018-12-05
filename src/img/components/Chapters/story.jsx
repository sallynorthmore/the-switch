import React from 'react';
import { Router } from 'react-static';
import { storiesOf } from '@storybook/react';
import insightImagePath from '../../../public/images/chapters/1@2x.png';

import Chapters from './index';

const stories = storiesOf('Chapters', module);

const storyProps = [
	{
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
				type: 'Figures',
				content: {
					color: 'rgb(0, 173, 181)',
					caption: 'When are CEOs checking their business data?',
					items: [
						{
							title: '23%',
							description: 'At lunch',
						},
						{
							title: '19%',
							description: 'As soon as they wake up',
						},
						{
							title: '17%',
							description: 'Before going to bed',
						},
					],
				},
			},
			{
				type: 'Text',
				content:
					'Over a quarter of CEOs aged 25-34 check their business’ data as soon as they wake up and before they go to bed, compared to just 7% of those aged 45+.',
			},
			{
				type: 'BarChart',
				content: {
					caption: 'CEOs who check their data before going to bed',
					items: [
						{ label: '25-34', value: '26%', width: '100%' },
						{ label: '35-44', value: '18%', width: '60%' },
						{ label: '45-54', value: '7%', width: '20%' },
						{ label: '55+', value: '0%', width: '0%' },
					],
				},
			},
			{
				type: 'Text',
				content:
					'Does that mean older counterparts have a better work-life balance though, being more likely to wait until they are in the office to get going?',
			},
		],
		insight: {
			title: 'Perform better in bed',
			body:
				'Get an extra 7 hours of creativity a week by keeping your phone out of the bedroom. Using digital devices last thing at night means it can take an hour longer to fall asleep.',
			imagePath: insightImagePath,
		},
	},
	{
		theme: '#1E93A6',
		chapter: 'two',
		slug: 'devices',
		title: 'Devices set you free',
		content: [
			{
				type: 'Text',
				content:
					'Technology is changing how CEOs monitor business performance. We’re not fully mobile yet.',
			},
			{
				type: 'ScrollBubbles',
				isDiamond: true,
				title: 'Primary method of assessing and reviewing data',
				content: {
					items: [
						{
							value: '50%',
							label: 'Desktop',
							radius: 70,
							caption: 'Half of bosses still prefer to use desktop.',
						},
						{
							value: '10%',
							label: 'Smartphone',
							radius: 30,
							caption: 'While only a few use their smartphones.',
						},
					],
				},
			},

			{
				type: 'Text',
				content:
					'Yet a significant percentage now grab a smartphone or tablet when they want an update, with nearly a quarter of 25-34 year olds choosing devices over desktop, in-person briefings or printed reports.',
			},
			{
				type: 'BarChart',
				content: {
					caption:
						'Usage of smartphone and tablet as primary method of assessing and reviewing data across business',
					items: [
						{ label: '25-34', value: '23%', width: '100%' },
						{ label: '35-44', value: '19%', width: '55%' },
						{ label: '45-54', value: '16%', width: '45%' },
						{ label: '55+', value: '12%', width: '35%' },
					],
				},
			},
			{
				type: 'Text',
				content:
					'Interestingly, the over 55s are least likely to use the traditional desktop, perhaps trusting face-to-face more.',
			},
		],
		insight: {
			title: 'Emails can’t replace humans',
			body:
				'You’ll never learn everything from your inbox – some things only become clear face-to-face. This is even more important in the workplace where studies have shown that up to 90% of communication is body-language. Don’t get trapped behind a desk.',
			imagePath: insightImagePath,
		},
	},
];

stories
	.addDecorator(story => <Router>{story()}</Router>)
	.add('example of 2', () => {
		return <Chapters chapters={storyProps} />;
	});
