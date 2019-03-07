const graphql = require('graphql');
const fetch = require('node-fetch');

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} = graphql;

const RepositoryType = new GraphQLObjectType({
	name: 'Repository',
	fields: () => ({
		id: {
			type: GraphQLInt,
			resolve: data => data.id
		},
		url: {
			type: GraphQLString,
			resolve: data => data.html_url
		},
		name: {
			type: GraphQLString,
			resolve: data => data.name
		},
		language: {
			type: GraphQLString,
			resolve: data => data.language
		},
		description: {
			type: GraphQLString,
			resolve: data => data.description
		},
		watchers: {
			type: GraphQLInt,
			resolve: data => data.watchers
		},
		stars: {
			type: GraphQLInt,
			resolve: data => data.stargazers_count
		}
	})
});

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {
			type: GraphQLInt,
			resolve: data => data[0].owner.id
		},
		user: { type: GraphQLString, resolve: data => data[0].owner.login },
		account: { type: GraphQLString, resolve: data => data[0].owner.html_url },
		avatar: { type: GraphQLString, resolve: data => data[0].owner.avatar_url },
		repositories: {
			type: new GraphQLList(RepositoryType),
			resolve: data => data.map(repo => repo)
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
		user: {
			type: UserType,
			args: {
				user: { type: GraphQLString }
			},
			resolve: async (root, args) => {
				const response = await fetch(
					`https://api.github.com/users/${
						args.user
					}/repos?page=1&per_page=10` ||
						`https://api.github.com/orgs/${args.user}/repos?page=1&per_page=10`
				);
				return response.json();
			}
		}
	})
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
