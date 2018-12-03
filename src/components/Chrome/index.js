import React from 'react';
// import { Link } from 'gatsby';
import styles from './styles.module.css';
import Banner from '../Banner';
import Footer from '../Footer';
// import logo from '../img/logo.svg'

const Chrome = ({ children }) => (
	<div className={styles.chrome}>
		<Banner />
		<div className={styles.inner}>{children}</div>
		<Footer />
	</div>
);

export default Chrome;
