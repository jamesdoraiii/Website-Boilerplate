import React from 'react';
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

const careTypes = [
	'Full Time',
	'Part Time',
	'Occasional / Date Night',
	'Before School Care',
	'After School Care',
	'Interested in Respite Care'
];

export default function ProfileStep() {
	const classes = useStyles();
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						id="date"
						label="Birthday"
						type="date"
						defaultValue="2017-05-24"
						className={classes.textField}
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						id="standard-name"
						label="Hourly Rate Low"
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
						label="Hourly Rate High"
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
						label="Years of Experience"
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
						label="Phone Number"
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
						label="Address"
						className={classes.textField}
						// value={values.name}
						// onChange={handleChange('name')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<p> Care Type (select all that apply)</p>
					<ul>
						{careTypes.map(care => (
							<div>
								<FormControlLabel
									control={
										<Checkbox
											checked={false}
											// onChange={handleChange('checkedA')}
											value="checkedA"
										/>
									}
									label={care}
								/>
							</div>
						))}
					</ul>
				</Grid>
			</Grid>
		</div>
	);
}
