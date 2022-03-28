const express=require('express');
const app=express();

//আমাদের তৈরি করা Middleware globally ব্যবহার করলাম 
app.use(middlewareSignature);

function middlewareSignature(req,res,next){
    console.log(`${req.method} - ${req.url}`);
    console.log(`I am global middleware`);
    
    if(req.query.bad){//Bad request আসলে 
        return res.status(400).send('Bad request');
    }

    next();
}


function localMiddleware(req,res,next){
    console.log(`I am Local Middleware`);
    next();
}

app.get('/',(req,res)=>{
    res.send('Hello Root Route');
});

/*
 local ভাবে middleware set করতে চাইলে app.use() ব্যবহার করতে 
 হবে না, app.use() মানে হল middleware টা globally set করে দেয়া।
*/
app.get('/need',localMiddleware,(req,res)=>{
   res.send('Hello Local Middleware');
});

app.listen(4000,()=>{
    console.log("Hello Port 4000");
});



