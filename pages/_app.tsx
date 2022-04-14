import type { AppProps } from 'next/app';

import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

import theme from 'settings/theme';
import createEmotionCache from 'settings/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface AppPropsWithMUI extends AppProps {
	emotionCache?: typeof clientSideEmotionCache;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppPropsWithMUI) {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
				{/* PWA primary color */}
				<meta name='theme-color' content={theme.palette.primary.main} />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
