import Header from '../../components/header';

import withStyles from './styles';

class ParentSignUp extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<Header />
				<div className={classes.root}>Parents Sign Up</div>
			</div>
		);
	}
}

export default withStyles(ParentSignUp);
