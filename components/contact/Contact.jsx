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

	const dynamicLink = `https://api.whatsapp.com/send?phone=+34697899495&text=Olá%2C vim pelo seu site e estou interessado nos seus serviços.%0AMe chamo ${
		input?.name
	}.${!!input?.msg ? `%0A%0A${encodeURI(input.msg)}%0A` : ""}`;

	function handleSendMsg() {
		if (input?.name?.length <= 3) return;
		window.open(dynamicLink, "_blank");
	}

	return (
		<Box
			minHeight="50vh"
			id="contato"
			marginTop="100px"
			marginBottom="50px"
		>
			<Box textAlign="center" padding="12px 0" marginBottom="32px">
				<Text as="h2" textAlign="center" fontSize="3xl">
					Entre em contato!
				</Text>
				<Text as="p" margin="8px 0 16px" textAlign="center">
					Se preferir entrar em contato via email:
					<br />
					<Link as="a" href="mailto:thaisinha.ib@gmail.com">
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
				<Box width="500px">
					<FormControl isInvalid={isError?.name} isRequired>
						<FormLabel htmlFor="name">Nome</FormLabel>
						<Input
							id="name"
							type="text"
							value={input?.name || ""}
							onChange={(e) => handleInputChange(e, "name")}
							onClick={() => handleInputClicked("name")}
							placeholder="Digite seu nome"
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
						<FormLabel htmlFor="msg">Mensagem</FormLabel>
						<Textarea
							id="msg"
							value={input?.msg}
							onChange={(e) => handleInputChange(e, "msg")}
							placeholder="Coloque aqui sua mensagem"
							size="sm"
						/>
					</FormControl>
					<Box
						display="flex"
						justifyContent="center"
						marginTop="24px"
					>
						<Button
							width="150px"
							color="white"
							colorScheme="whatsapp"
							onClick={handleSendMsg}
							alignContent="center"
						>
							<FaWhatsapp size="25px" /> Enviar
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
