import React from 'react';
import { storiesOf } from '@storybook/react';
import Chrome from './index';
const stories = storiesOf('Chrome', module);

stories.add('default', () => {
	return <Chrome>Children</Chrome>;
});
