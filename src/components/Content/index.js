import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const HTMLContent = ({ content, className }) => (
	<div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content }) => (
	<div className={styles.content}>{content}</div>
);

Content.propTypes = {
	content: PropTypes.node,
	className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
