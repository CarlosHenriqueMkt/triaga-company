import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import hero from "../../public/hero.json";
import styles from "../../styles/hero.module.sass";

export default function Hero() {
	return (
		<>
			<Box className={styles.heroContainer} id="hero">
				{/* (H1 + Texto auxiliar + CTA) */}
				<Box className={styles.heroBoxes}>
					<Heading as="h1" color="brand.700">
						Lorem ipsum dolor sit amet
					</Heading>
					<Text
						as="p"
						textAlign="center"
						padding="5"
						color="brand.800"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Phasellus facilisis euismod erat quis feugiat.
						Suspendisse nec risus a mi fermentum varius eu eget
						neque.
					</Text>
					<Button
						margin="5"
						bgColor="brand.200"
						color="brand.100"
						_hover={{ background: "brand.700" }}
						boxShadow="rgba(0, 0, 0, 0.3) 0px 5px 10px;"
					>
						<Link href="#contato"> Entre em contato! </Link>
					</Button>
				</Box>

				{/* (Imagem interativa) */}
				<Box className={styles.heroBoxes}>
					<Lottie
						loop
						animationData={hero}
						play
						className={styles.lottie}
					/>
				</Box>
			</Box>
		</>
	);
}
