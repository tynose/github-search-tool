import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	color: ${props => props.theme.colors.royalblue};
	text-decoration: none;
	padding: 10px 0;
`;

const Link = ({ children, isExternal, ...others }) => (
	<StyledLink {...others} target={isExternal ? '_blank' : '_self'}>
		{children}
	</StyledLink>
);

Link.defaultProps = {
	isExternal: true
};

export default Link;
