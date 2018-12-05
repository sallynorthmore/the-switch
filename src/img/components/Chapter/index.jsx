import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomize from 'randomatic';
import classNames from 'classnames';
import Sharing from 'components/Sharing';
import BarChart from 'components/BarChart';
import BumpChart from 'components/BumpChart';
import ChapterNumber from 'components/ChapterNumber';
import Figures from 'components/Figures';
import ImageGrid from 'components/ImageGrid';
import ScrollingStats from 'components/ScrollingStats';
import './styles.css';

class Chapter extends Component {
	render() {
		const {
			chapter,
			content,
			insight,
			slug,
			title,
			theme,
			sharingPostUrl,
			sharingPostCopy,
			sharingHashTags,
		} = this.props;
		const isAltLayout = insight.altLayout === 1;

		return (
			<div className="Chapter">
				<header className="Chapter-header">
					<h1 className="Chapter-title">{title}</h1>
					<div className="Chapter-number" style={{ color: `${theme}` }}>
						<ChapterNumber number={chapter} />
					</div>
				</header>

				{content && (
					<div className="Chapter-content">
						{/* eslint-disable consistent-return */}
						{content.map((item, i) => {
							const c = content[i];
							const type = c.type;
							const data = c.content;
							const k = randomize('*', 10);

							switch (type) {
								case 'ImageGrid':
									return (
										<div key={k} className="Chapter-imageGrid">
											<ImageGrid {...data} />
										</div>
									);
								case 'ScrollingStats':
									return (
										<div key={k} className="Chapter-scrollChart">
											<ScrollingStats
												isDiamond={c.isDiamond}
												title={c.title}
												{...data}
											/>
										</div>
									);
								case 'BarChart':
									return (
										<div key={k} className="Chapter-barChart">
											<BarChart {...data} />
										</div>
									);
								case 'Figures':
									return (
										<div key={k} className="Chapter-figures">
											<Figures {...data} color={theme} />
										</div>
									);
								case 'BumpChart':
									return (
										<div key={k} className="Chapter-bumpChart">
											<BumpChart {...data} />
										</div>
									);
								case 'Text':
									return (
										<p key={k} className="Chapter-body">
											{data}
										</p>
									);
								default:
									break;
							}
						})}
					</div>
				)}

				<div
					className={classNames({
						['Chapter-insight']: true,
						['Chapter--insightAlternate']: isAltLayout,
					})}
					style={{ background: `${theme}` }}
				>
					<div className="Chapter-share">
						<Sharing
							slug={slug}
							title={title}
							sharingUrl={sharingPostUrl}
							tweetText={sharingPostCopy}
							tweetHashTags={sharingHashTags}
						/>
					</div>

					<div className="Chapter-insightInner">
						{isAltLayout && (
							<h2 className="Chapter-insightTitle">{insight.title}</h2>
						)}
						<img src={insight.imagePath} className="Chapter-insightImage" />
						<div className="Chapter-insightContent">
							<h2 className="Chapter-insightTitle">{insight.title}</h2>
							<div className="Chapter-insightBody">
								{insight.body && (
									<p dangerouslySetInnerHTML={{ __html: insight.body }} />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Chapter.propTypes = {
	slug: PropTypes.string,
	chapter: PropTypes.string,
	content: PropTypes.array,
	insight: PropTypes.object,
	sharingHashTags: PropTypes.string,
	sharingPostUrl: PropTypes.string,
	sharingPostCopy: PropTypes.string,
	theme: PropTypes.string,
	title: PropTypes.string,
};

export default Chapter;
