import React from "react";


const DetallesRender = ({detalles}) => {


  return (
    <div className="detallescontenedor" key={detalles.id}>
      <div className="peflyer">
        <img className="flyer" src={detalles.img} alt={detalles.nombre} />
      </div>

      <div className="peinfo">
        <h4 className="petitle">{detalles.nombre}</h4>

        <ul>
          <li>
            <b>Fecha:</b>
            {detalles.fecha}
          </li>

          <li>
            <b>Lugar:</b> {detalles.lugar}
          </li>

          <li>
            <b>Hora:</b> {detalles.hora}
          </li>

          <li>
            <b>Género:</b> {detalles.genero}
          </li>
        </ul>
      </div>
      <div className="peinfo2">
        <ul>
          <li>
            <b>Ubicación:</b> {detalles.ubicacion}
          </li>

          <li>
            <b>Accesos:</b> {detalles.accesos}
          </li>

          <li>
            <b>Contacto:</b> {detalles.contacto}
          </li>

          <li>
            <b>Organiza:</b> {detalles.organiza}
          </li>

          <li>
            <b>Djs:</b> {detalles.djs}
          </li>
        </ul>
      </div>
      <div className="descripcion">
        <span>
          <b>Descripcion:</b>
        </span>
        <p>
            {detalles.descripcion}
        </p>
      </div>
    </div>
  );
};

export default DetallesRender;
//width="120px" height="190px"
