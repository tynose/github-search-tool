import React from 'react';
import styled from 'styled-components';
import { getReposQuery } from '../../utils/queries';
import { graphql } from 'react-apollo';
import NavigationBar from '../NavigationBar';
import { flexCenter } from '../../utils/styles/mixin';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	${flexCenter}
`;

const App = props => {
	console.log(props);

	return (
		<Container>
			<NavigationBar />
		</Container>
	);
};

export default graphql(getReposQuery, {
	options: props => {
		return {
			variables: {
				user: 'tynose'
			}
		};
	}
})(App);
