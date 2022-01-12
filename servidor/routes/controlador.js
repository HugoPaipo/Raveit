const Eventos = require('./eventos')

async function getEventos(req, res){
    res.send(await Eventos.findAll());
}
async function getDetallesPorId(req, res){
    res.send(await Eventos.findByPk(req.params.id));
  };  

module.exports = {
    getEventos,
    getDetallesPorId
  
}