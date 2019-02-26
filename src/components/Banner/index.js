import React from 'react';
import { Link } from 'gatsby';
import BottleAnimation from '../BottleAnimation';
import styles from './styles.module.css';

const Banner = () => (
	<header role="banner" className={styles.banner}>
		<h1>
			<Link className={styles.title} to="/">
				The Sw
				<span>
					<BottleAnimation />
				</span>
				tch
			</Link>
		</h1>
		<p className={styles.tagline}>
			Chronocling an attempt to live plastic-free
		</p>
	</header>
);

export default Banner;
