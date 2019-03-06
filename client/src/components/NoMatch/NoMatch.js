import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../utils/styles/mixin';
import Icon from '../Icon';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 100px);
	${flexCenter}
	flex-direction: column;
`;

const StyledIcon = styled(Icon)`
	width: 300px;
	height: 300px;
	margin-bottom: 50px;
`;

const NoMatch = () => {
	return (
		<Container>
			<StyledIcon icon={'octocat'} />
			<h3>Ooops... It looks like there are no users</h3>
		</Container>
	);
};

export default NoMatch;
