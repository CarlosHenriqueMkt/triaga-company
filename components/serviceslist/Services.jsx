import styles from "../../styles/services.module.sass";
import { CgWebsite } from "react-icons/cg";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Services = () => {
	return (
		<>
			<Box className={styles.servicesContainer}>
				<Box className={styles.servicesTitle}>
					<Heading as="h2" id="serviceslist">
						Nossos serviços
					</Heading>
					<Text as="p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque auctor tempus dignissim.
					</Text>
				</Box>
				<Box className={styles.servicesFlex}>
					<Box className={styles.servicesBox}>
						<CgWebsite className={styles.servicesIcon} />
						<Heading as="h3">Gestão da comunicação</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque auctor tempus dignissim.
						</Text>
					</Box>
					<Box className={styles.servicesBox}>
						<CgWebsite className={styles.servicesIcon} />
						<Heading as="h3">Gestão criativa</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque auctor tempus dignissim.
						</Text>
					</Box>
					<Box className={styles.servicesBox}>
						<CgWebsite className={styles.servicesIcon} />
						<Heading as="h3">Gestão de Vendas</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque auctor tempus dignissim.
						</Text>
					</Box>
					<Box className={styles.servicesBox}>
						<CgWebsite className={styles.servicesIcon} />
						<Heading as="h3">Gestão de TI</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque auctor tempus dignissim.
						</Text>
					</Box>
					<Box className={styles.servicesBox}>
						<CgWebsite className={styles.servicesIcon} />
						<Heading as="h3">Campanhas publicitárias</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque auctor tempus dignissim.
						</Text>
					</Box>
					<Box className={styles.servicesBox}>
						<CgWebsite className={styles.servicesIcon} />
						<Heading as="h3">Campanhas políticas</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque auctor tempus dignissim.
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};
