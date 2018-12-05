import React from 'react';
import { Router } from 'react-static';
import { storiesOf } from '@storybook/react';
import MobileMenu from './index';

const stories = storiesOf('Menu', module);

stories
	.addDecorator(menu => <Router>{menu()}</Router>)
	.add('mobile', () => {
		return <MobileMenu />;
	});