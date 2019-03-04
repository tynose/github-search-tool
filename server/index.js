const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}/graphql`);
});
