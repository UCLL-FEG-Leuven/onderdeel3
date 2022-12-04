const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('../Client/Public'));

app.listen(port, () => {
    console.log(`NodeJS-Express listening at http://localhost:${port}`)
});