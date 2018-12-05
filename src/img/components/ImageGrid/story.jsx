import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageGrid from './index';

const stories = storiesOf('ImageGrid', module);

stories.add('default', () => {
	return <ImageGrid copy={['text 1', 'text 2', 'text 3', 'text4']} />;
});
