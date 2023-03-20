import freeCodecampLogo from './imagenes/freecodecamp-logo.png'
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  /* valor que queremos usar como el estado que se va actualizar y luego una funcion que va a permitir actualizarlo */
  const [numClics,setNumClics] = useState(0);//0 el estado inial de numClics

  const manejarClic= () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className = "freecodecamp-logo-contenedor">
        <img className='freecodecamp-logo'
        src={freeCodecampLogo}
        alt='logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />

      </div>
      
    </div>
  );
}

export default App;
