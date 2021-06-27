const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    const queryText = `SELECT * FROM foods
    ORDER BY "rank";`;
    pool.query(queryText)
    .then( result => {
        console.log(result);
        res.send(result.rows);
    }).catch( err => {
        console.log('Error in server side GET', err);
        res.sendStatus(500);
    });
})





module.exports = router;