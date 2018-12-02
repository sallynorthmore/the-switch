import React from 'react';
import { Link } from 'gatsby';
import styles from './styles.module.css';
// import logo from '../img/logo.svg'

const Banner = () => (
	<header role="banner" className={styles.banner}>
		<h1>
			<Link className={styles.title} to="/">
				The Switch
			</Link>
		</h1>
		<p className={styles.tagline}>
			Chronocling an attempt to live plastic-free
		</p>
	</header>
);

export default Banner;