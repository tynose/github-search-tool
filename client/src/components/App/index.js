import React, { useReducer } from 'react';
import styled from 'styled-components';
import NavigationBar from '../NavigationBar';
import Repositories from '../Repositories';
import { flexCenter } from '../../utils/styles/mixin';
import { Route, Switch } from 'react-router-dom';
export const SearchContext = React.createContext();

const initialState = {
	search: '',
	submited: false
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'submited': {
			return {
				...state,
				search: payload.search,
				submited: payload.submited
			};
		}
		default: {
			return state;
		}
	}
};

const Container = styled.div`
	width: 100vw;
	${flexCenter}
`;

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<SearchContext.Provider value={{ state, dispatch }}>
			<NavigationBar />
			<Switch>
				<Route exact path={'/'} render={() => <Repositories />} />
				<Route exact path={'/:user'} render={() => <Repositories />} />
			</Switch>
			<Container />
		</SearchContext.Provider>
	);
};

export default App;
