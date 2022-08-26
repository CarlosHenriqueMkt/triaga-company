import { Box } from "@chakra-ui/react";
import Image from "next/image";
import DrawerMenu from "./Drawer";
import styles from "../../styles/header.module.sass";
import MenuLinks from "./MenuLinks";
import logo from "../../public/logo-gbps.png";

export const Header = () => {
	return (
		<header>
			<Box className={styles.container}>
				<Box className={styles.logoContainer}>
					<Image src={logo} alt="Triaga Company" />
				</Box>
				<Box className={styles.navMenu}>
					<MenuLinks />
				</Box>
				<DrawerMenu />
			</Box>
		</header>
	);
};
