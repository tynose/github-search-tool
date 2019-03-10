export function url(query) {
	return (
		`https://api.github.com/users/${query}/repos?page=1&per_page=10&access_token=${
			process.env.REACT_APP_ACCESS_TOKEN
		}` ||
		`https://api.github.com/orgs/${query}/repos?page=1&per_page=10&access_token=${
			process.env.REACT_APP_ACCESS_TOKEN
		}`
	);
}
