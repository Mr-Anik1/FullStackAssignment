const router=require('express').Router();

//controlar Import
const {
    rootControlar,
    aboutControlar,
    helpControalr
  }=require('./controlar');

//router এ controlar file গুলো pass করে দিলাম 
router.get('/help',helpControalr);
router.get('/about',aboutControlar);
router.get('/',rootControlar);



module.exports=router;
//router টা export করে দিলাম যেন অন্য file থেকে এটা access করা যায়। 
