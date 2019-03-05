import React, { useReducer } from 'react';
import styled from 'styled-components';
import { getReposQuery } from '../../utils/queries';
import { graphql } from 'react-apollo';
import NavigationBar from '../NavigationBar';
import { flexCenter } from '../../utils/styles/mixin';
const Context = React.createContext();

const appReducer = (state, { type, payload }) => {
	switch (type) {
		case 'value': {
			return state.map(value => {
				return {
					value
				};
			});
		}
		default: {
			return state;
		}
	}
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	${flexCenter}
`;

const App = props => {
	const [state, dispatch] = useReducer(appReducer, []);
	console.log(props);

	return (
		<Context.Provider value={dispatch}>
			<Container>
				<NavigationBar />
				{state.map(repo => repo)}
			</Container>
		</Context.Provider>
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
