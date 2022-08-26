import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/dist/client/link";
import logo from "../../public/google.png";
import styles from "../../styles/clients.module.sass";

export const Clients = () => {
	return (
		<>
			<Box className={styles.clientsContainer}>
				<Box className={styles.clientsTitleBox}>
					<Heading as="h2" id="trust">
						Escolhidos por grandes empresas
					</Heading>
					<Text as="p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas vestibulum sed est eget auctor. Nunc turpis
						nulla, vestibulum eu iaculis sit amet, iaculis vel diam.{" "}
					</Text>
				</Box>
				<Box className={styles.clientsLogo}>
					<Box className={styles.clientsLogoBox}>
						<Link href="">
							<Image src={logo} alt="" />
						</Link>
					</Box>
					<Box className={styles.clientsLogoBox}>
						<Link href="">
							<Image src={logo} alt="" />
						</Link>
					</Box>
					<Box className={styles.clientsLogoBox}>
						<Link href="">
							<Image src={logo} alt="" />
						</Link>
					</Box>
					<Box className={styles.clientsLogoBox}>
						<Link href="">
							<Image src={logo} alt="" />
						</Link>
					</Box>
				</Box>
			</Box>
		</>
	);
};
