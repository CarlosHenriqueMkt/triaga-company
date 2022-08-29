import { Box, Button, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineUpSquare } from "react-icons/ai";
import style from "../../styles/footer.module.sass";

export const Footer = () => {
	const handleLinkedIn = () => {
		window.open("https://www.linkedin.com/in/carloshenriquerp/");
	};
	const handleFaceCompany = () => {
		window.open("https://www.facebook.com/Triaga-Company-103932675614865");
	};
	const handleInstaCompany = () => {
		window.open("https://www.instagram.com/triagacompany/");
	};
	const handleLinkedCompany = () => {
		window.open("https://www.linkedin.com/company/triaga-company/");
	};

	return (
		<>
			<Box className={style.footerWrapper}>
				<Text as="p">
					Copyright © 2022 — Todos os direitos reservados
				</Text>

				<Box className={style.socialIcons}>
					<FaFacebookSquare onClick={handleFaceCompany} />
					<FaInstagram onClick={handleInstaCompany} />
					<FaLinkedin onClick={handleLinkedCompany} />
				</Box>
				<Link href="#header" variant="outlined">
					<AiOutlineUpSquare className={style.upSquare} />
				</Link>
			</Box>
		</>
	);
};
