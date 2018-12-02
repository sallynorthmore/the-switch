import React from 'react';
import PropTypes from 'prop-types';
// import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Chrome from '../components/Chrome';
import Content, { HTMLContent } from '../components/Content';
import styles from './blog.module.css';

export const BlogPostTemplate = ({
	content,
	contentComponent,
	description,
	tags,
	title,
	helmet,
}) => {
	const PostContent = contentComponent || Content;

	return (
		<section className={styles.content}>
			{helmet || ''}
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.description}>{description}</p>
			<PostContent content={content} />
			{/*
            {tags && tags.length ? (
								<div style={{ marginTop: `4rem` }}>
									<h4>Tags</h4>
									<ul className="taglist">
										{tags.map(tag => (
											<li key={tag + `tag`}>
												<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
											</li>
										))}
									</ul>
								</div>
							) : null}
              */}
		</section>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Chrome>
			<Helmet title="Sally Northmore" />
			<BlogPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Blog">
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name="description"
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
			/>
		</Chrome>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
			}
		}
	}
`;
