import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ContactForm from './components/ContactForm';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

function App() {
	const classes = useStyles();

	return (
		<Container className="app">
			<Router>
				<div className="App">
					<Navbar />

					<Switch>
						<Route exact path="/" component={About} />
						<Route exact path="/projects" component={Portfolio} />
						<Route exact path="/contact" component={ContactForm} />
						<Route exact path="/resume" component={Resume} />
					</Switch>
				</div>
			</Router>
			<Footer className={classes.footer} />;
		</Container>
	);
}
export default App;
