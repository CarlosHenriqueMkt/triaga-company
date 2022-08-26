import { Box, Heading, Text } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import styles from "../../styles/testemonials.module.sass";
import Image from "next/image";
import Link from "next/link";
import depoimentos from "./data";

export const Testemonials = () => {
	return (
		<>
			<Box className={styles.testContainer}>
				<Box className={styles.testTitle}>
					<Heading as="h3" id="depoiments">
						Depoimentos
					</Heading>
					<Text as="p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse sit amet scelerisque mi.
					</Text>
				</Box>

				{/* Testemonials Map */}
				<Box className={styles.testBox}>
					{depoimentos.map((testemonials) => {
						const { name, text, img, link } = testemonials;

						return (
							<Box
								key={testemonials}
								className={styles.depoiments}
							>
								{/* Imagem da pessoa autora do depoimento */}
								<Box className={styles.imageBox}>
									<Image
										src={img}
										alt="Depoimentos dos clientes"
									/>
								</Box>

								{/* Nome da pessoa autora do depoimento */}
								<Heading as="h4">{name}</Heading>

								{/* Depoimento */}
								<Text as="p">{text}</Text>

								{/* LinkedIn da pessoa autora do depoimento */}
								<Link
									target="_blank"
									rel="noreferrer"
									href={link}
								>
									<FaLinkedin className={styles.testIcon} />
								</Link>
							</Box>
						);
					})}
				</Box>
			</Box>
		</>
	);
};
