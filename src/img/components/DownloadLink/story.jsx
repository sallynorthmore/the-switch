import React from 'react';
import { storiesOf } from '@storybook/react';
//import { text } from '@storybook/addon-knobs';
import DownloadLink from './index';

const stories = storiesOf('DownloadLink', module);
//stories.addDecorator(withKnobs);

stories
	.add('default', () => {
		return <DownloadLink />;
	})
	.add('no icon', () => {
		return <DownloadLink noIcon />;
	});
