export function url(query) {
	return (
		`https://api.github.com/users/${query}/repos?page=1&per_page=10&access_token=
		}` ||
		`https://api.github.com/orgs/${query}/repos?page=1&per_page=10&access_token=`
	);
}
