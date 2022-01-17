import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(<header className="headerglobal">
        <nav className="barrasup">
                 <Link to ="/" class="inicio">Inicio</Link>
        </nav> 
        </header>)
}




export default Header;