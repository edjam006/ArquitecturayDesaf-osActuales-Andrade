const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    const name = req.query.name || 'Mundo';
    res.json({ message: `Hola ${name} desde Docker` });
});

app.listen(port, () => {
    console.log(`App escuchando en puerto ${port}`);
});