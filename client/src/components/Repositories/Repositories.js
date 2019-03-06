import React, { useContext } from 'react';
import { GET_REPOS_QUERY } from '../../utils/queries';
import { Query } from 'react-apollo';
import { SearchContext } from '../App';
import styled from 'styled-components';
import Loader from '../Loader';
import RepositoryItem from './RepositoryItem';
import NoMatch from '../NoMatch';
import { flexCenter } from '../../utils/styles/mixin';

const Section = styled.section`
	width: 100vw;
	margin-top: 100px;
	${flexCenter};
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
						console.log(data);

						return loading ? (
							<Loader />
						) : error ? (
							<NoMatch>
								<p>sorry no user's</p>
							</NoMatch>
						) : (
							<div>
								<img src={data.user.avatar} />
								{data.user.repositories.map(props => (
									<RepositoryItem {...props} />
								))}
							</div>
						);
					}}
				</Query>
			)}
		</Section>
	);
};

export default Repositories;
