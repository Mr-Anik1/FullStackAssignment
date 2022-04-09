const express=require('express');
const cors=require('cors');
const morgan=require('morgan');


const app=express();

app.use([cors(),morgan('dev'),express.json()]);

app.use(require('./route'));

//For Testing
app.get('/test',(req,res)=>{
    res.status(200).json({message:"OK"});
});




//Error handling
app.use((req,res,next)=>{
    const error=new Error('404 not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
   console.log(error);
   if(error.status){
       return res.status(error.status).json({message:error.message});
   }
   res.status(500).json({message:'Something went wrong'});
});


//Listening Port
const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

