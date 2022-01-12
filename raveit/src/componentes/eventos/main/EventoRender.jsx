import React from "react";
import { Link } from "react-router-dom";


const EventoRender =({evento}) =>{ 
    return(  <Link to = {`/detalles/${evento.id}`}><div className="evento"key={evento.id}>



                <img className="mainflyer" src={evento.img} alt={evento.nombre}/>
                <h4 className="maintitulo">{evento.nombre}</h4>
                <div className="maintexto">

                  
                    <span><b>Fecha: </b> {evento.fecha}</span>
                    <span><b>Lugar: </b> {evento.lugar}</span>
                    <span><b>Hora: </b> {evento.hora}</span>
                    <span><b>Género: </b> {evento.genero}</span>

                </div>
        </div>
</Link>
    )
}
// /
export default EventoRender;