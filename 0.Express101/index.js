const express=require("express");//Express Import 
const fs=require('fs');
const morgan=require('morgan');

const app=express();


//Morgan Middleware
app.use(morgan('dev'));
/*
   Morgan middlewar আমাদের request log শো করে।
   GET /help 200 4.097 ms - -


   এটা globally set করলাম। আমরা চাইলে nidristo route এ Middleware
   সেট করতে পারি। app.get('/',morgan,(req,res)=>{} 
*/








/* 
  '/' দ্বারা root route বোঝায়, user যখন root route এ hit করবে 
  ডাটা দেখার জন্য,তখন তাকে response back দিতে হবে। যেটা res.send() 
  এর মাধ্যমে করা হয়েছে। 
*/
app.get('/',(req,res)=>{
    res.send(//user কে একটা html file send করলাম 
    `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node JS</title>
    
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 16px;
            }
    
            .container {
                width: 50%;
                margin: 2rem auto;
                padding: 2rem;
                background: #dddeee;
            }
            h1{
                color:rgb(6, 129, 680);
            }
        </style>
    
    </head>
    
    <body>
      <div class="container">
        <h1>Nodemon Save Our Time</h1></br>
         <p>
          Anik Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab dolor, tempore error delectus, dolore
          odio rem minus labore qui dicta aliquam, quidem facere? Dignissimos assumenda quisquam vero iusto soluta!
         </p>
     </div>
    </body>
    
    </html>

    `
    );
});


/*
  html file টা fs require এর মাধ্যমে send করলাম, ফলে এখন আর 
  code এর মধ্যে `` ব্যবহার করে html code লিক্তহে হবে না। 
*/
app.get('/about',(req,res)=>{
  fs.readFile('pages/about.html',(err,data)=>{//pages folder এর about file import করলাম 
      if(err){
          console.log("Error",err);
          res.send(`<h1>Something is wrong,check error message</h1>`);
      }else{
          res.write(data);
          res.end();
      }
  });
});
  

//help route
app.get('/help',(req,res)=>{
    fs.readFile('pages/help.html',(err,data)=>{
        if(err){
            console.log("Error",err);
            res.send(`<h1>Something is wrong</h1>`);
        }else{
            res.write(data);
            res.end();
        }
    })
});



app.listen(4000,()=>{//কোন port এ এটা run হবে 
    console.log("Server is listening on port 4000");
});