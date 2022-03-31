const express=require('express');
const morgan=require('morgan');

const app=express();
app.use(morgan('dev'));
//routes file টা require করলাম 
app.use(require('./routes'));



/*
  express.static এর ফলে আমরা সহজেই automatically Static File 
  গুলো Access করতে পারব। localhost:4000/filename.format
*/
app.use(express.static('staticFile'));


//Error Handling
app.use((req,res,next)=>{
   const error=new Error(`<h1>404 Not Found</h1>`);
   error.status=404;
   next(error);
});

//Globally
app.use((err,req,res,next)=>{
    console.log('Error',err);//log এ সকল Error Show করবে 
    if(err.status){
      return res.status(err.status).send(err.message);
    }
    res.status(500).send(`<h1>Something Went Wrong</h1>`);//server Error code 500

});




app.listen(4000,()=>{
    console.log(`Listening Port 4000`);
});

