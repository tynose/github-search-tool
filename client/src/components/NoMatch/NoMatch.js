import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../utils/styles/mixin';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 100px);
	${flexCenter}
`;

const NoMatch = ({ children }) => {
	return <Container>{children}</Container>;
};

export default NoMatch;
