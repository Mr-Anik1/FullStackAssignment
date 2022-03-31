const express=require('express');
const app=express();

//npm i ejs
app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use(require('./route'));

app.listen(4000,()=>{
    console.log(`Listening Port on 4000`);
});
