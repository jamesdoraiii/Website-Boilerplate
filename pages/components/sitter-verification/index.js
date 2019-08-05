import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles';

export default function VerificationStep() {
	const classes = useStyles();
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Name on Card"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>

				<Grid item xs={12} sm={8}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Card Number"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="CVC"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Expiration"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Expiration Month"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Postal/ZIP Code"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>

				<Grid item xs={11}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Coupon Code"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={1}>
					<Button className={classes.applyButton}>Apply</Button>
				</Grid>
			</Grid>
		</div>
	);
}
