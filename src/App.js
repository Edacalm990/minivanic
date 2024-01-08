import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { useState } from 'react';
import PantallaInicial from './componentes/PantallaInicial';

function App() {
  const [jugando, setJugando]= useState(false)
  const [ganar, setGanar]=useState(false)
  const [perder, setPerder]=useState(false)

  function iniciarPartida(){
    setJugando(true);
  }

  function parar(){
    setJugando(false);
    setGanar(false);
    setPerder(false);
  }

  function ganarPartida(){
    setJugando(false);
    setGanar(true);
    setPerder(false);
  }

  function perderPartida(){
    setJugando(false);
    setGanar(false);
    setPerder(true);
  }

  function estado(){
    return (ganar)
    ?<h2 className='tituloPantallaInicial'>Has ganado la partida</h2>
    :(perder)
    ?<h2 className='tituloPantallaInicial textoRojo'>Has perdido la partida</h2>
    :<h2 className='tituloPantallaInicial'>Minivanic</h2>;
  }

  if(jugando){
    return (
      <Layout 
      parar={()=>parar()}
      ganarPartida={()=>ganarPartida()}
      perderPartida={()=>perderPartida()}
      />
    );
  } else {
    return (
      <PantallaInicial 
      estado={()=>estado()} 
      iniciarPartida={()=>iniciarPartida()}
      
      ></PantallaInicial>
    );
  }
  
}

export default App;
