import app from './app'
//import './database/conecction'
app.listen(app.get('port'))

console.log('server on port',app.get('port'));