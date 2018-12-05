import React from 'react';
import { storiesOf } from '@storybook/react';
//import { text } from '@storybook/addon-knobs';
import Sharing from './index';

const stories = storiesOf('Sharing', module);
//stories.addDecorator(withKnobs);

stories.add('default', () => {
	return <Sharing />;
});
