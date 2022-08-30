import "../styles/globals.sass";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";

const colors = {
	brand: {
		100: "#ffffff",
		200: "#01BCB0",
		300: "#078984",
		400: "#0C5658",
		500: "#084754",
		600: "#043850",
		700: "#04202D",
		800: "#000000",
	},
};

const typography = {
	text: {
		h1: "32px",
		h2: "26px",
		h3: "20px",
	},
};

const theme = extendTheme({ colors, typography });

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
			/>

			<Script strategy="lazyOnload" id="gtag">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
			</Script>

			<Head>
				<title>
					Triaga Company — Agência de Comunicação e Tecnologia
				</title>
				<meta
					name="description"
					content="Agência de comunicação e tecnologia"
				/>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
