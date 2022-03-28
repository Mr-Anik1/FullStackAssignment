/*
   controlar তৈরি করার কারণ হল, আমরা যাতে বড় বড় লজিক একটা আলাদা
   file এ লিখতে পারি। পরে file গুলো export করে দিয়ে সেটা router
   file থেকে access করব। যার ফলে সুবিধা হল, router file clean থাকবে। 
*/

const fs=require('fs');

//rootControlar আর aboutControlar Export করে নিলাম 
exports.rootControlar=(req,res)=>{
    fs.readFile('pages/root.html',(err,data)=>{
        if(err){
            console.log('Error',err);
            res.send('Something is wrong!');
        }else{
            res.write(data);
            res.end();
        }
    })
  };



exports.aboutControlar=(req,res)=>{
    fs.readFile('pages/about.html',(err,data)=>{
        if(err){
            console.log('Error',err);
            res.send('Something is wrong!');
        }else{
            res.write(data);
            res.end();
        }
    })
  };


exports.helpControalr=(req,res)=>{
    fs.readFile('pages/help.html',(err,data)=>{
      if(err){
          console.log('Error',err);
          res.send('Something is wrong!');
      }else{
          res.write(data);
          res.end();
      }
    })
};