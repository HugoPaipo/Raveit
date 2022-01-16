const Eventos = require('./eventos')

async function agregarEvento(req, res) {
    
  
    res.send({ message: 'El evento se ha agregado con éxito', eventos:  await Eventos.create(req.body) });
    }


module.exports={agregarEvento}
