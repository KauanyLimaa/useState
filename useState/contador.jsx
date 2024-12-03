import React, { useState } from "react";

function ContadorDeCliques() {

    const [cliques, setCliques] = useState(0);
    const maisCliques = () => {
        setCliques(cliques + 1);
      };

      return (
        <div> 
        <h1>Contador</h1>
        <button
        onClick={maisCliques}>Clique aqui!</button>
        <p> Cliques: {cliques} </p>
    </div>
  );
}

export default ContadorDeCliques