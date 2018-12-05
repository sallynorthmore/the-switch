import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Eight from './Eight';
import Eleven from './Eleven';
import Five from './Five';
import Four from './Four';
import Nine from './Nine';
import One from './One';
import Seven from './Seven';
import Six from './Six';
import Ten from './Ten';
import Three from './Three';
import Twelve from './Twelve';
import Two from './Two';
import Zero from './Zero';

class ChapterNumber extends Component {
	components = {
		zero: Zero,
		one: One,
		two: Two,
		three: Three,
		four: Four,
		five: Five,
		six: Six,
		seven: Seven,
		eight: Eight,
		nine: Nine,
		ten: Ten,
		eleven: Eleven,
		twelve: Twelve,
	};

	render() {
		const { number, color, height } = this.props;

		const TagName = this.components[number || 'zero'];
		return <TagName height={height} fill={color} />;
	}
}

ChapterNumber.propTypes = {
	number: PropTypes.string,
	color: PropTypes.string,
	height: PropTypes.number,
};

ChapterNumber.defaultProps = {
	height: 84,
};

export default ChapterNumber;
