import styles from "../../styles/services.module.sass";
import { CgWebsite } from "react-icons/cg";
import { BiNetworkChart } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
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
						<BiNetworkChart className={styles.servicesIcon} />
						<Heading as="h3">Gestão da Comunicação</Heading>
						<Text>
							Criação e gestão de conteúdo para redes sociais e
							blogs. Gestão do relacionamento com clientes nas
							redes sociais.
						</Text>
					</Box>
					<Box className={styles.servicesBox}>
						<GiProgression className={styles.servicesIcon} />
						<Heading as="h3">Gestão de Vendas</Heading>
						<Text>
							Desenvolvimento de novos processos para o lançamento
							e a venda de produtos e serviços. Treinamentos de
							vendas e construção de equipes.
						</Text>
					</Box>
					<Box className={styles.servicesBox}>
						<CgWebsite className={styles.servicesIcon} />
						<Heading as="h3">Criação de Sites Responsivos</Heading>
						<Text>
							Desenvolvimento de sites responsivos utilizando as
							melhores tecnologias de otimização para mecanismos
							de busca.
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};
