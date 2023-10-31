const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// cors
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static('public'));

// database
const db = require('./app/models');

db.sequelize.sync({ alter: true }).then(() => {
    console.log('altered Database with { alter: true }');
});

// simple route
app.get('/', (req, res) => {
    res.send('welcome to e-waste management server!');
});

require('./app/routes/auth.routes')(app);
require('./app/routes/collectorAuth.routes')(app);

// setting port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});