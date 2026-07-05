import React, { useState } from 'react';
import Hero from '../Hero (1).jsx';
import Projects from './Projects.jsx';

export default function App() {
    const [page, setPage] = useState('hero'); // 'hero' or 'projects'

    return (
        <div>
            {page === 'hero' ? (
                <Hero onNavigateToProjects={() => setPage('projects')} />
            ) : (
                <Projects onNavigateToHero={() => setPage('hero')} />
            )}
        </div>
    );
}
