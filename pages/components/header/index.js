import withStyles from './styles';

class Header extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return <div className={classes.root}>header</div>;
	}
}

export default withStyles(Header);
