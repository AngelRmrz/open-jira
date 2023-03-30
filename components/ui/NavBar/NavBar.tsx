import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { UIContext } from '../../../context/ui/UIContext';
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
	const { openSideMenu } = useContext(UIContext);

	return (
		<AppBar position='sticky' elevation={0}>
			<Toolbar>
				<IconButton edge='start' color='inherit' aria-label='menu' onClick={openSideMenu}>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6'>OpenJira</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
