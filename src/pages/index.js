import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Chrome from '../components/Chrome';
import '../styles/css/global.css';
import styles from './styles.module.css';

export default class IndexPage extends Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<Chrome isHome>
				<section className={styles.posts}>
					{posts.map(({ node: post }) => (
						<div key={post.id} className={styles.post}>
							<Link className={styles.postLink} to={post.fields.slug}>
								<Img
									className={styles.postImage}
									sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
								/>
								<h2 className={styles.postTitle}>{post.frontmatter.title}</h2>
							</Link>

							<small className={styles.postDate}>{post.frontmatter.date}</small>

							<p className={styles.postBody}>{post.excerpt}</p>

							<Link className={styles.postLink} to={post.fields.slug}>
								Keep Reading →
							</Link>
						</div>
					))}
				</section>
			</Chrome>
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
					excerpt(pruneLength: 260)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date(formatString: "MMMM DD, YYYY")
						featuredImage {
							childImageSharp {
								sizes(maxWidth: 630) {
									...GatsbyImageSharpSizes
								}
							}
						}
					}
				}
			}
		}
	}
`;
