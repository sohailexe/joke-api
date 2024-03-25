const express = require('express');
const bodyParser = require('body-parser');

const router= require("./routes/router")

const port = 3000;

const app = express();
//middle wares
app.use(bodyParser.urlencoded({ extended: true }));


app.use(router)
// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });