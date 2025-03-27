import React from 'react';
import Link from 'next/link';
import './globals.css';

export default function NotFound() {
    return (
        <div className="container">
            <h1 className="title">😢 Erro 404 😢</h1>
            <p className="message">Oops! Parece que você encontrou um buraco negro na internet. 🌌</p>
            <p className="message">A página que você tentou acessar evaporou no espaço ou nunca existiu. 🤯</p>
            <p className="message">Mas calma, você pode voltar para um lugar seguro!</p>
            <Link href="/">
                <span className="home-link">Voltar para Home antes que os aliens te encontrem 👽🚀</span>
            </Link>
        </div>
    );
}
