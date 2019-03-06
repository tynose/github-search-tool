import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	color: ${props => props.theme.colors.royalblue};
	text-decoration: none;
	padding: 10px 0;
`;

const Link = ({ children, ...others }) => (
	<StyledLink {...others} target='_blank'>
		{children}
	</StyledLink>
);

export default Link;
