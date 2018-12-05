import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

const stories = storiesOf('Button', module);

stories.add('default', () => {
	return (
		<div style={{ padding: 50 }}>
			<Button text="Button text" />
		</div>
	);
});
