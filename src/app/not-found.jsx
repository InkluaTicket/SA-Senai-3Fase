import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
            <h1 className="text-5xl font-bold text-red-500">😢 Erro 404 😢</h1>
            <p className="text-xl text-gray-300 mt-4">
                Oops! Parece que você encontrou um buraco negro na internet. 🌌
            </p>
            <p className="text-lg text-gray-400 mt-2">
                A página que você tentou acessar evaporou no espaço ou nunca existiu. 🤯
            </p>
            <p className="text-lg text-gray-400 mt-2">
                Mas calma, você pode voltar para um lugar seguro!
            </p>
            <Link href="/">
                <span className="mt-12 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition-colors cursor-pointer">
                    Voltar para Home antes que os aliens te encontrem 👽🚀
                </span>
            </Link>
        </div>
    );
}
