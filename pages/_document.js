import Document, { Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import React from 'react';
import flush from 'styled-jsx/server';
import { ServerStyleSheets } from '@material-ui/styles';

class CustomDocument extends Document {
	render() {
		const { pageContext } = this.props;

		return (
			<html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
					/>

					<base href="/" />

					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body >
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

CustomDocument.getInitialProps = async ctx => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props => sheets.collect(<App {...props} />)
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: (
			<React.Fragment>
				{sheets.getStyleElement()}
				{flush() || null}
			</React.Fragment>
		)
	};
};

export default CustomDocument;
