import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element, scroller } from 'react-scroll';
import Grid from '../Grid';
import Message from '../Message';
import Footer from '../Footer';
// import { HomeComponent, Headline, Title, Projects } from './styles';
// import {} from './styles';

class Home extends Component {
	state = {
		isContact: false,
		contactName: '',
	};

	componentDidMount = () => {
		if (this.props.contactState) {
			this.setState({
				isContact: this.props.contactState.isContact,
				contactName: this.props.contactState.contactName,
			});
		}
	};

	componentWillUnmount() {
		if (this.state.isContact) {
			this.setState({
				isContact: false,
				contactName: '',
			});
		}
	}

	scrollTo = () => {
		scroller.scrollTo('scroll-to-element', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
		});
	};

	render() {
		const { projects } = this.props;
		const { isContact, contactName } = this.state;

		const messageText = isContact
			? `Thanks for your message, ${contactName}`
			: null;

		return (
			<div>
				{messageText && <Message message={messageText} />}

				<div>
					<span>
						I&rsquo;m a freelance frontend web developer living and working in
						London
					</span>
				</div>

				<div name="scroll-to-element">
					<div
						ref={section => {
							this.Projects = section;
						}}
					>
						<h2>Some things I&rsquo;ve built</h2>

						<Grid items={projects} />
					</div>
				</div>

				<Footer to="scroll-to-element" handleClick={this.scrollTo} />
			</div>
		);
	}
}

Home.propTypes = {
	projects: PropTypes.array,
	contactState: PropTypes.object,
};

export default Home;
