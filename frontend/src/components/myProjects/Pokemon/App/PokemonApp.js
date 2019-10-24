import React, {useEffect, useState} from 'react';
import './PokemonApp.css';
import PokemonCard from "./PokemonCard";
import axios from 'axios';

export default function PokemonApp() {

    const [pokemonData, setPokemonData] = useState([]);
    const [prevUrl, setPrevUrl] = useState('');
    const [nextUrl, setNextUrl] = useState('');
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    const fetchPokemonData = url => {
        return axios.get(url)
            .then(response => response.data);

    };

    useEffect(() => {
        fetchPokemonData(initialUrl)
            .then(response => {
                setPokemonData(response.results);
                setPrevUrl(response.previous);
                setNextUrl(response.next);
            });
    },[]);

    const prevPage = () => {
        if(prevUrl !== null){
            fetchPokemonData(prevUrl)
                .then(response => {
                    setPokemonData(response.results);
                    setPrevUrl(response.previous);
                    setNextUrl(response.next);
            })
        }
    };

    const nextPage = () => {
        if (nextUrl !== null) {
            fetchPokemonData(nextUrl)
                .then(response => {
                    setPokemonData(response.results);
                    setPrevUrl(response.previous);
                    setNextUrl(response.next);
                })
        }
    };


    return (
        <div className="container">
            <div className="pokeheader">
                <h3>Welcome to my Pokemon App</h3>
            </div>
            <div className="pokemon-container">
                {pokemonData.map((pokemon, index) => {
                    return <PokemonCard key={index} pokemon={pokemon}/>
                })}
            </div>
            <button onClick={prevPage} className="btn btn-success">Previous Page</button>
            <button onClick={nextPage} className="btn btn-info">Next Page</button>
        </div>
    )
}