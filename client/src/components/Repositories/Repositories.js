import React, { useContext } from 'react';
import { GET_REPOS_QUERY } from '../../utils/queries';
import { Query } from 'react-apollo';
import { SearchContext } from '../App';
import styled from 'styled-components';
import Loader from '../Loader';

const Section = styled.section``;

const Repositories = () => {
	const { submited, search } = useContext(SearchContext).state;

	return (
		<div>
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
							<p>sorry no user's</p>
						) : (
							<Section>
								<p>yay</p>
							</Section>
						);
					}}
				</Query>
			)}
		</div>
	);
};

export default Repositories;
