import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../utils/styles/mixin';
import Icon from '../Icon';
import media from '../../utils/styles/media';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 100px);
	${flexCenter}
	flex-direction: column;
	text-align: center;
	${media.phone`
		* {
			font-size: 1.2rem;
		}
  `}
`;

const StyledIcon = styled(Icon)`
	width: 300px;
	height: 300px;
	margin-bottom: 50px;
	${media.phone`
		width: 200px;
		height: 200px;
  `}
`;

const NoMatch = ({ children }) => {
	return (
		<Container>
			<StyledIcon icon={'octocat'} />
			{children}
		</Container>
	);
};

export default NoMatch;
