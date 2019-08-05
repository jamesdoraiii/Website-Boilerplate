import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => {
	const colors = theme.palette.colors;
	console.log(theme);
	return {
		formControl: {
			margin: theme.spacing(1),
			width: '100%'
		},
		selectEmpty: {
			marginTop: theme.spacing(2)
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: '100%'
		},
		applyButton: {
			width: '100%',
			margin: '70% auto auto auto',
			marginRight: theme.spacing(1)
		}
	};
});
