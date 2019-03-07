import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
	height: inherit;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	object-fit: cover;
	object-position: center;
`;

const Image = ({ src, alt, className, ...others }) => (
	<Img className={className} src={src} alt={alt} {...others} />
);

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};

export default Image;
