const graphql = require('graphql');
const fetch = require('node-fetch');

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID
} = graphql;

// const RepositoryType = new GraphQLObjectType({
// 	name: 'Repository',
// 	fields: () => ({
// 		id: {
// 			type: GraphQLID,
// 			resolve: data => data[0].id
// 		},
// 		user: {
// 			type: GraphQLString,
// 			resolve: data => data[0].owner.login
// 		},
// 		url: {
// 			type: GraphQLString,
// 			resolve: data => data[0].url
// 		},
// 		language: {
// 			type: GraphQLString,
// 			resolve: data => data[0].language
// 		},
// 		watchers: {
// 			type: GraphQLInt,
// 			resolve: data => data[0].watchers
// 		}
// 	})
// });

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {
			type: GraphQLID,
			resolve: data => data[0].id
		},
		user: {
			type: GraphQLString,
			resolve: data => data[0].owner.login
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
