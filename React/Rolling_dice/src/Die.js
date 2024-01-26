import React, { Component } from "react";
import "./Die.css"

class Die extends Component {
    render() {
        const props = this.props;
        return <i
            className={`Die fas fa-dice-${props.face} ${this.props.rolling ? "rolling" : ""}`}
        />
    }
}

export default Die;