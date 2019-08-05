import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => {
	const colors = theme.palette.colors;
	console.log(theme);
	return {
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: '100%'
		},
		formControl: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			marginTop: theme.spacing(2),
			width: '100%'
		}
	};
});
