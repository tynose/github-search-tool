import React from 'react';
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

export default Image;
