import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import { GlobalStyles } from '../utils/styles/globalStyles';
import theme from '../utils/styles/theme';

const client = new ApolloClient({
	uri: '/graphql'
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<Router>
				<Fragment>
					<GlobalStyles />
					<App />
				</Fragment>
			</Router>
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById('root')
);
