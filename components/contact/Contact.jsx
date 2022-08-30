import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Link,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
	const [input, setInput] = useState({});
	const [isClicked, setIsClicked] = useState({});

	const handleInputChange = (e, inputName) => {
		setInput({ ...input, [inputName]: e.target.value });
	};

	function handleInputClicked(inputName) {
		setIsClicked({ ...isClicked, [inputName]: true });
	}

	const isError = {
		name: isClicked?.name ? input?.name?.length < 3 : false,
		msg: isClicked?.msg ? input?.msg?.length < 10 : false,
	};

	const dynamicLink = `https://api.whatsapp.com/send?phone=+557996491745&text=Olá%2C vim pelo site e tenho interesse nos serviços da Triaga.%0AMe chamo ${
		input?.name
	}.${!!input?.msg ? `%0A%0A${encodeURI(input.msg)}%0A` : ""}`;

	function handleSendMsg() {
		if (input?.name?.length <= 3) return;
		window.open(dynamicLink, "_blank");
	}

	return (
		<Box minHeight="50vh" id="contato" margin="50px" marginBottom="50px">
			<Box
				textAlign="center"
				padding="12px 0"
				marginBottom="32px"
				id="#contact"
			>
				<Text
					as="h2"
					textAlign="center"
					fontSize={{
						base: "30px",
						md: "45px",
						lg: "55px",
						xl: "80px",
					}}
				>
					Entre em contato!
				</Text>
				<Text
					as="p"
					margin="8px 0 16px"
					textAlign="center"
					fontSize={{
						base: "16px",
						md: "25px",
						lg: "32px",
						xl: "40px",
					}}
					fontWeight="300"
				>
					Se preferir entrar em contato via email:
					<br />
					<Link as="a" href="mailto:contato@triagacompany.com.br">
						contato@triagacompany.com.br
					</Link>
				</Text>
			</Box>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				padding="0 12px"
			>
				<Box width={{ base: "500px", lg: "800px" }}>
					<FormControl isInvalid={isError?.name} isRequired>
						<FormLabel
							htmlFor="name"
							fontSize={{
								base: "16px",
								xl: "30px",
							}}
						>
							Nome
						</FormLabel>
						<Input
							id="name"
							type="text"
							value={input?.name || ""}
							onChange={(e) => handleInputChange(e, "name")}
							onClick={() => handleInputClicked("name")}
							placeholder="Digite seu nome"
							size="lg"
						/>
						{isError && (
							<FormErrorMessage>
								Nome é obrigatório.
							</FormErrorMessage>
						)}
					</FormControl>
					<FormControl
						margin="12px 0"
						isInvalid={isError?.msg}
						isRequired
					>
						<FormLabel
							htmlFor="msg"
							fontSize={{
								base: "16px",
								xl: "30px",
							}}
						>
							Mensagem
						</FormLabel>
						<Textarea
							id="msg"
							value={input?.msg}
							onChange={(e) => handleInputChange(e, "msg")}
							placeholder="Coloque aqui sua mensagem"
							size="lg"
						/>
					</FormControl>
					<Box
						display="flex"
						justifyContent="center"
						marginTop="24px"
					>
						<Button
							width="150px"
							height="60px"
							color="white"
							colorScheme="whatsapp"
							onClick={handleSendMsg}
							alignContent="center"
							fontSize="20px"
						>
							<FaWhatsapp fontSize="30px" /> Enviar
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
