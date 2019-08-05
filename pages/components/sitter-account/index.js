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

export default function AccountStep() {
	const classes = useStyles();
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="First Name"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Last Name"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Email Address"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Password"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Confirm Password"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<FormControlLabel
					control={
						<Checkbox
							checked={false}
							// onChange={handleChange('checkedA')}
							value="checkedA"
						/>
					}
					label="I have read, understood, and accept the terms and conditions."
				/>
			</Grid>
		</div>
	);
}
