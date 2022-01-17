import React from "react";
import { Link } from "react-router-dom";

const Footer= (props) =>{
    return(<footer className = "footer" >
        
                <Link role="button" className="agregarevento" to={"/agregar"}>Agregar</Link>
                
                <div >
                    <span className="copyr"> Copyright  &#169; 2021 por Hugo Paipó</span>
                </div>
               
                

                
            
         </footer>)}


export default Footer;