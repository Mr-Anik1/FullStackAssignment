
//Pure Function
function sum(a,b){
  return a+b;
}
console.log(sum(10,20));
/*
  উপরের sum() function টার কোন side effect নাই। মানে এটা কারো 
  data change করে না। 
*/



//Impure Function
let arr2=[5,6,7];
function Ichange(data){
  arr2.push(data);
}
Ichange(8);
console.log(arr2);
/*
  এই function টার side effect আছে। Function টার parameter এ 
  কোন reference pass করা হয়নি, তারপরেও এটা arr2 কে change 
  করেছে। তাই এটা Impure Function.

*/


//Impure Function
function logFunk(msg){
  console.log(msg);
}
logFunk("Hello");
/*
  কোন function এর মধ্যে console.log করা হলে সেই Function টা 
  Impure হয়ে যাবে। 
*/
console.log(`


`);






/*
   Higher Order Function হওয়ার শর্তঃ-

   1.Function কে Argument আকারে Pass করা যাবে।
   2.একটি Function কে আরেকটা Function এর ভিতর থেকে return করা যাবে। 



   Hidden Concept:-
   1.Scope
   2.Closure
   3.Excution context
   4.Hoisting
*/


const sum1=(a,b)=>a+b;
const sub1=(a,b)=>a-b;

function hF(max,cb){
  let n1=Math.floor(Math.random()*max);
  let n2=Math.floor(Math.random()*max);
  console.log(`Numbers are N1:${n1} N2:${n2}`);
  let result=cb(n1,n2);
  return result;
}

console.log(hF(10,sum1));
console.log(`Substraction:${hF(10,sub1)}`);
/*
  hF function এর মধ্যে sum1/sub1 function কে argument আকারে 
  pass করেছি, তাই hF() higher Order Function
*/




function numPower(n){
  return function(p){//return another Function
    let result=1;
    for(let i=1;i<=p;i++){
      result*=n;
    }
    return result;
  }
}

console.log(numPower(2)(4))
/*
   numPower() Function এর মধ্যে আরেকটা function return করেছি 
   তাই numPower() একটা Higher Order Function.
*/


//Lexical Scope buji ni




//excution context Try Run & Debug
function a(){
  console.log("I am A");

}

function b(){
  a();
}

function c(){
  b();
  b();
}

function d(){
  c();
  a();
}

d();
console.log(`


`);



//IIFE
(function(){
  console.log("Hi i'm IIFE");
})();



((msg)=>{
  console.log(msg);
})("Arrow Function IIFE");


