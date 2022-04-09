const ticketCollection=require('./tickets');

exports.sellingTickets=(req,res,next)=>{
   const{username,price}=req.body;
   const ticket=ticketCollection.create(username,price);
   res.status(201).json({
      message:'Ticket Created successfully',
      ticket,
   });
}


exports.sellBulkTicket=(req,res,next)=>{
    const {username,price,quantity}=req.body;
    const tickets=ticketCollection.createBulk(username,price,quantity);
    res.status(201).json({
       message:'Ticket Created Successfully',
       tickets,
    });
}




//Find Controllers
exports.findAll=(req,res,next)=>{
   const tickets=ticketCollection.find();
   res.status(200).json({items:tickets,total:tickets.length});
};


exports.findById=(req,res,next)=>{
   const id=req.params.id;
   const ticket=ticketCollection.findById(id);
   if(!ticket){
      return res.status(404).json({message:'404 Not Found'});
   }
   res.status(200).json(ticket);
}


exports.findByUsername=(req,res,next)=>{
   const username=req.params.username;
   const tickets=ticketCollection.findByUserName(username);
   res.status(200).json({items:tickets,total:tickets.length});
}


//Update Controllers
exports.updateById=(req,res,next)=>{
   const id=req.params.id;
   const ticket=ticketCollection.updateById(id,req.body);
   if(!ticket){
      return res.status(404).json({message:'404 Not Found'});
   }
   res.status(200).json(ticket);
}

exports.updateByUserName=(req,res,next)=>{
   const username=req.params.username;
   const tickets=ticketCollection.updateBulk(username,req.body);
   res.status(200).json({item:tickets,total:tickets.length});
}



//Delete Controllers
exports.deleteById=(req,res,next)=>{
   const id=req.params.id;
   const isDeleted=ticketCollection.deleteById(id);
   if(isDeleted){
      return res.status(204).send();
   }
   res.status(404).json({message:'Delete Operation Faild!Try Again'});
}


exports.deleteByUserName=(req,res,next)=>{
   const username=req.params.username;
   ticketCollection.deleteBulk(username);
   res.status(204).send();
}



//draw Controller for find winner
exports.drawControler=(req,res,next)=>{
   const wc=req.query.wc ?? 3;//if you don't pass wc(wc===nul/undefined) then print 3 
   const winners=ticketCollection.draw(wc);
   res.status(200).json(winners);
}

