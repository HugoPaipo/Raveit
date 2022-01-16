import React from "react";
import  { useState } from "react";


export const Formulario =() => {

   
    const [nombre, setNombre] = useState("")
    const [fecha, setFecha] = useState("")
    const [lugar, setLugar] = useState("")
    const [hora, setHora] = useState("")
    const [genero, setGenero] = useState("")
    const [img, setImg] = useState("")
    const [ubicacion, setUbicacion] = useState("")
    const [accesos, setAccesos] = useState("")
    const [contacto, setContacto] = useState("")
    const [organiza, setOrganiza] = useState("")
    const [djs, setDjs] = useState("")
    const [descripcion, setDescripcion] = useState("")

    
    

    return(
        <div className="formulario" >
            <form className="form" method="POST" action='http://localhost:8080/eventos' encType="application/json">
                <input className="nombre" 
                    type="text" id="formnombre" placeholder="NOMBRE" name="nombre"
                    onChange={e => setNombre (e.target.value)} value={nombre} required
                    />
          
            
            
                <input className="fecha" 
                    type="text" id="formfecha" placeholder="FECHA" name="fecha"
                    onChange={e => setFecha (e.target.value)} value={fecha}required
                    />
            
           
                <input className="lugar" 
                    type="text" id="formlugar" placeholder="LUGAR" name="lugar"
                    onChange={e => setLugar (e.target.value)} value={lugar}required
                    />
            

            
                <input className="hora" 
                    type="text" id="formhora" placeholder="HORA" name="hora"
                    onChange={e => setHora (e.target.value)} value={hora}required
                    />
          
            
                <input className="genero" 
                    type="text" id="formgenero" placeholder="GENERO" name="genero"
                    onChange={e => setGenero(e.target.value)} value={genero
                    }required/>
      
            
            
                <input className="imgform" 
                    type="text" id="formimg" placeholder="IMAGEN" name="img"
                    onChange={e => setImg (e.target.value)} value={img} required
                    />
                        
            
                <input className="ubicacion" 
                    type="text" id="formubicacion" placeholder="UBICACION" name="ubicacion"
                    onChange={e => setUbicacion (e.target.value)} value={ubicacion}required
                    />
            
            
                <input className="accesos" 
                    type="text" id="formaccesos" placeholder="ACCESOS" name="accesos"
                    onChange={e => setAccesos (e.target.value)} value={accesos}required
                    />
            
           
                <input className="contacto" 
                    type="text" id="formcontacto" placeholder="CONTACTO" name="contacto"
                    onChange={e => setContacto (e.target.value)} value={contacto}required
                    />
            

            
                <input className="organiza" 
                    type="text" id="formorganiza" placeholder="ORGANIZA" name="organiza"
                    onChange={e => setOrganiza(e.target.value)} value={organiza}required
                    />
            

            
                <input className="djs" 
                    type="text" id="formdjs" placeholder="DJS" name="djs"
                    onChange={e => setDjs (e.target.value)} value={djs}required
                    />
            

            
                <input className="descripcion" 
                    type="text" id="formdescripcion" placeholder="DESCRIPCION" name="description"
                    onChange={e => setDescripcion (e.target.value)} value={descripcion}required
                    />
                <button type="submit" value="Submit">Agregar</button>

            </form>
          
            </div>) 
             }  

