import { useState } from "react";
import { distancias, crearMatriz } from "../miscelanea/funciones";
import Cantidad from "./Cantidad";
import Casilla from "./Casillas";
import PintaCasillas from "./PintaCasillas";
import Movimiento from "./Movimiento";

function Tablero ({ganar, perder, parar}){
    const [matriz, setMatriz] = useState([[]]);
    const [canMinas, setCanMinas] = useState(10);
    const [sizeMatriz, setSizeMatriz] = useState(10);
    const [jugando, setJugando]= useState(false);
    const [posicion, setPosicion] = useState([0,0]);

    if(posicion[0]==sizeMatriz-1 && posicion[1]==sizeMatriz-1){
        {ganar()}
    } else if(matriz[posicion[0]][posicion[1]]==1){
        {perder()}
    }

    function crearMatrizFinal(){
        if(!jugando){
            let matrizV=crearMatriz(sizeMatriz, canMinas);
            let matrizRellena=distancias(matrizV);
            setJugando(true);
            setMatriz(matrizRellena);
        } else {
            {parar()}
        }
        
    }

    function cantidadMinas(num){
        if (canMinas+num>=1 && (canMinas+num)<((sizeMatriz*2)-2)){
            setCanMinas(canMinas+num);
        }
    }

    function tamanioMatriz(num){
        if (sizeMatriz>=4 && sizeMatriz<50){
            if(canMinas>(((sizeMatriz+num)*2)-2)){
                setCanMinas((((sizeMatriz+num)*2)-2))
            }
            setSizeMatriz(sizeMatriz+num);
        }
    }

    function cambiarDireccion(arr){
        let x=arr[0]+posicion[0];
        let y=posicion[1]+arr[1];
        
        if(x>=0 && x<sizeMatriz && y>=0 && y<sizeMatriz){
            console.log([x,y])
           setPosicion([x,y]) 
        } 
    }

    return (
        <div id='tablero'>
            <div className='tableros'>
                <Cantidad  texto={'MINAS'} numero={canMinas} mas={()=>cantidadMinas(1)} menos={()=>cantidadMinas(-1)}></Cantidad>
                <Cantidad  texto={'TAMAÑO'} numero={sizeMatriz} mas={()=>tamanioMatriz(1)} menos={()=>tamanioMatriz(-1)}></Cantidad>
            </div>
            <div id='cuadro'>
                <PintaCasillas  matriz={matriz} posicion={posicion}></PintaCasillas>
            </div>
            <div className="tableros">
                <Movimiento direccion='arriba' mov={()=>cambiarDireccion([-1,0])}></Movimiento>
                <div>
                   <Movimiento direccion='izquierda' mov={()=>cambiarDireccion([0,-1])}></Movimiento>
                    <Movimiento direccion='derecha' mov={()=>cambiarDireccion([0,1])}></Movimiento> 
                </div>
                <Movimiento direccion='abajo' mov={()=>cambiarDireccion([1,0])}></Movimiento>
                <div id='leyenda'>
                    <h2 className="textoAmarillo">Leyenda</h2>
                    <label className="leyendaTexto">Adyacente</label><label className="boton rojo leyendaTexto"></label>
                    <label className="leyendaTexto">2 distancias</label><label className="boton naranja leyendaTexto"></label>
                    <label className="leyendaTexto">3 distancias</label><label className="boton rosa leyendaTexto"></label>
                    <label className="leyendaTexto">4 distancias</label><label className="boton lila leyendaTexto"></label>
                    <label className="leyendaTexto">+4 distancias</label><label className="boton cyan leyendaTexto"></label>
                </div>
            </div>

            <div className="jugar">
                <button className="boton" onClick={()=>crearMatrizFinal()}>{(!jugando)?'Jugar':'Detener'}</button>
            </div>

            
        </div>
    )
}

export default Tablero;