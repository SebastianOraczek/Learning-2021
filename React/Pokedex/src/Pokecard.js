import React, { Component } from "react";
import "./Pokecard.css";

const baseUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
const padToThree = num => (num <= 999 ? `00${num}`.slice(-3) : num)

class Pokecard extends Component {
    render() {
        const props = this.props;
        const imgSrc = `${baseUrl}${padToThree(props.id)}.png`
        return (
            <div className="Pokecard" key={props.id}>
                <h1 className="Pokecard-title">{props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={props.name} />
                </div>
                <div className="Pokecard-data">Type: {props.type}</div>
                <div className="Pokecard-data">Exp: {props.exp}</div>
            </div >
        )
    }
}

export default Pokecard;