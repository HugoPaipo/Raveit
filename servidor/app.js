const express = require('express')
const bodyParser = require ('body-parser')
const sequelize = require ('./infraestructura/db')
const cors = require('cors')

const app = express();

const routes = require('./routes/routes');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 
app.use(cors());

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