import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
	height: 100%;
	width: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const Svg = ({ src, ...others }) => {
	const parseSource = src => {
		return { __html: src };
	};
	return <Wrapper dangerouslySetInnerHTML={parseSource(src)} {...others} />;
};

Svg.propTypes = {
	src: PropTypes.string.isRequired
};

export default Svg;
