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
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import Slider from '@material-ui/core/Slider';

const marks = [
	{
		value: 0,
		label: '0'
	},
	{
		value: 25,
		label: '25'
	},
	{
		value: 50,
		label: '50'
	},
	{
		value: 75,
		label: '75'
	},
	{
		value: 100,
		label: '100'
	}
];

const numberOfChildrenValues = ['1', '2', '3', '4+'];

const ageRangesValues = ['0-12 mo', '1-3 yrs', '4-7 yrs', '8-11 yrs', '12-14 yrs', '15-20 yrs'];

function valuetext(value) {
	return value;
}

export default function PreferencesStep() {
	const classes = useStyles();
	const [value, setValue] = React.useState('female');

	function handleChange(event) {
		setValue(event.target.value);
	}
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Typography id="discrete-slider" gutterBottom>
						Miles Willing to Travel
					</Typography>
					<Slider
						defaultValue={30}
						getAriaValueText={valuetext}
						aria-labelledby="discrete-slider"
						valueLabelDisplay="auto"
						step={10}
						marks={marks}
						min={0}
						max={100}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl required className={classes.formControl}>
						<InputLabel htmlFor="age-required"># of Children Comfortable Watching</InputLabel>
						<Select name="age" input={<OutlinedInput name="age" id="outlined-age-simple" />}>
							{numberOfChildrenValues.map(value => (
								<MenuItem value={value}>{value}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<RadioGroup
						aria-label="position"
						name="position"
						value={value}
						onChange={handleChange}
						row
					>
						{ageRangesValues.map(value => (
							<FormControlLabel
								value={value}
								control={<Radio color="primary" />}
								label={value}
								labelPlacement="top"
							/>
						))}
					</RadioGroup>
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
