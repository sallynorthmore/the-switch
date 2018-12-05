import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classes from './styles.css';

const getCSSTransitionProps = () => {
	return {
		classNames: {
			appear: classes.appear,
			appearActive: classes.appearActive,
			enter: classes.enter,
			enterActive: classes.enterActive,
			exit: classes.exit,
			exitActive: classes.exitActive,
		},
	};
};

/* eslint-disable no-console, no-unused-vars */
const getJSTransitionProps = () => {
	return {
		onEnter: () => console.log('onEnter'),
		onEntering: () => console.log('onEntering'),
		onEntered: () => console.log('onEntered'),
		onExit: () => console.log('onExit'),
		onExiting: () => console.log('onExiting'),
		onExited: () => console.log('onExited'),
	};
};
/* eslint-enable */

// Helper component that can be used to add transitions between routes
export class RouteTransition extends React.Component {
	getTransitionDefaults() {
		const { pathname } = this.props.location;
		const duration = classes.transitionDuration.replace('ms', '');
		const timeout = parseFloat(duration);

		return {
			key: pathname,
			timeout,
			appear: true,
			mountOnEnter: true,
			unmountOnExit: true,
		};
	}

	getTransitionProps() {
		return Object.assign(
			this.getTransitionDefaults(),
			getCSSTransitionProps()

			// getJSTransitionProps()
		);
	}

	render() {
		const props = this.getTransitionProps();
		return (
			<TransitionGroup className={classes.transitionGroup} component="main">
				<CSSTransition {...props}>
					<div className={classes.transitionContainer}>
						{this.props.children}
					</div>
				</CSSTransition>
			</TransitionGroup>
		);
	}
}

RouteTransition.propTypes = {
	children: PropTypes.node.isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}).isRequired,
};
