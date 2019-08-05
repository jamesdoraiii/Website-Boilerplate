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
import useStyles from './styles'

export default function PersonalStep () {
  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={3}>
        <Grid Item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='select-multiple-chip'>Chip</InputLabel>
            <Select
              multiple
              value={personName}
              onChange={handleChange}
              input={<Input id='select-multiple-chip' />}
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
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid Item xs={12}>
          <TextField
            id='standard-name'
            label='Number of Children'
            className={classes.textField}
            // value={values.name}
            // onChange={handleChange('name')}
            margin='normal'
          />
        </Grid>
        <Grid Item xs={12}>
          <TextField
            id='standard-name'
            label='Looking For'
            className={classes.textField}
            // value={values.name}
            // onChange={handleChange('name')}
            margin='normal'
          />
        </Grid>
        <Grid Item xs={12}>
          <TextField
            id='standard-name'
            label='Address'
            className={classes.textField}
            // value={values.name}
            // onChange={handleChange('name')}
            margin='normal'
          />
        </Grid>
      </Grid>
    </div>
  )
}
