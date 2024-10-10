import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories([
            { name: 'Populares', movies: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg'] },
            { name: 'Ação', movies: ['/6.jpg', '/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg'] },
            { name: 'Drama', movies: ['/11.jpg', '/12.jpg', '/13.jpg', '/14.jpg', '/15.jpg'] },
        ]);
    }, []);

    return (
        <div className="app">
            <Header />
            <Highlight />
            <Categories categories={categories} />
            <Footer />
        </div>
    );
};

const Header = () => (
    <header className="header">
        <h1>NextPlay</h1>
        <ul className="nav-menu">
            <li>Início</li>
            <li>Séries</li>
            <li>Filmes</li>
        </ul>
    </header>
);

const Highlight = () => (
    <section className="highlight">
        <h2>Filme em Destaque</h2>
    </section>
);

const Categories = ({ categories }) => (
    <section className="categories">
        {categories.map((category, index) => (
            <div key={index} className="category">
                <h3>{category.name}</h3>
                <div className="category-list">
                    {category.movies.map((movie, i) => (
                        <img key={i} src={movie} alt={`movie ${i}`} />
                    ))}
                </div>
            </div>
        ))}
    </section>
);

const Footer = () => (
    <footer>
        <p>© 2024 NextPlay</p>
    </footer>
);

export default App;
