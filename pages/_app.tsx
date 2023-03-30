import '@/styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes/light-theme';
import { UIProvider } from '@/context/ui';
import type { AppProps } from 'next/app';
import { EntriesProvider } from '../context/entries/EntriesProvider';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<EntriesProvider>
			<UIProvider>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</UIProvider>
		</EntriesProvider>
	);
}
