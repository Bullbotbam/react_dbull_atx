import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import { makeStyles } from '@material-ui/core';
import { Container, Typography, Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';
import './index.js';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(3),
	},
	bodyColor: {
		color: '#757575',
	},
}));

function ContactForm() {
	const form = useRef();
	const classes = useStyles();
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const { name, email, message } = formState;

	const [errorMessage, setErrorMessage] = useState('');

	function handleChange(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.taget.value);
			console.log(isValid);
			if (!isValid) {
				setErrorMessage('Your email does not match any in our records.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required for this site.`);
			} else {
				setErrorMessage('');
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
		emailjs
			.sendForm(
				'service_jnjnx5k',
				'template_ztumzxh',
				form.current,
				'user_r1p1ediIOkyrxFDqbIEnu'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<Container className={classes.bodyColor}>
			<Typography gutterBottom variant="h1">
				Hit Me Up!
			</Typography>
			<form ref={form} onSubmit={handleSubmit}>
				<div>
					<TextField
						type="name"
						id="outlined-basic"
						onBlur={handleChange}
						label="Full name"
						variant="outlined"
						defaultValue={name}
					/>
				</div>
				<div>
					<TextField
						type="email"
						id="outlined-basic"
						onBlur={handleChange}
						label="Email address"
						variant="outlined"
						defaultValue={email}
					/>
				</div>
				<div>
					<TextField
						type="message"
						id="outlined-basic"
						onBlur={handleChange}
						label="Please share your thoughts..."
						variant="outlined"
						helperText="Fill out the form to connect with me.  I will be sure to get back with you!"
						fullWidth
						multiline
						rows={6}
						defaultValue={message}
					/>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					endIcon={<SendIcon />}
					type="submit"
					value="Send"
				>
					Send it to me!
				</Button>
			</form>
		</Container>
	);
}

export default ContactForm;
