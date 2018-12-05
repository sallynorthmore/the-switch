import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import * as Icons from '../Icons';

const stories = storiesOf('Icons', module);

const storyProps = {
	fillColor: text('Icon fillColor', 'black'),
	width: number('Width', 24),
};

stories.add('All', () => {
	return (
		<div>
			{Object.keys(Icons).map((icon, i) => {
				const Icon = Icons[icon];

				return (
					<div
						key={i}
						style={{
							padding: '20px',
							display: 'inline-block',
							textAlign: 'center',
							margin: '20px 0 0 20px',
							width: '140px',
						}}
					>
						<Icon {...storyProps} />
						<h2
							style={{
								margin: '20px auto 0',
								font: '300 .8rem/1rem "Open Sans", sans-serif',
							}}
						>
							{icon}
						</h2>
					</div>
				);
			})}
		</div>
	);
});
