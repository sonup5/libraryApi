const express=require('express');
const router= express.Router();

const handlePostBook=require('../controller/handleBookPost')

router.post('/postBook',handlePostBook);
module.exports = router;
