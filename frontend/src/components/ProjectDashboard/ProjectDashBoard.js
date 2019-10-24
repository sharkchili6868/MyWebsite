import React from 'react';
import Header from "../Header/Header";
import PokemonIntro from "../myProjects/Pokemon/PokemonIntro";

export default function ProjectDashBoard() {
    return (
            <div>
                <Header direction="/" name="Home"/>
                <PokemonIntro/>
            </div>
    )
}