import React from 'react';
import { Twitter } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footerIcons">
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
			</div>
		</footer>
	);
};

export default Footer;