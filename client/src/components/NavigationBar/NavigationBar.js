import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import SearchBar from '../SearchBar';

const Container = styled.nav`
	width: 100%;
	padding: 10px 16px;
	background-color: ${props => props.theme.colors.darkslategray};
	position: fixed;
	top: 0;
	z-index: 10;
	display: flex;
	align-items: center;
`;

const StyledIcon = styled(Icon)`
	width: 28px;
	height: 28px;
`;

const NavigationBar = () => (
	<Container>
		<StyledIcon icon={'github'} />
		<SearchBar />
	</Container>
);

export default NavigationBar;
