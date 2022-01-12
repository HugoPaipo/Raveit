import React from "react";
import { Link } from "react-router-dom";


const MainIndex = (props) =>{
    return(
    <main className="indexmain">
    <div className= "divMain">     
           <Link role="button" to ="/eventos" id="irmain" className = "botonirmain">EVENTOS</Link>
     
           
   
           <h3> "et dicunt deleniti gubergren Mel id clita mollis " </h3>
            
           <h3 className="h3pc"> et dicunt deleniti gubergren mei. Mel id clita mollis </h3>
             
           <h3 className="h3pc"> et dicunt deleniti gubergren mei. Brute munere corrumpit  </h3> 
   </div>
</main>

    )
}

export default MainIndex;