import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// // import Layout from '../components/Layout'
// import Features from '../components/Features'
// import Testimonials from '../components/Testimonials'
// import Pricing from '../components/Pricing'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPageTemplate = ({
	image,
	title,
	heading,
	description,
	intro,
	main,
	testimonials,
	fullImage,
	pricing,
}) => <section className="section section--gradient" />;

const ProductPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<div>
			<ProductPageTemplate />
		</div>
	);
};

ProductPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default ProductPage;
