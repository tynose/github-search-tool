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
			resolve: data => data.url
		},
		language: {
			type: GraphQLString,
			resolve: data => data.language
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
					`https://api.github.com/users/${args.user}/repos`
				);
				return response.json();
			}
		}
	})
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
