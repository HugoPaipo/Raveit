
import DetallesRender from "./DetallesRender";

import React, { useEffect, useState } from 'react';



const MainDetalles = ({id}) =>{

const [evento, setDetalles] = useState ([])

    

    useEffect ( ()=>{
    fetch('http://localhost:8080/eventos?id='+id)
      .then((data) => data.json())
      .then(data => {
           setDetalles(data)})
           
        .catch (error  => console.log(error))
    },[])


    


    return(  <main className="detallesMain">
    <aside className="peaside1">
        <div></div>
    </aside>
    <aside className="aside2">
        <div></div>
    </aside>{
        evento.length>0 &&
            <DetallesRender evento={evento[0]} >
          
        </DetallesRender>
    }
  {console.log(evento)}  
   
        
        
    </main>


    )
}

export default MainDetalles;