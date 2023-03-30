import { useContext } from 'react';
import { Drawer, Box, Typography, List, ListItem, Divider } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { UIContext } from '@/context/ui';

export interface SideBarProps {}

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

const SideBar: React.FC<SideBarProps> = () => {
	const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

	return (
		<Drawer anchor='left' open={sidemenuOpen} onClose={closeSideMenu}>
			<Box sx={{ width: 250 }}>
				<Box sx={{ padding: '5px' }}>
					<Typography variant='h4'>Menú</Typography>
					<List>
						{menuItems.map((text, index) => (
							<ListItem key={text}>
								<ListItemButton>
									<ListItemIcon>{index % 2 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
				<Divider />
			</Box>
		</Drawer>
	);
};

export default SideBar;
