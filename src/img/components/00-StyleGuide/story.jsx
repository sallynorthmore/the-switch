import React from 'react';
import { storiesOf } from '@storybook/react';
import StyleGuide from './index';

const stories = storiesOf('StyleGuide', module);

stories.add('Colours and Typography', () => {
	return <StyleGuide />;
});
