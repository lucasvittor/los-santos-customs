import { WhatsappLogo, InstagramLogo, YoutubeLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import hero from "../../../public/hero.png";
import logo from "../../../public/logo.webp";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-black text-white relative overflow-hidden">
            <Image
                src={logo}
                alt="foto logo"
                className="max-w-xs mx-auto w-30 h-30" 
                layout="intrinsic" 
            />
            <div>
                <Image
                    src={hero}
                    alt="foto hero"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-20 lg:hidden" />
            </div>
            <div className="container mx-auto py-16 pt-4">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                    <div className="space-y-6">
                        <p className="text-lg text-center"> 
                        Bem-vindo à nossa oficina! Aqui, transformamos ideias em uma verdadeira obra-prima.
                        Deixe-nos cuidar do seu carro e descubra como podemos elevar seu veículo a um novo patamar!


                        </p>
                        <div className="flex flex-wrap gap-6 justify-center"> 
                            <a href="#" className="bg-green-500 text-white rounded-full flex items-center justify-center w-16 h-16 shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300">
                                <WhatsappLogo className="w-10 h-10" />
                            </a>
                            <a href="https://www.instagram.com/lucss.vittor/" className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white rounded-full flex items-center justify-center w-16 h-16 shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300">
                                <InstagramLogo className="w-10 h-10" />
                            </a>
                            <a href="#" className="bg-red-600 text-white rounded-full flex items-center justify-center w-16 h-16 shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300">
                                <YoutubeLogo className="w-10 h-10" />
                            </a>
                            <a href="#" className="bg-blue-700 text-white rounded-full flex items-center justify-center w-16 h-16 shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300">
                                <FacebookLogo className="w-10 h-10" />
                            </a>
                        </div>
                        <div className="mt-8 text-center"> 
                            <p className="text-sm mb-5">
                                <b className="bg-slate-900 text-white px-5 py-2 rounded-md">15%</b> De Desconto Na Primeira Tunagem
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:block h-full">
                        <Image
                            src={hero}
                            alt="foto hero"
                            className="object-contain h-full w-full"
                            layout="responsive"
                            sizes="(max-width: 768px) 0vw, 50vw"
                        />
                    </div>
                </article>
            </div>
        </section>
    );
}
