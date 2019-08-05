import Header from '../../components/header';

import withStyles from './styles';

class SitterSignUp extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<Header />
				<div className={classes.root}>Sitter Sign UP</div>
			</div>
		);
	}
}

export default withStyles(SitterSignUp);
