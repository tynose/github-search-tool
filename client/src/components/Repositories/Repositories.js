import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { GET_REPOS_QUERY } from '../../utils/queries';
import { Query } from 'react-apollo';
import { SearchContext } from '../App';
import styled from 'styled-components';
import Loader from '../Loader';
import RepositoryItem from './RepositoryItem';
import RepositoryList from './RepositoryList';
import NoMatch from '../NoMatch';
import media from '../../utils/styles/media';

const Section = styled.section`
	width: 100%;
	margin-top: 60px;
	display: flex;
	${media.tablet`
		flex-direction: column;
  `}
`;

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 30px;
	padding: 10px;
`;

const Repositories = props => {
	const { submited, search } = useContext(SearchContext).state;
	return (
		<Section>
			{!submited ? (
				<RepositoryList>
					<NoMatch>
						<h4>Search for a user to view their repositories</h4>
					</NoMatch>
				</RepositoryList>
			) : (
				<Query
					query={GET_REPOS_QUERY}
					variables={{ user: search }}
					fetchPolicy='network-only'>
					{({ data, loading, error }) =>
						loading ? (
							<RepositoryList>
								<Loader />
							</RepositoryList>
						) : error ? (
							<RepositoryList>
								<NoMatch>
									<h4>Ooops... It looks like there are no users</h4>
								</NoMatch>
							</RepositoryList>
						) : (
							<RepositoryList {...data.user}>
								<h3>Repositories</h3>
								<List>
									{data.user.repositories.map(props => (
										<RepositoryItem key={props.id} {...props} />
									))}
								</List>
							</RepositoryList>
						)
					}
				</Query>
			)}
		</Section>
	);
};

export default withRouter(Repositories);
