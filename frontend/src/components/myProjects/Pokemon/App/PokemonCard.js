import React from 'react';
import './PokemonCard.css'

export default function PokemonCard({pokemon}) {
    return <div className="pokemon-card">
        <img className="eachpokemon" src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt={`${pokemon.name}`}/>
        <div className="pokemon-name">{pokemon.name}</div>
    </div>
}