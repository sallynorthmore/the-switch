import React from 'react';
import { Link } from 'gatsby';
// import logo from '../img/logo.svg'
import { BannerComponent, Title, Contact } from './styles';

const Banner = () => (
	<BannerComponent>
		<Title>
			<Link to="/">Sally Northmore</Link>
		</Title>
		<Contact to="/contact">Contact</Contact>
	</BannerComponent>
);

export default Banner;
