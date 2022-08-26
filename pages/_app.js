import "../styles/globals.sass";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

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
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
