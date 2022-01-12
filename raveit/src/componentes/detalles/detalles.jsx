import React from "react";
import NavDetalles from "./nav/navDetalles";
import MainDetalles from "./main/mainDetalles";
import Header from "../global/Header";
import Footer from "../global/Footer";


const DetallesComponentes = (props) =>{
    return(<>
        <Header></Header>
        <NavDetalles></NavDetalles>
        <MainDetalles id ={props.match.params.id}></MainDetalles>
        <Footer></Footer>
        </>
    )
}
export default DetallesComponentes;