import React from "react";
import { Link } from "react-router-dom";

const Footer= (props) =>{
    return(<footer className = "footer" >
                 <div >
                    <span className="copyr"> Copyright  &#169; 2021 por Hugo Paipó</span>
                </div>
               
                <Link className="agregarevento" to={"/agregar"}>agregar</Link>

                
            
         </footer>)}


export default Footer;