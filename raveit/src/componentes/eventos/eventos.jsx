import React, { useEffect, useState } from 'react';
import Footer from "../global/Footer.jsx";
import Header from "../global/Header.jsx";
import MainEventos from "./main/mainEventos";
import NavEventos from "./nav/navEventos";

const EventosComponentes = () => {
    const [eventos, setEventos] = useState([]);
    const [filtrados, setFiltrados] = useState(mostrarTodo);

    function mostrarTodo() {
        return () => true;
      }

        useEffect ( ()=>{
        fetch('http://localhost:8080/eventos')
          .then((data) => data.json())
          .then(data => {
               setEventos(data)})
               
            .catch (error  => console.log(error))
        },[]);
    return( <>
                <Header></Header>
                <NavEventos setFiltrados={setFiltrados} mostrarTodo={mostrarTodo}></NavEventos>
                <MainEventos eventos={eventos} filtrados={filtrados}></MainEventos>
                <Footer></Footer>
            </>    
    )
}

export default EventosComponentes;