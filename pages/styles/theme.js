import { createMuiTheme } from '@material-ui/core/styles';

const colors = require('./colors');

const theme = createMuiTheme({
	palette: {
		colors: colors,
		primary: {
			main: colors.primary
		},
		secondary: {
			main: colors.secondary
		},
		footer: {
			main: colors.goldenrod,
			secondary: colors.darkgray
		}
	},
	typography: {
		fontFamily: '"Roboto", "Roboto Condensed"',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 600,
		useNextVariants: true
	}
});

export default theme;
