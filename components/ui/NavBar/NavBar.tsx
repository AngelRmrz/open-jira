import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
	return (
		<AppBar position='sticky' elevation={0}>
			<Toolbar>
				<Typography variant='h6'>OpenJira</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
