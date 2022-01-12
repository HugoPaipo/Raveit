const express = require('express')
const bodyParser = require ('body-parser')
const sequelize = require ('./infraestructura/db')

const app = express();

const routes = require('./routes/routes');
const migrar = require('./infraestructura/inicializar');



function cors(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    
} 


//middlewares  -- metodo que se ejecuta antes de que llegue a un controlador 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Cuando reciba algun tipo de dato en un peticion la convierto en json, en cada petion

//cors, configurar cabeceras http
app.use(cors);

app.get('/healt',async(req,res)=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        res.sendStatus(200)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        res.sendStatus(510)
      }
})

app.use('/eventos',routes)




app.listen(8080,()=> {
  sequelize.sync({alter:true})
 
  console.log("App is listening in port 8080")
})