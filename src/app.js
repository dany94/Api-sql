import express  from "express";
import config from "./config";

//Empezando con las rutas
import productsRouters from './routes/products.router'
//iniciando express
const app = express()

//let port
//settings puerto
app.set('port',config.port || 3000)

//middlewares
app.use(express.json())
/// para que epueda enviar datos desde un formulario por POST
app.use(express.urlencoded({extended:false}))

//Archivo rutas
app.use(productsRouters)

export default app