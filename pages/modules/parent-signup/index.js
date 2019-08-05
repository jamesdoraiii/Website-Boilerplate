import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import InputLabel from '@material-ui/core/InputLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import UserInfoStep from '../../components/parent-user-info'
import PersonalStep from '../../components/parent-personal-info'

const lookingFor = [
  ['Ocassional/Date Night', 'ocassionalDateNight'],
  ['Part Time', 'partTime'],
  ['Full Time', 'fullTime'],
  ['Before School', 'beforeSchool'],
  ['After School', 'afterSchool']
]

const numberOfChildren = [{ '1': 1 }, { '2': 2 }, { '3': 3 }, { '4+': 4 }]

const ageRanges = [
  ['0-12 mo', 'ocassionalDateNight'],
  ['1-3 yrs', 'partTime'],
  ['4-7 yrs', 'fullTime'],
  ['8-11 yrs', 'beforeSchool'],
  ['12-14 yrs', 'afterSchool'],
  ['15-20 yrs', 'afterSchool']
]

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250
    }
  }
}

const useStyles = makeStyles(theme => {
  const colors = theme.palette.colors
  console.log(theme)
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
  }
})

function getSteps () {
  return ['User Info', 'Personal Info', 'Payment']
}

function getStepContent (stepIndex) {
  const classes = useStyles()
  switch (stepIndex) {
    case 0:
      return <UserInfoStep classes={classes} />
    case 1:
      return <PersonalStep classes={classes} />
    case 2:
      return 'This is the bit I really care about!'
    default:
      return 'Uknown stepIndex'
  }
}

export default function ParentSignup () {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  function handleNext () {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  function handleBack () {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  function handleReset () {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <div className={classes.stepper}>
        <img className={classes.logo} src='static/assets/images/logo.png' />
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
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
