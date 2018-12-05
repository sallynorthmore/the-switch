import React from 'react';
// import { Link } from 'gatsby';
import classNames from 'classnames';
import Banner from '../Banner';
import Footer from '../Footer';
import styles from './styles.module.css';
// import logo from '../img/logo.svg'

const Chrome = ({ children, isBlogPage }) => (
	<div className={styles.chrome}>
		<div
			className={classNames({
				[styles.banner]: true,
				[styles.isSmaller]: isBlogPage,
			})}
		>
			<Banner />
		</div>
		<div className={styles.inner}>{children}</div>
		<Footer />
	</div>
);

export default Chrome;
