import { gql } from 'apollo-boost';

const GET_REPOS_QUERY = gql`
	query($user: String) {
		user(user: $user) {
			user
			id
			avatar
			repositories {
				url
				id
				language
				watchers
				stars
			}
		}
	}
`;

export { GET_REPOS_QUERY };
