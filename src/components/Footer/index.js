import React from 'react';
import { Twitter } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Typography, IconButton, Toolbar, Container } from '@material-ui/core';

const Footer = () => {
	return (
		<Container
			className="footer"
			style={{ position: 'fixed', zIndex: '1', bottom: '0px' }}
		>
			<Toolbar className="footerIcons">
				<Typography variant="h5" align="center">
					&copy;2021 by dBull_ATX
				</Typography>
				<IconButton
					className="icon-btn"
					aria-label="Twitter.com"
					onClick={() => window.open('https://twitter.com/home?lang=en')}
				>
					<Twitter fontSize="large" />
				</IconButton>
				<IconButton
					className="icon-btn"
					aria-label="Instagram.com"
					onClick={() => window.open('https://www.instagram.com/d.bull_atx/')}
				>
					<Instagram fontSize="large" />
				</IconButton>
				<IconButton
					className="icon-btn"
					aria-label="LinkedIn.com"
					onClick={() =>
						window.open('https://www.linkedin.com/in/donaldjbull-atx/')
					}
				>
					<LinkedIn fontSize="large" />
				</IconButton>
				<IconButton
					className="icon-btn"
					aria-label="GitHub.com"
					onClick={() => window.open('https://github.com/Bullbotbam')}
				>
					<GitHub fontSize="large" />
				</IconButton>
			</Toolbar>
		</Container>
	);
};

export default Footer;
