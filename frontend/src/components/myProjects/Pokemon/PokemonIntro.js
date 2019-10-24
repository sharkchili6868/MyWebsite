import React from 'react';
import './PokemonIntro.css';
import { Link } from "react-router-dom";

export default function PokemonIntro() {
    return(
        <Link id="pokeurl" to='/project/pokemon'>
            <p>
                <img className="pikachu" alt="pikachu" src="https://secure.img1-ag.wfcdn.com/im/33998561/resize-h600%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg"/>
                Do you like Pokemon? Then this App is right for you. I used the Pokemon API, which is free source Pokemon
                database allow you to browser all Pokemons' information for free. You can also use the pagination function below
                to browser more Pokemons. By the way, my favorite pokemon is of course Pikachu.
            </p>
        </Link>
    )
}