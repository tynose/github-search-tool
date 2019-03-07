const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

// setup for static folder/files

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// listening to server

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}/graphql`);
});
