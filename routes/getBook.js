const express= require('express');
const router=express.Router();
const handleGetBook=require('../controller/handleGetBook');

router.get('/getBook/:bookName',handleGetBook);

module.exports =router;