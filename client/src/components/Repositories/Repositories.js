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
import { flexCenter } from '../../utils/styles/mixin';
import { url } from '../../utils/constants/api';

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

const Container = styled.div`
	width: 100%;
	${flexCenter}
`;

const Button = styled.button`
	padding: 10px;
	background-color: transparent;
	&:hover {
		color: ${props => props.theme.colors.royalblue};
	}
`;

const Repositories = () => {
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
					variables={{
						user: url(`${search}`)
					}}
					fetchPolicy='network-only'>
					{({ data, loading, error, refetch }) => {
						console.log(url(`${search}`));

						return loading ? (
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
								<Container>
									<Button
										onClick={() =>
											refetch({
												user: data.user.prev.url
											})
										}
										disabled={data.user.prev === null}>
										prev
									</Button>
									<Button
										onClick={() =>
											refetch({
												user: data.user.next.url
											})
										}
										disabled={data.user.next === null}>
										next
									</Button>
								</Container>
							</RepositoryList>
						);
					}}
				</Query>
			)}
		</Section>
	);
};

export default withRouter(Repositories);
