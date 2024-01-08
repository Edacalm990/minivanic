
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaReact, IconName } from "react-icons/fa";

function Movimiento (props) {
    let contenido='';
    switch (props.direccion) {
        case 'arriba':
            contenido=<FaArrowUp/>;
            break;
        case 'derecha':
            contenido=<FaArrowRight/>;
            break;
        case 'izquierda':
            contenido=<FaArrowLeft/>;
            break;
        case 'abajo':
            contenido=<FaArrowDown/>;
            break;
        default:
            break;
    }
    return <button className="boton rojo btnDireccion" onClick={props.mov}>{contenido}</button>
}

export default Movimiento;