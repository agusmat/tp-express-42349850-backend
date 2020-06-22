var express = require('express');
var app = express();
const { mongoose } = require('./database')
const cors = require('cors');
//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/asistente', require('./routes/asistente.route.js'));
app.use('/api/mensaje', require('./routes/mensaje.route.js'));
app.use('/api/empresa', require('./routes/empresa.route.js'));
app.use('/api/adelanto', require('./routes/adelanto.route.js'));
app.use('/api/pasaje', require('./routes/pasaje.route.js'));
app.use('/api/palabra', require('./routes/palabra.route.js'));

//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});
