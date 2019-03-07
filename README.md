# Github Search Tool

[![|](./client/src/assets/images/githubsmall.png)]()

- This a application built using Grapql, Apollo client, React, Styled Components and a Node API servering up a Graphql endpoint. This Endpoint hits github's api and return a list of repositories associated to the queried user or organization. Additionally, the new React integrations of hooks was used for a majority of the components built in this application.

## Hosted App

- Check out the app at [this link](https://githubsearchtool.herokuapp.com)

## System Requirements

- Node.js >= v11.4.0
- Yarn Package Manager

## Getting Started

- Clone or download this [GitHub repository](https://github.com/tynose/github-search-tool)

- Ensure you have [Yarn installed](https://yarnpkg.com/lang/en/docs/install), then install all of the package dependencies for the project:

```
yarn run init
```

- Start the local development server:

```
yarn run dev
```

## Graphql Schema

- Due to the sheer amount of data returned by the github api, graphql was used to only return pertinent data to the apollo client by adding or removing fields within the query.

- When running on your local machine you can visit the 'localhost:8080/grapqhl' endpoint to look at the graphiql tool to further understand how queries are made to the local node api.

```sh
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
```

You can learn more about Graphql within their [official documentation](https://graphql.org/).

## Custom useInput Hook

```sh
const useInput = ({ initialValue }) => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue(''),
		handleChange: {
			value,
			onChange: ({ target }) => {
				setValue(target.value);
			}
		}
	};
};
```

- If using this hook within a form or any other component that requires an input, import the hook and destructure it with new key value pairs, and pass it an initial value:

```sh
const {
  value: valueSearch,
  handleChange: handleChangeSearch,
  reset
} = useInput({
  initialValue: ''
});
```

- Then when using the hook, pass the react element the handleChange props:

```sh
<input
  type='search'
  name='search'
  placeholder='search'
  {...handleChangeSearch}
/>
```

You can learn more about React hooks within their [official documentation](https://reactjs.org/docs/hooks-intro.html).
