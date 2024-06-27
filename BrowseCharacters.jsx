import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const marvelApiKey = '20e7e726e2ba036817fc00152501ab22'; //  API public key

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        try {
            const response = await fetch(
                `https://gateway.marvel.com/v1/public/characters?apikey=${marvelApiKey}`
            );
            const data = await response.json();
            setCharacters(data.data.results);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>
                            {character.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;
