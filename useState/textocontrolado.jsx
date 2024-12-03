import React, { useState } from 'react';

function TextoControlado() { 
    const [texto, setTexto] = useState(valorInicial);
    const text= (event) => {
        setTexto(event.target.value);
    };

return (
     <div> 
        <h1>Texto Controlado</h1>
        <p>{texto}</p> 
        <button onClick={()=> setTexto (novoValor)}>Alterar Estado</button> 
        <input>
        value={texto}
        onChange={text}
        </input>
        <p>Texto digitado: {texto || "Nenhum texto digitado ainda."}</p>
        </div> 

        );

}

export default TextoControlado