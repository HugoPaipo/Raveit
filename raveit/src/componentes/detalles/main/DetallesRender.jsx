import React from "react";


const DetallesRender = ({evento}) => {


  return (
    <div className="detallescontenedor" key={evento.id}>
      <div className="peflyer">
        <img className="flyer" src={evento.img} alt={evento.nombre} />
      </div>

      <div className="peinfo">
        <h4 className="petitle">{evento.nombre}</h4>

        <ul>
          <li>
            <b>Fecha:</b>
            {evento.fecha}
          </li>

          <li>
            <b>Lugar:</b> {evento.lugar}
          </li>

          <li>
            <b>Hora:</b> {evento.hora}
          </li>

          <li>
            <b>Género:</b> {evento.genero}
          </li>
        </ul>
      </div>
      <div className="peinfo2">
        <ul>
          <li>
            <b>Ubicación:</b> {evento.ubicacion}
          </li>

          <li>
            <b>Accesos:</b> {evento.accesos}
          </li>

          <li>
            <b>Contacto:</b> {evento.contacto}
          </li>

          <li>
            <b>Organiza:</b> {evento.organiza}
          </li>

          <li>
            <b>Djs:</b> {evento.djs}
          </li>
        </ul>
      </div>
      <div className="descripcion">
        <span>
          <b>Descripcion:</b>
        </span>
        <p>
            {evento.descripcion}
        </p>
      </div>
    </div>
  );
};

export default DetallesRender;
//width="120px" height="190px"
