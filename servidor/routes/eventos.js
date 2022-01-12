const { DataTypes, Model } = require('sequelize');
const sequelize = require('../infraestructura/db');

class Eventos extends Model {}

Eventos.init({
  
  id: {type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    
  },
  nombre: {
    type: DataTypes.STRING
  },
  fecha: {
    type: DataTypes.STRING
},
  lugar: { 
       type: DataTypes.STRING
      
  },
  hora: {
    type: DataTypes.STRING
},
  genero: {
    type: DataTypes.STRING
},
  img: {
    type: DataTypes.STRING
},
ubicacion: {
  type: DataTypes.STRING
},
accesos: {
  type: DataTypes.STRING
},
contacto: {
  type: DataTypes.STRING
},
organiza: {
  type: DataTypes.STRING
},
djs: {
  type: DataTypes.STRING
},
descripcion: {
  type: DataTypes.STRING
},
},
 {
  
    
  sequelize, 
  modelName: 'Eventos', 
  createdAt: false,
  updatedAt: false,
  timestamps: true,
  tableName: 'eventos'
});


module.exports = Eventos