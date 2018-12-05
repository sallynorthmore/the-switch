import React from 'react';
import { storiesOf } from '@storybook/react';
import ChapterNumber from '../ChapterNumber';

const stories = storiesOf('ChapterNumber', module);

const numbers = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
];

numbers.map(number => {
	return stories.add(number, () => {
		return <ChapterNumber number={number} />;
	});
});
