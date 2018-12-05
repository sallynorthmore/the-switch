import React from 'react';
import PropTypes from 'prop-types';
import { Close } from 'components/Icons';
import './styles.css';

export const TOOLTIP_TRANSITION_TOP = 'TOOLTIP_TRANSITION_TOP';
export const TOOLTIP_TRANSITION_BOTTOM = 'TOOLTIP_TRANSITION_BOTTOM';

export const renderCloseIcon = () => {
	return (
		<span className="Tooltip-closeIcon">
			<Close width={14} />
		</span>
	);
};

const Tooltip = ({ title, copy, isVisible, appearFrom, onClose, theme }) => {
	let className =
		appearFrom === TOOLTIP_TRANSITION_TOP
			? 'Tooltip Tooltip-tooltipHiddenTop'
			: 'Tooltip Tooltip-tooltipHiddenBottom';

	if (isVisible) {
		className = 'Tooltip';
	}

	if (theme) {
		className = `${className} ${theme}`;
	}

	return (
		<div className={className} onClick={onClose}>
			{onClose && renderCloseIcon()}
			{title && <div className="Tooltip-title">{title}</div>}
			{copy && (
				<div
					className="Tooltip-copy"
					dangerouslySetInnerHTML={{ __html: copy }}
				/>
			)}
		</div>
	);
};

Tooltip.defaultProps = {
	title: null,
	copy: null,
	appearFrom: TOOLTIP_TRANSITION_TOP,
	isVisible: false,
	onClose: null,
	theme: null,
};

Tooltip.propTypes = {
	title: PropTypes.string,
	copy: PropTypes.string,
	appearFrom: PropTypes.oneOf([
		TOOLTIP_TRANSITION_TOP,
		TOOLTIP_TRANSITION_BOTTOM,
	]),
	isVisible: PropTypes.bool,
	onClose: PropTypes.func,
	theme: PropTypes.string,
};

export default Tooltip;
