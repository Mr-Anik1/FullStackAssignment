const router=require('express').Router();
const {root,about,contact}=require('./controllar');

router.get('/contact',contact);
router.get('/about',about);
router.get('/',root);

module.exports=router;
