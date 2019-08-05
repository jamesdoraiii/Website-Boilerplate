import React, { useState } from 'react';
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
import Chip from '@material-ui/core/Chip';

const lookingForValues = [
	'Ocassional/Date Night',
	'Part Time',
	'Full Time',
	'Before School',
	'After School'
];

const numberOfChildrenValues = ['1', '2', '3', '4+'];

const ageRangesValues = ['0-12 mo', '1-3 yrs', '4-7 yrs', '8-11 yrs', '12-14 yrs', '15-20 yrs'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: '250'
		}
	}
};

export default function PersonalStep() {
	const classes = useStyles();

	const [lookingFor, setLookingFor] = React.useState([]);
	const [numberOfChildren, setNumberOfChildren] = React.useState([]);
	const [ageRanges, setAgeRanges] = React.useState([]);

	function handleLookingForChange(event) {
		setLookingFor(event.target.value);
	}

	function handleNumberOfChildrenChange(event) {
		setNumberOfChildren(event.target.value);
	}

	function handleAgeRangeChange(event) {
		setAgeRanges(event.target.value);
	}

	return (
		<div>
			<Grid container spacing={3}>
				<Grid Item xs={12}>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="select-multiple-chip">Looking For</InputLabel>
						<Select
							multiple
							value={lookingFor}
							onChange={handleLookingForChange}
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
							{lookingForValues.map(value => (
								<MenuItem
									key={value}
									value={value}
									// style={getStyles(value, personName, theme)}
								>
									{value}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid Item xs={12}>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="age-simple">Number of Children</InputLabel>
						<Select value={numberOfChildren} onChange={handleNumberOfChildrenChange}>
							{numberOfChildrenValues.map(value => (
								<MenuItem value={value}>{value}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid Item xs={12}>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="select-multiple-chip">Age Range of Children</InputLabel>
						<Select
							multiple
							value={ageRanges}
							onChange={handleAgeRangeChange}
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
							{ageRangesValues.map(value => (
								<MenuItem
									key={value}
									value={value}
									// style={getStyles(value, personName, theme)}
								>
									{value}
								</MenuItem>
							))}
						</Select>
					</FormControl>
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
		</div>
	);
}
