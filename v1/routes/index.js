const express = require ('express');

const router = express.Router();

router.route("/").get((req,res) => {
    res.send (`<h1>hola  ${req.baseUrl}</h1>`);

});

module.exports = router;