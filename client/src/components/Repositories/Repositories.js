import React, { useContext } from 'react';
import { GET_REPOS_QUERY } from '../../utils/queries';
import { Query } from 'react-apollo';
import { SearchContext } from '../App';
import styled from 'styled-components';
import Loader from '../Loader';
import RepositoryItem from './RepositoryItem';
import RepositoryList from './RepositoryList';
import NoMatch from '../NoMatch';

const Section = styled.section`
	width: 100%;
	margin-top: 60px;
	display: flex;
`;

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 30px;
	padding: 10px;
`;

const Repositories = () => {
	const { submited, search } = useContext(SearchContext).state;

	return (
		<Section>
			{!submited ? (
				<RepositoryList>
					<NoMatch>
						<h3>Search for a user to view their repositories</h3>
					</NoMatch>
				</RepositoryList>
			) : (
				<Query
					query={GET_REPOS_QUERY}
					variables={{ user: search }}
					fetchPolicy='network-only'>
					{({ data, loading, error }) => {
						const { user } = data;
						return loading ? (
							<RepositoryList>
								<Loader />
							</RepositoryList>
						) : error ? (
							<RepositoryList>
								<NoMatch>
									<h3>Ooops... It looks like there are no users</h3>
								</NoMatch>
							</RepositoryList>
						) : (
							<RepositoryList {...user}>
								<h3>Repositories</h3>
								<List>
									{user.repositories.map(props => (
										<RepositoryItem key={props.id} {...props} />
									))}
								</List>
							</RepositoryList>
						);
					}}
				</Query>
			)}
		</Section>
	);
};

export default Repositories;
