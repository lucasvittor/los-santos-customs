import Image from 'next/image';
import { WhatsappLogo, FacebookLogo, InstagramLogo, YoutubeLogo, GithubLogo } from '@phosphor-icons/react/dist/ssr';
import logo from "../../../public/logo.webp";


export default function Footer() {
    return (
        <section className="bg-gray-900 py-16 text-white" >
            <div className='container mx-auto px-4'>
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5' id='footer'>
                    <div>
                        <Image
                            src={logo}
                            alt="foto logo"
                            className="max-w-xs mx-auto w-30 h-30"
                            layout="intrinsic"
                        />
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Email: dev.lucssvitor@gmail.com</p>
                        <p>Teresina | PI</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
                        <div className='flex gap-4'>
                            <a href="https://www.instagram.com/lucss.vittor/" target='_blank' aria-label="Facebook">
                                <YoutubeLogo className='w-8 h-8 hover:text-yellow-500 transition' />
                            </a>
                            <a href="https://www.instagram.com/lucss.vittor/" target='_blank' aria-label="Instagram">
                                <InstagramLogo className='w-8 h-8 hover:text-yellow-500 transition' />
                            </a>
                            <a href="https://www.instagram.com/lucss.vittor/" target='_blank' aria-label="YouTube">
                                <YoutubeLogo className='w-8 h-8 hover:text-yellow-500 transition' />
                            </a>
                            <a href="https://www.instagram.com/lucss.vittor/" target='_blank' aria-label="YouTube">
                                <FacebookLogo className='w-8 h-8 hover:text-yellow-500 transition' />
                            </a>
                        </div>
                    </div>
                </footer>

                <div className='mt-10'>
                    <h3 className='text-2xl font-semibold mb-4'>Localização</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1740170131594!6m8!1m7!1sCBSl--F4UjW_evbCcoBOFw!2m2!1d34.00979641546357!2d-118.4993803999108!3f153.0668645859898!4f1.8235889364657396!5f0.7820865974627469"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="mt-5 items-center text-center">
                    <a href="https://github.com/lucasvittor" target='_blank' aria-label="GitHub" className="flex items-center justify-center">
                        <GithubLogo className='w-8 h-8 hover:text-yellow-500 transition' />
                        <span className="ml-2">Dev Lucas</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
