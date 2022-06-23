import { useState } from "react";

function Button() {
    const [contador, setContador] = useState(0);
    function visitar(){
       setContador(contador + 1);

    }
    function zeroContador(){

        setContador(0);
     }

    return(
        <div>
            <button onClick={visitar}>Click-me</button>
            <p>Contador de vistas: {contador} </p>
            <button onClick={()=>{setContador(0)}}>ZERAR</button>
        </div>
    );
}
export default Button;