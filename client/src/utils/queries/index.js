import { gql } from 'apollo-boost';

const GET_REPOS_QUERY = gql`
	query($user: String) {
		user(user: $user) {
			user
			id
			avatar
			account
			next {
				url
				page
				rel
			}
			prev {
				url
				page
				rel
			}
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
