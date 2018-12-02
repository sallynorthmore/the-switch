import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { FaArrowDown } from 'react-icons/fa';
// import { FooterComponent, Inner, Anchor } from './styles';

class Footer extends Component {
	state = {
		isVisible: true,
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	// Hide arrow
	handleScroll = () => {
		this.setState({
			isVisible: false,
		});
	};

	render() {
		const { handleClick } = this.props;
		const { isVisible } = this.state;

		return (
			<footer onClick={handleClick}>
				{isVisible && (
					<div>
						<div>{/*
							<FaArrowDown />
*/}</div>
					</div>
				)}
			</footer>
		);
	}
}

Footer.propTypes = {
	anchor: PropTypes.string,
	handleClick: PropTypes.func,
};

export default Footer;
