function PantallaInicial (props) {
    return <div id='pantallaInicial'>
    {props.estado()}
    <h1>¿Deseas Jugar al Minivanic?</h1>
    <button className="boton btnPP" onClick={props.iniciarPartida}>Jugar</button>
  </div>
}

export default PantallaInicial;