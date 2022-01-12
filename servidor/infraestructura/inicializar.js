const Eventos = require('../routes/eventos')

function migrar() {
    console.log("i'm running")
    eventos.forEach(element => {
        console.log(element)
        Eventos.create(element)
    });
}


let eventos = [
    {
    
    "nombre":"WARP",
    "fecha":"27/09/2021",
    "lugar":"Montevideo",
    "hora":"23:00",
    "genero":"Techno",
    "img":"/imagenes/evento1.jpg"
    },

    {
    
    "nombre":"EVENTO 2",
    "fecha":"18/12/2021",
    "lugar":"Maldonado",
    "hora":"16:00",
    "genero":"Techno",
    "img":"/imagenes/evento 2.jpg" 
    },

    {
    
    "nombre":"EVENTO 3",
    "fecha":"18/09/2021",
    "lugar":"Maldonado",
    "hora":"00:00",
    "genero":"Tech house",
    "img":"/imagenes/evento 3.jpg"},  
 
    {
    
    "nombre":"EVENTO 4",
    "fecha":"8/10/2021",
    "lugar":"Canelones",
    "hora":"16:00",
    "genero":"Techno",
    "img":"/imagenes/evento 4.jpg"
    },


    {
  
    "nombre":"EVENTO 5",
    "fecha":"15/10/2021",
    "lugar":"Montevideo",
    "hora":"23:00",
    "genero":"Tech house",
    "img":"/imagenes/evento 5.jpg"
    },

    {
  
    "nombre":"EVENTO 6",
    "fecha":"19/11/2021",
    "lugar":"Montevideo",
    "hora":"00:00",
    "genero":"Techno",
    "img":"/imagenes/evento 6.jpg"
    },

    {
  
    "nombre":"EVENTO 7",
    "fecha":"15/02/2022",
    "lugar":"Paysandu",
    "hora":"18:00",
    "genero":"Otros",
    "img":"/imagenes/evento 7.jpg"
    },
    {
    
    "nombre":"EVENTO 8",
    "fecha":"18/03/2022",
    "lugar":"Artigas",
    "hora":"21:00",
    "genero":"Psytrance",
    "img":"/imagenes/evento 8.jpg"
     }


]
module.exports = migrar;