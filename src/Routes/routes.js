const router = require("express").Router();
const fs = require('fs').promises;

module.exports = function() {

    // ENDPOINT FECHA
    router.get('/date', (req,res) => {
        res.send(`Buenos días, la fecha de hoy es ${new Date()}`).status(200);
    });

    // ENDPOINT TXT
    router.get('/text', async(req,res) => {
        try {
            res.send(await fs.readFile('./lorem.txt', 'utf-8')).status(200);
        } catch (error) {
            res.send(error).status(500);
        }
    })

    // ENDPOINT SALUDO
    router.post('/greeting', (req,res) => {
        const { name } = req.body;
        res.send(`Buenos días ${name}!`).status(200);
    });

    return router;
}