const express = require('express');
require("dotenv").config()
const cors = require('cors')
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3000

require('./config/database')

app.use(express.json());
app.use(cors())

app.use(routes)

app.listen(port, () => {
    console.log("App is running on port " + port);
});

// app.listen(3030)