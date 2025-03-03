import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import about from "../../../public/about.png";
import { Check, MapPin} from "lucide-react";

const About = () => {
    return (
        <section className="bg-slate-900 text-white py-16">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">

                <div className="relative">
                    <div className="relative w-full h-96">
                        <Image
                            src={about}
                            alt="Foto garagem"
                            fill
                            quality={100}
                            priority
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                <div className="max-w-lg mx-auto">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Sobre</h1>
                    <p className="text-lg text-gray-300">
                        Somos apaixonados por carros e dedicados a oferecer os melhores serviços para o seu veículo. Com anos de experiência no setor automotivo, nossa missão é proporcionar um atendimento personalizado e de alta qualidade, garantindo que cada cliente tenha uma experiência única e satisfatória.
                    </p>
                    
                    <ul className="space-y-4 mt-8">
                        <li className="flex items-center gap-2">
                            <Check className="text-green-400" />
                            Aberto Desde 2010
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-green-400" />
                            Especialistas em tunagem e personalização
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-green-400" />
                            Peças e acessórios de alta qualidade
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-green-400" />
                            Atendimento rápido e eficiente
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-green-400" />
                            Garantia de satisfação para todos os serviços
                        </li>
                    </ul>

                    <a href="#" className="mt-8 inline-flex items-center gap-2 bg-green-500 text-white rounded-lg shadow-lg px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300">
                        <WhatsappLogo className="w-8 h-8" />
                        Contato Via WhatsApp
                    </a>
                    <a href="#footer" className="mt-8 inline-flex items-center gap-2 text-white rounded-lg shadow-lg px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300">
                        <MapPin className="w-8 h-8" />
                        Localização
                    </a>
                </div>

            </div>
        </section>
    );
};

export default About;
