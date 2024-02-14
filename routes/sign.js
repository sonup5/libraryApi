const express= require('express');
const handleSignUp=require('../controller/handleSignUp');
const router= express.Router();
router.post('/signup',handleSignUp);
module.exports = router;