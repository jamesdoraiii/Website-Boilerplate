import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => {
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
