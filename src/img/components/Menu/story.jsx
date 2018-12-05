import React from 'react';
import { Router } from 'react-static';
import { storiesOf } from '@storybook/react';
import Menu from './index';

const stories = storiesOf('Menu', module);

stories
	.addDecorator(menu => <Router>{menu()}</Router>)
	.add('default', () => {
		return <Menu />;
	});