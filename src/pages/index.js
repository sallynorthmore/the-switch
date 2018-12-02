import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Banner from '../components/Banner';
import '../styles/css/global.css';

export default class IndexPage extends Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<div>
				<Banner />
				<section className="section">
					{posts.map(({ node: post }) => (
						<div key={post.id}>
							<h2>
								<Link to={post.fields.slug}>{post.frontmatter.title}</Link>

								<small>{post.frontmatter.date}</small>
							</h2>
							<p>{post.excerpt}</p>
							<Link to={post.fields.slug}>Keep Reading →</Link>
						</div>
					))}
				</section>
			</div>
		);
	}
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
};

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
		) {
			edges {
				node {
					excerpt(pruneLength: 400)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`;
