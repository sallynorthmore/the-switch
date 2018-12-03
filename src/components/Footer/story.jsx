import React from 'react';
import { storiesOf } from '@storybook/react';
//import { text } from '@storybook/addon-knobs';
import Footer from './index';

const stories = storiesOf('Footer', module);
//stories.addDecorator(withKnobs);

stories.add(
    'default',
    () => {
        return <Footer />;
    });
