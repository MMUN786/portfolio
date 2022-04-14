import type { DocumentContext, DocumentProps } from 'next/document';

import { Html, Head, Main, NextScript } from 'next/document';

import createEmotionServer from '@emotion/server/create-instance';
import theme from 'settings/theme';
import createEmotionCache from 'settings/createEmotionCache';

interface DocumentPropsWithEmotion extends DocumentProps {
	emotionStyleTags: React.ReactElement[];
}

function Document({ emotionStyleTags }: DocumentPropsWithEmotion) {
	return (
		<Html lang='en'>
			<Head>
				{/* Inject MUI styles first to match with the prepend: true configuration. */}
				{emotionStyleTags}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

// // `getInitialProps` belongs to `_document` (instead of `_app`),
// // it's compatible with static-site generation (SSG).
// Document.getInitialProps = async (ctx: DocumentContext) => {
// 	const originalRenderPage = ctx.renderPage;

// 	// You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
// 	// However, be aware that it can have global side effects.
// 	const cache = createEmotionCache();
// 	const { extractCriticalToChunks } = createEmotionServer(cache);

// 	ctx.renderPage = () =>
// 		originalRenderPage({
// 			enhanceApp: (App) =>
// 				function EnhanceApp(props) {
// 					return <App emotionCache={cache} {...props} />;
// 				},
// 		});

// 	const initialProps = await Document.getInitialProps(ctx);
// 	const emotionStyles = extractCriticalToChunks(initialProps.html);
// 	const emotionStyleTags = emotionStyles.styles.map((style) => (
// 		<style
// 			data-emotion={`${style.key} ${style.ids.join(' ')}`}
// 			key={style.key}
// 			// eslint-disable-next-line react/no-danger
// 			dangerouslySetInnerHTML={{ __html: style.css }}
// 		/>
// 	));

// 	return {
// 		...initialProps,
// 		emotionStyleTags,
// 	};
// };

export default Document;
