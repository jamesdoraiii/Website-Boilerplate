// #Import Orders
//
// General Libraries
//
// Component Libraries
//
// Internal Components
//
// Internal Utilities
//
// component styles and data

import withStyles from './styles';

class Header extends React.Component {
	// initial state
	state = {};

	// Lifecycle Methods

	// Render Methods
	render() {
		const { classes } = this.props;

		return <div className={classes.root}>header</div>;
	}

	// Action Handlers
}

export default withStyles(Header);
