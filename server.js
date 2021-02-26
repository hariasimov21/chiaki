const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/option3', express.static(__dirname + '/option3'));
app.use('/option1', express.static(__dirname + '/option1'));
app.use('/option7', express.static(__dirname + '/option7'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
    console.log(`Chiaki esta funcionando en el puerto ${port} ^.^`);
})