const router = require("express").Router();

module.exports = function() {

    // ENDPOINT FECHA
    router.get('/date',(req,res)=>{
        res.send(`Buenos días, la fecha de hoy es ${new Date()}`).status(200);
    });

    return router;
}