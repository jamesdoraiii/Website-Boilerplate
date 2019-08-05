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

const lookingFor = [
	['Ocassional/Date Night', 'ocassionalDateNight'],
	['Part Time', 'partTime'],
	['Full Time', 'fullTime'],
	['Before School', 'beforeSchool'],
	['After School', 'afterSchool']
];

const numberOfChildren = [{ '1': 1 }, { '2': 2 }, { '3': 3 }, { '4+': 4 }];

const ageRanges = [
	['0-12 mo', 'ocassionalDateNight'],
	['1-3 yrs', 'partTime'],
	['4-7 yrs', 'fullTime'],
	['8-11 yrs', 'beforeSchool'],
	['12-14 yrs', 'afterSchool'],
	['15-20 yrs', 'afterSchool']
];

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: 48 * 4.5 + 8,
			width: 250
		}
	}
};

const useStyles = makeStyles(theme => {
	const colors = theme.palette.colors;
	console.log(theme);
	return {
		root: {
			width: '100%',
			height: '100vh',
			backgroundColor: colors.backgroundwhite
		},
		backButton: {
			marginRight: theme.spacing(1)
		},
		instructions: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1)
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: '100%'
		},
		stepper: {
			margin: 'auto',
			maxWidth: '33%'
		},
		logo: {
			width: '100%',
			height: 'auto'
		}
	};
});

function getSteps() {
	return ['User Info', 'Personal Info', 'Payment'];
}

function getStepContent(stepIndex) {
	const classes = useStyles();
	switch (stepIndex) {
		case 0:
			return (
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
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
							id="standard-name"
							label="Last Name"
							className={classes.textField}
							// value={values.name}
							// onChange={handleChange('name')}
							margin="normal"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="standard-name"
							label="Username"
							className={classes.textField}
							// value={values.name}
							// onChange={handleChange('name')}
							margin="normal"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="standard-name"
							label="Email"
							className={classes.textField}
							// value={values.name}
							// onChange={handleChange('name')}
							margin="normal"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
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
							id="standard-name"
							label="Confirm Password"
							className={classes.textField}
							// value={values.name}
							// onChange={handleChange('name')}
							margin="normal"
						/>
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
				</Grid>
			);
		case 1:
			return (
				<Grid container spacing={3}>
					<Grid Item xs={12}>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
							<Select
								multiple
								value={personName}
								onChange={handleChange}
								input={<Input id="select-multiple-chip" />}
								renderValue={selected => (
									<div className={classes.chips}>
										{selected.map(value => (
											<Chip key={value} label={value} className={classes.chip} />
										))}
									</div>
								)}
								MenuProps={MenuProps}
							>
								{names.map(name => (
									<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid Item xs={12}>
						<TextField
							id="standard-name"
							label="Number of Children"
							className={classes.textField}
							// value={values.name}
							// onChange={handleChange('name')}
							margin="normal"
						/>
					</Grid>
					<Grid Item xs={12}>
						<TextField
							id="standard-name"
							label="Looking For"
							className={classes.textField}
							// value={values.name}
							// onChange={handleChange('name')}
							margin="normal"
						/>
					</Grid>
					<Grid Item xs={12}>
						<TextField
							id="standard-name"
							label="Address"
							className={classes.textField}
							// value={values.name}
							// onChange={handleChange('name')}
							margin="normal"
						/>
					</Grid>
				</Grid>
			);
		case 2:
			return 'This is the bit I really care about!';
		default:
			return 'Uknown stepIndex';
	}
}

export default function ParentSignup() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();

	function handleNext() {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	}

	function handleBack() {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	}

	function handleReset() {
		setActiveStep(0);
	}

	return (
		<div className={classes.root}>
			<div className={classes.stepper}>
				<img className={classes.logo} src="static/assets/images/logo.png" />
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map(label => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<div>
					{activeStep === steps.length ? (
						<div>
							<Typography className={classes.instructions}>All steps completed</Typography>
							<Button onClick={handleReset}>Reset</Button>
						</div>
					) : (
						<div>
							<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
							<div>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={classes.backButton}
								>
									Back
								</Button>
								<Button variant="contained" color="primary" onClick={handleNext}>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
