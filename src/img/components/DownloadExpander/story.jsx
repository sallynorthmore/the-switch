import React from 'react';
import { storiesOf } from '@storybook/react';
//import { text } from '@storybook/addon-knobs';
import DownloadExpander from './index';

const stories = storiesOf('DownloadExpander', module);
//stories.addDecorator(withKnobs);

stories.add('default', () => {
	return <DownloadExpander />;
});
