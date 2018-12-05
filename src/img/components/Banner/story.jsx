import React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from './index';

const stories = storiesOf('Banner', module);

stories.add('default', () => {
	return <Banner />;
});
