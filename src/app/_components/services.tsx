import userEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftCircle, ChevronRightCircle, Car, Wrench, Settings, BatteryCharging, ShieldCheck, CheckCircle } from 'lucide-react'

const Services = () => {
    return (
        <section className="bg-slate-900 text-white py-16">
            <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Serviços</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center gap-4 p-6 bg-black rounded-lg transition duration-300 hover:bg-slate-800">
                        <Wrench className="text-green-400 w-10 h-10" />
                        <span className="text-lg font-semibold">Manutenção e Reparos</span>
                        <p className="text-sm">Serviços especializados para manter seu veículo em ótimo estado e funcionando perfeitamente.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 bg-black rounded-lg transition duration-300 hover:bg-slate-800">
                        <BatteryCharging className="text-blue-400 w-10 h-10" />
                        <span className="text-lg font-semibold">Serviços Elétricos</span>
                        <p className="text-sm">Diagnóstico e reparo de sistemas elétricos para garantir segurança e eficiência.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 bg-black rounded-lg transition duration-300 hover:bg-slate-800">
                        <Settings className="text-red-400 w-10 h-10" />
                        <span className="text-lg font-semibold">Customização e Ajustes</span>
                        <p className="text-sm">Personalizamos seu veículo de acordo com suas preferências e necessidades.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 bg-black rounded-lg transition duration-300 hover:bg-slate-800">
                        <Car className="text-purple-400 w-10 h-10" />
                        <span className="text-lg font-semibold">Inspeção e Diagnóstico</span>
                        <p className="text-sm">Realizamos inspeções detalhadas para identificar problemas antes que se agravem.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 bg-black rounded-lg transition duration-300 hover:bg-slate-800">
                        <ShieldCheck className="text-yellow-400 w-10 h-10" />
                        <span className="text-lg font-semibold">Serviços de Segurança</span>
                        <p className="text-sm">Implementação de medidas de segurança para proteger seu veículo contra furtos e danos.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 bg-black rounded-lg transition duration-300 hover:bg-slate-800">
                        <CheckCircle className="text-teal-400 w-10 h-10" />
                        <span className="text-lg font-semibold">Manutenção Preventiva</span>
                        <p className="text-sm">Manutenção regular para evitar problemas futuros e prolongar a vida útil do seu veículo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
