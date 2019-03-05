import React, { useReducer } from 'react';
import styled from 'styled-components';
import { getReposQuery } from '../../utils/queries';
import { graphql } from 'react-apollo';
import NavigationBar from '../NavigationBar';
import { flexCenter } from '../../utils/styles/mixin';
export const SearchContext = React.createContext();

const initialState = {
	search: '',
	repositories: []
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'search': {
			return {
				...state,
				search: payload
			};
		}
		case 'repo': {
			return {
				...state,
				repositories: payload
			};
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
	const [state, dispatch] = useReducer(reducer, initialState);

	console.log(state);
	console.log(props);

	return (
		<SearchContext.Provider value={dispatch}>
			<Container>
				<NavigationBar />
			</Container>
		</SearchContext.Provider>
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
