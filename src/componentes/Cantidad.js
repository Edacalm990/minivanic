
function Cantidad (props) {
    return (
        <div id="tableroMinas">
            <h2 className="textoAmarillo">{props.texto}</h2>
            <p>{props.numero}</p>
            <button className="boton rojo" onClick={props.mas}>+</button>
            <button className="boton rojo" onClick={props.menos}>-</button>
        </div>
    )
}

export default Cantidad;