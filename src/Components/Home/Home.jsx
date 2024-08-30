import React from 'react';

function Home() {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            <div className="absolute top-1/5 transform -translate-y-1/4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    Tus archivos?
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                        {" "}
                        Seguros.
                    </span>
                </h1>
                <p className="mt-8 text-lg text-center text-neutral-500 max-w-4xl">
                    Asegura y organiza todas tus recetas y estudios médicos en un solo lugar de confianza. Siempre a tu alcance, cuando más lo necesites. Tu salud, gestionada por vos.
                </p>
                <div className="flex justify-center mt-8">
                    <a
                        href="/Register"
                        className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
                    >
                        No estas registrado?
                    </a>
                    <a href="mailto:ntarchini.developer@gmail.com" className="py-3 px-4 mx-3 rounded-md border">
                        Contacto
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
