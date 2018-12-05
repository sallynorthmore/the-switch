import React from 'react';
import { storiesOf } from '@storybook/react';
//import { text } from '@storybook/addon-knobs';
import Meta from './index';

const stories = storiesOf('Meta', module);
//stories.addDecorator(withKnobs);

stories.add(
    'default',
    () => {
        return <Meta />;
    });
