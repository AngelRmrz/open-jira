import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: grey[200],
		},
		primary: {
			main: '#2f3e46',
			// contrastText: '#cad2c5',
		},
		secondary: {
			main: '#354f52',
			// contrastText: '#84a98c',
		},
	},
});
