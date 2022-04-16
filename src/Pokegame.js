import React, { Component } from "react";
import './Pokegame.css'
import Pokedex from "./Pokedex";

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 78},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 65},
            {id: 18, name: 'Pidgeot', type: 'flying', base_experience: 55},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 47},
            {id: 54, name: 'Psyduck', type: 'water', base_experience: 61},
            {id: 71, name: 'Vectreebel', type: 'plant', base_experience: 65},
            {id: 121, name: 'Starmie', type: 'water', base_experience: 68},
            {id: 135, name: 'Jolteon', type: 'electric', base_experience: 75},
            {id: 144, name: 'Articuno', type: 'Ice', base_experience: 80},
            {id: 146, name: 'Moltres', type: 'fire', base_experience: 80},
        ]
    }
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];

        while (hand1.length < hand2.length) {
            let randIndex = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIndex, 1)[0];
            hand1.push(randPokemon)
        }

        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

        return (
            <div className="Pokegame">
                <h1>POKEGAME</h1>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        )
    }
}

export default Pokegame;