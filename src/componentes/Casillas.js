import { useState } from "react";

function Casilla(props) {
    let color = "boton casillas";
    if (props.val != 0) {
        switch (props.val) {
            case 2:
                color = "boton casillas rojo"
                break;
            case 3:
                color = "boton casillas naranja"
                break;
            case 4:
                color = "boton casillas rosa"
                break;
            case 5:
                color = "boton casillas lila"
                break;
            default:
                color = "boton casillas cyan";
                break;
        }
    }
    return (
        <button className={color}></button>
    )
}

export default Casilla;