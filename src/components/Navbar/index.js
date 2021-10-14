import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const navStyle = {
		color: '#757575',
		margin: '20px',
	};
	return (
		<header className="navBar container">
			<nav>
				<ul className="navLinks">
					<Link style={navStyle} to="/">
						<li>About </li>
					</Link>
					<Link style={navStyle} to="/projects">
						<li> Projects </li>
					</Link>
					<Link style={navStyle} to="/contact">
						<li> Contact </li>
					</Link>
					<Link style={navStyle} to="/resume">
						<li>Resume</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
