import Header from '../../components/header';

import withStyles from './styles';

class Home extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Header />
				<div className={classes.root}>
					Hello World
				</div>
			</div>
		);
	}
}

export default withStyles(Home);
