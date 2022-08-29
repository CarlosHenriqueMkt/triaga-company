import { Testemonials } from "../components/testemonials/Testemonials";
import { Header } from "../components/header/Header";
import Hero from "../components/hero/Hero";
import { Services } from "../components/serviceslist/Services";
import { Clients } from "../components/trust/Clients";
import Contact from "../components/contact/Contact";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Clients />
			<Services />
			<Testemonials />
			<Contact />
		</>
	);
}
