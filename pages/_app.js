import App, { Container } from 'next/app';
import Head from 'next/head';
import React, { Suspense } from 'react';
import { ApolloProvider } from 'react-apollo';
import Loading from './components/loading';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import withGraphql from './lib/withGraphql';

import theme from './styles/theme';

class CustomApp extends App {
	componentDidMount() {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps, apollo } = this.props;

		return (
			<Container>
				<Head>
					<title>website Boilerplate</title>
				</Head>
				<ApolloProvider client={apollo}>
					<MuiThemeProvider theme={theme}>
						<CssBaseline />
						{/* <Suspense fallback={<Loading />}> */}
						<Component pageContext={this.pageContext} {...pageProps} />
						{/* </Suspense> */}
					</MuiThemeProvider>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withGraphql(CustomApp);
