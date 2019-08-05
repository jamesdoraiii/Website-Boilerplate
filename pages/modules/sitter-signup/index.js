import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AccountStep from '../../components/sitter-account';
import ProfileStep from '../../components/sitter-profile';
import PreferencesStep from '../../components/sitter-preferences';
import VerificationStep from '../../components/sitter-verification';

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
	return ['Account', 'Profile', 'Preferences', 'Verification'];
}

function getStepContent(stepIndex) {
	const classes = useStyles();
	switch (stepIndex) {
		case 0:
			return <AccountStep />;
		case 1:
			return <ProfileStep />;
		case 2:
			return <PreferencesStep />;
		case 3:
			return <VerificationStep />;
		default:
			return 'Uknown stepIndex';
	}
}

export default function SitterSignup() {
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
