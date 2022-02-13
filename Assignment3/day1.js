let arr=[1,34,56,74,68];

//Imperative বা Procedural way তে Travers kora
for(let i=0;i<arr.length;i++){
   console.log(`index:${i} value:${arr[i]}`);
}


//Declerative way তে Travers করা [Built in method]
arr.forEach((value,index,arr)=>{
   console.log(`index:${index} value:${value} Array:${arr}`);
});
console.log(``);//Empty line
/*
  forEach() এ argument আকারে যে function pass করা হয়, তার 
  Parameter এ ৩ টি item pass করা যায়। 
  প্রথমটাঃValue
  দ্বিতীয়টাঃindex
  তৃতীয়টাঃওই Array টা


  আমি যদি চাই value আর index বাদ দিয়ে শুধু Array টা show করাতে 
  তখন value ও index এর জায়গায় Underscore( _ ) ব্যবহার করতে 
  হবে। তবে arrow function এ পর পর ২ টা Underscore( _ ) ব্যবহার 
  করলে এটা error throw korbe

*/


//Underscore এর মাধ্যমে value ও index Skip করিছি
arr.forEach(function(_,_,arra){
  console.log(`Array:[${arra}]`);
});

 
/*
Error Show করবে কারণ forEach() এর Argument এ Arrow Function
ব্যবহার করেছি।

arr.forEach((_,_,arra)=>{
    console.log(`Array:[${arra}]`);
});
*/
console.log(``);//Empty line




/*এই Array থেকে শুধু Number গুলা বের করতে হবে, কোন নতুন Array 
তৈরি করা যাবে না। এই সিস্টেমে করলে memory তে জায়গা কম লাগবে।
*/
let arr2=[1,2,3,null,false,6];

count=0;
for(let i=0;i<arr2.length;i++){
   for(let j=i;j<arr2.length-1;j++){
       if(!arr2[j]||typeof(arr2[j])!=="number"){
           arr2[j]=arr2[j+1];
           arr2[j+1]=undefined;
       }
   }
   
   if(arr2[i]==undefined){
       count++;
   }
  
}
arr2.length-=count;//undefined 2 টা বাদ দিলাম
console.log(arr2);
/*
   i=0 তে,

   j=3
   1,2,3,false,undefined,6
   j=4
   1,2,3,false,6,undefined
new array [1,2,3,false,6,undefined]
   
 
   i=1 তে,

   j=3
   1,2,3,6,undefined,undefined
   j=4
   1,2,3,6,undefined,undefined
new array [1,2,3,6,undefined,undefined]

   
   i=2 তে,
   j=4
   1,2,3,6,undefined,undefined
new array [1,2,3,6,undefined,undefined]

   
   i=3 তে,
   j=4
   1,2,3,6,undefined,undefined
new array [1,2,3,6,undefined,undefined]


  i=4 তে
  j=4
  1,2,3,6,undefined,undefined
new array [1,2,3,6,undefined,undefined]
  

  i=5 তে
  j তে প্রবেশ করবে না, কারণ j=5 হওয়া সম্ভব না।
Array [1,2,3,6,undefined,undefined]
*/
console.log(``);//Empty line










//এই Array থেকে শুধু Number গুলা বের করতে হবে
let arr3=[1,2,3,null,false,'','test',5,6];
let arr4=[];

for(let i=0;i<arr3.length;i++){
    if(typeof(arr3[i])=="number"){//check type
       arr4.push(arr3[i]);
    }
}
console.log(arr4);
console.log(``);//Empty line





let objArr=[
   {id:1,value:10},
   {id:2,value:20},
   {id:3,value:30},
   {id:4,value:40},
   {id:5,value:50},
];


//Nidristo আইটেম খুজে বের করা
let findItem=objArr.find((item)=>item.id==4);
console.log(findItem);//4 no id এর item টা বের করে নিয়ে এসেছে

findItem.value=5000;//4 no id এর item টার value কে 5000 করে দিলাম 
console.log(objArr);//মুল Array change হয়ে গেছে। 
/*
   find() Method Mutable Way তে কাজ করে, কারণ এটা মুল Array কে
   change করে ফেলে।
*/
console.log(``);//Empty line





let newObj=objArr.filter((item)=>item.id!==4);
console.log(newObj);//4 no id এর item টা delet করে দিলাম
/*
  filter() Method immutable way তে কাজ করে, মানে মুল Array কে 
  change করে না। নতুন Array তৈরি করে ।
*/
