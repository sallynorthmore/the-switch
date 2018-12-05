import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Tooltip from './index';

const stories = storiesOf('Tooltip', module);

const storyProps = {
	title: text('Title', 'Tooltip title'),
	copy: text('Copy', 'Tooltip copy'),
	isVisible: boolean('Is visible? ', true),
	onClose: () => {},
	theme: null,
};

stories.add('Tooltip', () => {
	return <Tooltip {...storyProps} />;
});
