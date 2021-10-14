import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
	Menu,
	MenuItem,
	Box,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const theme = createTheme({
	palette: {
		primary: {
			main: '#757575',
		},
		secondary: {
			main: '#616161',
		},
		MenuItem: {
			textDecoration: 'none',
		},
	},
});

// const MenuOptions = ['Home', 'Projects', 'Hit Me UP', 'Resume'];

export default function SearchBar(theme) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" style={{ backgroundColor: '#757575' }}>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						textAlign="start"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						<Link
							to="/"
							style={{
								fontFamily: 'fantasy',
								fontSize: '2rem',
								textDecoration: 'none',
								padding: '0.25rem 1rem',
								borderRadius: '.5rem',
								border: 'none',
								outline: 'none',
								cursor: 'pointer',
								margin: '0 1px',
								color: '#fff',
							}}
						>
							Donald Bull
							<span role="img" aria-label="bull">
								🐂
							</span>
						</Link>
					</Typography>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClick={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<Link to="/">
							<MenuItem>About</MenuItem>
						</Link>

						<Link to="/projects">
							<MenuItem>Projects</MenuItem>
						</Link>

						<Link to="/contact">
							<MenuItem>Hit Me Up </MenuItem>
						</Link>
						<Link to="/resume">
							<MenuItem> Resume </MenuItem>
						</Link>
					</Menu>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
