import React from 'react';
import PropTypes from 'prop-types';
import image1 from './image-01.svg';
import image2 from './image-02.svg';
import image3 from './image-03.svg';
import image4 from './image-04.svg';
import './styles.css';

function ImageGrid({ copy }) {
	return (
		<div className="ImageGrid">
			<div className="ImageGrid-item">
				<div>
					<img src={image1} alt={copy[0]} />
				</div>
				{copy[0] && copy[0]}
			</div>
			<div className="ImageGrid-item">
				<div>
					<img src={image2} alt={copy[1]} />
				</div>
				{copy[1] && copy[1]}
			</div>
			<div className="ImageGrid-item">
				<div>
					<img src={image3} alt={copy[2]} />
				</div>
				{copy[2] && copy[2]}
			</div>
			<div className="ImageGrid-item">
				<div>
					<img src={image4} alt={copy[3]} />
				</div>
				{copy[3] && copy[3]}
			</div>
		</div>
	);
}

ImageGrid.propTypes = {
	copy: PropTypes.array,
};

export default ImageGrid;
