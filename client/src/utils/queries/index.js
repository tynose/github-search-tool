import { gql } from 'apollo-boost';

const getReposQuery = gql`
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

export { getReposQuery };
