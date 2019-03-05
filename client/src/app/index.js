import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import { GlobalStyles } from '../utils/styles/globalStyles';
import theme from '../utils/styles/theme';

const client = new ApolloClient({
	uri: 'http://localhost:8080/graphql'
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<Fragment>
				<GlobalStyles />
				<App />
			</Fragment>
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById('root')
);
