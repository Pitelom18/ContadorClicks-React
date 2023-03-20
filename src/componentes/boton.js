import React from "react";
import '../styles/Boton.css'

/* function Boton(props){
   return(
    <button>
      {props.texto}
    </button>
   ) 
} */

// Para destructuracion se hace lo siguiente:

function Boton({texto, esBotonDeClic, manejarClic}){
  return(
   <button className={ esBotonDeClic?  "boton-clic" : "boton-reiniciar" }
   onClick={manejarClic}>
     {texto}
   </button>
  );
  }

export default Boton;