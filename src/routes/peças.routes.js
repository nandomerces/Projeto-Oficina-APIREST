const express = require('express')
const router = express.Router();

router
    .get('/pecas', (req,res) => res.send('foi'))
    .post('/pecas', (req, res) => res.send('post'))

 module.exports = router;