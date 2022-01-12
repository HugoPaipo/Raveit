import React from "react";
import { Link } from "react-router-dom";

const NavDetalles = () =>{
    return( <nav className="barrape">

    <Link role="button" to ="/eventos" className="volverMain"> Eventos</Link>
    <h2 className="seleccionado">Proximos Eventos</h2>
</nav>

    )
}

export default NavDetalles;