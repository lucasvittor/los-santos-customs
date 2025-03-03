"use client"; // Adicione esta linha no início do seu arquivo

import React from 'react';

const Gallery = () => {
    const carImages = [
        { id: 1, src: '1.webp', alt: 'Carro Tunado 1' },
        { id: 2, src: '2.webp', alt: 'Carro Tunado 2' },
        { id: 3, src: '3.webp', alt: 'Carro Tunado 3' },
        { id: 4, src: '4.webp', alt: 'Carro Tunado 4' },
    ];

    return (
        <section style={{ backgroundColor: 'black', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
            <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Ultimos Tunados</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                    {carImages.map((car) => (
                        <div key={car.id} style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <img
                                src={car.src}
                                alt={car.alt}
                                style={{ width: '100%', height: 'auto', transition: 'transform 0.3s' }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
