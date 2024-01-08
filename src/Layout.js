import Tablero from './componentes/Tablero';
import './style.css';


function Layout(props){
    return (
            <div id='contenedor'>
                <header>
                    <h1>Minevanic</h1>
                </header>
                <main>
                    <Tablero 
                    parar={()=>props.parar()}
                    ganar={()=>props.ganarPartida()}
                    perder={()=>props.perderPartida()}
                    ></Tablero>
                </main>
                <footer>
                    <h2>CREADO POR:</h2>
                    <p>Elisabet D'Acosta Almirón</p>
                </footer>
            </div>
    )
}

export default Layout;