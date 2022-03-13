console.log("Log 1");
function two(){
    setTimeout(() => {
      console.log("Log 2");
    },1000);
}

function three(){
    console.log("Log 3");
}

function four(){
    setTimeout(() => {
      console.log("Log 4");
    },500);

    three();
}
two();
four();
console.log("Log 5");


/*
JavaScript Visualizer 9000 এর মাধ্যমে সহজেই বুঝা যায়। 

   Log-1
   Log-3
   Log-5
   Log-4
   Log-2

*/



/*
   Event Loop হল এমন একটা loop যেটা কিছুক্ষণ পর পর চলতে থাকে, 
   যখন CallStack clear হয়,তখন Event Loop টা একবার ঘুরে Queue 
   থেকে ডাটা CallStack এ পাঠায়।

*/ 



//setTimeout এর মধ্যে রাখলাম কারণ একটু দেরিতে যেন run হয় 
setTimeout(() => {
console.log(`

`);




//Promise
let promise=false;
let nPromise=new Promise((resolve,reject)=>{
  if(promise){
    resolve("Task Complete");
  }else{
    reject("Task Incomplete");
  }
});

nPromise
  .then((res)=>{
     console.log(res);
  }).catch((e)=>{
    console.log(e);
    //console.log("Anik Run Again") //চাইলে এইখান থেকেও Error Message দেওয়া যাবে। 
  });





},3000);



/*
function wait(time){
  const promise=new Promise((resolve)=>{
    setTimeout(resolve,time);//setTimeout() এর handelar এ resolve pass করলাম 
  });
  return promise;
}
*/

//উপরের কোড টা এক লাইনে
const wait=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms));

wait(4000).then(()=>{
  console.log("Done in 4000 ms");
});

wait(5000).then(()=>{
  console.log("Done in 5000 ms");
});













