import { gql } from 'apollo-boost';

const GET_REPOS_QUERY = gql`
	query($user: String) {
		user(user: $user) {
			user
			id
			avatar
			account
			repositories {
				url
				id
				name
				language
				watchers
				stars
				description
			}
		}
	}
`;

export { GET_REPOS_QUERY };
