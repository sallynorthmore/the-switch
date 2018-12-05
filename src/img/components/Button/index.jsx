import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Button({ text, onClick }) {
	return (
		<button className="Button" onClick={onClick}>
			<span className="Button-text">{text}</span>
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	onClick: () => {},
};

export default Button;
