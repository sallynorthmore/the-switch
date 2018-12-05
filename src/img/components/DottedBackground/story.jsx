import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import DotsBackground from './index';

const stories = storiesOf('DotsBackground', module);
stories.addDecorator(withKnobs);

stories.add(
	'DotsBackground',
	withInfo('')(() => {
		return <DotsBackground />;
	})
);
