import { Star, User } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "João Silva",
            feedback: "Os serviços de manutenção foram excepcionais! Meu carro está como novo e a equipe é super atenciosa.",
            rating: 5,
        },
        {
            name: "Maria Oliveira",
            feedback: "A customização que fiz no meu carro ficou incrível! A equipe realmente ouviu minhas ideias e trouxe à vida.",
            rating: 5,
        },
        {
            name: "Carlos Santos",
            feedback: "Fui muito bem atendido na inspeção e diagnóstico. Eles foram transparentes sobre o que precisava ser feito.",
            rating: 4,
        },
        {
            name: "Ana Costa",
            feedback: "Recomendo! O serviço elétrico foi rápido e eficiente, e agora meu carro funciona perfeitamente.",
            rating: 5,
        },
    ];

    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Depoimentos</h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center w-full md:w-80 p-6 rounded-lg shadow-lg transition duration-300 hover:bg-slate-700">
                            <User className="text-yellow-400 w-12 h-12 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
                            <p className="text-sm text-center mb-4">{testimonial.feedback}</p>
                            <div className="flex justify-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
