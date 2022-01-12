import React, { useState } from "react";


const NavEventos = (props) => {
        const [yaFiltrado, setyaFiltrado] = useState(false);
      
        function filtrar() {
          const lugar = document.getElementById('Lugarsel').value;
          const genero = document.getElementById('Generosel').value;
      
          function nuevoFiltro() {
            if (lugar === 'Todos' && genero !== 'Todos') {
              return (evento) => (evento.genero === genero);
            } else if (lugar !== 'Todos' && genero === 'Todos') {
              return (evento) => (evento.lugar === lugar);
            } else if (lugar !== 'Todos' && genero !== 'Todos') {
              return (evento) => (evento.lugar === lugar && evento.genero === genero);
            } else {
              return props.mostrarTodo;
            }
          }
      
          props.setFiltrados(nuevoFiltro);
          setyaFiltrado(true);
        }
      
        function limpiar() {
          props.setFiltrados(props.mostrarTodo);
          setyaFiltrado(false);
        }
      
        const botonTexto = yaFiltrado ? 'Limpiar' : 'Filtrar';
      
        function cliquearBoton() {
          if (yaFiltrado) {
            limpiar();
          } else {
            filtrar();
          }
        }   
    return(<nav className="barra">
                <div className="diveventossel">  
                    <label for="eventossel"></label>
                    <select name="eventossel" id="eventossel">
                         <option value="Proximos">Proximos</option>
                        <option value="Historial">Historial</option>
                </select>
                </div>
                <span>Filtrar por:</span>

                <label for="Generosel"></label>
                <select name="Generosel" id="Generosel">
                    <option  value="Todos" selected={!yaFiltrado}>Género</option>
                    <option value="Techno">Techno</option>
                    <option value="Tech house">Tech house</option>
                    <option value="Trance">Trance</option>
                    <option value="Minimal">Minimal</option>
                    <option value="Garage">Garage</option>
                    <option value="Acid">Acid</option>
                    <option value="Psytrance">Psytrance</option>
                    <option value="Otros">Otros</option>         
    </select>
    
    <label for="Lugarsel"></label>
    <select name="Lugarsel" id="Lugarsel">
            <option  value="Todos" selected={!yaFiltrado}>Lugar</option>
            <option value="Artigas">Artigas</option>
            <option value="Canelones">Canelones</option>
            <option value="CerroLargo">Cerro Largo</option>
            <option value="Colonia">Colonia</option>
            <option value="Durazno">Durazno</option>
            <option value="Flores">Flores</option>
            <option value="Florida">Florida</option>
            <option value="Lavalleja">Lavalleja</option>
            <option value="Maldonado">Maldonado</option>
            <option value="Montevideo">Montevideo</option>
            <option value="Paysandu">Paysandú</option>
            <option value="RioNegro">Río Negro</option>
            <option value="Rivera">Rivera</option>
            <option value="Rocha">Rocha</option>
            <option value="Salto">Salto</option>
            <option value="SanJose">San José</option>
            <option value="Soriano">Soriano</option>
            <option value="Tacuarembo">Tacuarembó</option>
            <option value="Treintaytres">Treinta y Tres</option>      
    </select>
        <button className="filtros" id="botonfiltro"onClick={() => cliquearBoton()} >
        {botonTexto}</button>
    

</nav>

    )
}

export default NavEventos;