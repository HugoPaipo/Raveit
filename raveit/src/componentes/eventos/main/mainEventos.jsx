
import React from "react";
import EventoRender from "./EventoRender.jsx";


const MainEventos = (props) => {

const eventos = props.eventos.filter(props.filtrados).map((evento) => (<EventoRender evento={evento}></EventoRender>));



    return(
        <main className = "maineve">
        <aside className="aside1">
                <div>
                      
                </div>
        </aside>
        <aside className="aside2">
                <div>
                     
                </div>
        </aside>      
        <div className="contenedorEventos" id="eventoContenedor">
        {eventos}
        </div> 
</main>
    )}


        
export default MainEventos;
