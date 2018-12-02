import styled from 'styled-components';
import { Link } from 'gatsby';

export const BannerComponent = styled.header`
	background: rgba(255, 255, 255, 0.8);
	display: flex;
	justify-content: space-between;
	left: 0;
	padding: 4vw 4vw 2vw;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
`;

export const Title = styled.div`
	color: rgb(34, 34, 34);
	font-size: 13px;
	font-weight: 900;
	letter-spacing: 0.1em;
	line-height: 1.3;
	text-transform: uppercase;

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Contact = styled(Link)`
	color: rgb(34, 34, 34);
	display: inline-block;
	font-size: 13px;
	font-weight: 900;
	letter-spacing: 0.1em;
	line-height: 1.3;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
