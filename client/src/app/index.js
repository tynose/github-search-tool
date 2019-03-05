import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import { GlobalStyles } from '../utils/styles/globalStyles';
import theme from '../utils/styles/theme';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Fragment>
			<GlobalStyles />
			<App />
		</Fragment>
	</ThemeProvider>,
	document.getElementById('root')
);
