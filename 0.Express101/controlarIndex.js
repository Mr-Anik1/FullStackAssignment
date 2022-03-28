const express=require('express');
const morgan=require('morgan');

const app=express();
app.use(morgan('dev'));
//routes file টা require করলাম 
app.use(require('./routes'));


app.listen(4000,()=>{
    console.log(`Listening Port 4000`);
});

