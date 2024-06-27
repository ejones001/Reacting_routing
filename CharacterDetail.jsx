import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const marvelApiKey = '20e7e726e2ba036817fc00152501ab22'; //  API public key

    useEffect(() => {
        fetchCharacterDetails();
    }, [id]);

    const fetchCharacterDetails = async () => {
        try {
            const response = await fetch(
                `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${marvelApiKey}`
            );
            const data = await response.json();
            setCharacter(data.data.results[0]);
        } catch (error) {
            console.error('Error fetching character details:', error);
        }
    };

    if (!character) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Character Details</h2>
            <p>Name: {character.name}</p>
            <p>Description: {character.description || 'No description available'}</p>
            
        </div>
    );
};

export default CharacterDetails;
