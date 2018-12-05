import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import NavButton from './index';

const stories = storiesOf('NavButton', module);

stories.add('Default', () => {
	return <NavButton isExpanded={boolean('Expand', false)} />;
});
