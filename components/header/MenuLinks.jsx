import { Box } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../../styles/header.module.sass";

export default function MenuLinks() {
	return (
		<>
			<Box>
				<Link className={styles.navLink} href="#hero">
					Início
				</Link>
			</Box>
			<Box marginTop={{ base: "10px", md: "0" }}>
				<Link className={styles.navLink} href="#trust">
					Clientes
				</Link>
			</Box>
			<Box marginTop={{ base: "10px", md: "0" }}>
				<Link className={styles.navLink} href="#serviceslist">
					Serviços
				</Link>
			</Box>
			<Box marginTop={{ base: "10px", md: "0" }}>
				<Link className={styles.navLink} href="#depoiments">
					Depoimentos
				</Link>
			</Box>
			<Box marginTop={{ base: "10px", md: "0" }}>
				<Link className={styles.navLink} href="#contact">
					Contato
				</Link>
			</Box>
		</>
	);
}
