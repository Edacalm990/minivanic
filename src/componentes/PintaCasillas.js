import { useState } from "react";
import { keysUnicas } from "../miscelanea/funciones";
import Casilla from "./Casillas";

function PintaCasillas(props){

    return props.matriz.map((x,xi)=>{
        return <div className="casillas" key={keysUnicas()}>
            {
            x.map((y, yi)=>{
                return (xi==props.posicion[0] && yi==props.posicion[1])
                        ?<Casilla key={keysUnicas()} val={props.matriz[xi][yi]} ></Casilla>
                        :<Casilla key={keysUnicas()} val={0}></Casilla>;
            })
            }
        </div>
    });
}

export default PintaCasillas;