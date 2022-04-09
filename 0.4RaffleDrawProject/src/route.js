const router=require('express').Router();

const {sellBulkTicket,sellingTickets,findAll,findById,findByUsername,updateById,updateByUserName,deleteById,deleteByUserName,drawControler}=require('./controller');


/**
 * router.get('/t/:id')
 * router.put('/t/:id')
 * router.delete('/t/:id')
 * 
 * এই লাইনগুলো নিচের মতো 1 লাইনে লিখা যায়,কারণ route
 * এর path গুলো একই রকম 
 */
router.route('/t/:id').get(findById).put(updateById).delete(deleteById);

router.route('/u/:username').get(findByUsername).put(updateByUserName).delete(deleteByUserName);

router.post('/bulk',sellBulkTicket);
router.get('/draw',drawControler);

router.route('/').get(findAll).post(sellingTickets);


module.exports=router;

