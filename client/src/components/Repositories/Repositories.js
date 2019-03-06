import React, { useContext, Fragment } from 'react';
import { GET_REPOS_QUERY } from '../../utils/queries';
import { Query } from 'react-apollo';
import { SearchContext } from '../App';
import styled from 'styled-components';
import Loader from '../Loader';
import RepositoryItem from './RepositoryItem';
import NoMatch from '../NoMatch';
import SideBar from '../SideBar';

const Section = styled.section`
	width: 100%;
	margin-top: 60px;
	display: flex;
`;

const Main = styled.main`
	width: calc(100% - 300px);
	min-height: 100vh;
	padding: 50px;
	background-color: ${props => props.theme.colors.ghostwhite};
`;

const Repositories = () => {
	const { submited, search } = useContext(SearchContext).state;

	return (
		<Section>
			{submited && (
				<Query
					query={GET_REPOS_QUERY}
					variables={{ user: search }}
					fetchPolicy='network-only'>
					{({ data, loading, error }) => {
						const { user } = data;
						return loading ? (
							<Loader />
						) : error ? (
							<NoMatch>
								<p>sorry no user's</p>
							</NoMatch>
						) : (
							<Fragment>
								<SideBar
									user={user.user}
									avatar={user.avatar}
									account={user.account}
								/>
								<Main>
									<ul>
										<h3>Repositories</h3>
										{user.repositories.map(props => (
											<RepositoryItem key={props.id} {...props} />
										))}
									</ul>
								</Main>
							</Fragment>
						);
					}}
				</Query>
			)}
		</Section>
	);
};

export default Repositories;
