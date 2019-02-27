import React from 'react';
import { storiesOf } from '@storybook/react';
//import { text } from '@storybook/addon-knobs';
import BottleAnimation from './index';

const stories = storiesOf('BottleAnimation', module);
//stories.addDecorator(withKnobs);

stories.add(
    'default',
    () => {
        return <BottleAnimation />;
    });
