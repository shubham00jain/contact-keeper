const express = require('express');
const router = express.Router();


router.get('/', (req,res) =>{
    res.send("Get logged in USER!!!");
});


router.post('/', (req,res) =>{
    res.send("Authenicate a USER!!!");
});

module.exports = router;