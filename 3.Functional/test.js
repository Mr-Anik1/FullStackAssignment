const awake=(name)=>{
    console.log(`${name} awake up`);
}

const breakfast=(name,food)=>{
    console.log(`${name} is eating ${food}`);
}

const go=(name,destination)=>{
    console.log(`${name} is going to ${destination}`);
}

const back=(name,destination)=>{
    console.log(`${name} is back to ${destination}`);
}

const sleep=(name)=>{
    console.log(`${name} is sleeping`);
}


console.log(`-------------Student Function---------`);
const student=(name)=>{
    awake(name);
    breakfast(name,"rice");
    go(name,"school");
    back(name,"home");
    sleep(name);
}

student("Anik");
console.log(`---------------------------------`);
student("Manik");



console.log(`


Function Composition
`);




const sum=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const times=(a,b)=>a*b;

/*এইখানে Math.abs নামক function এর ভিতরে রয়েছে times নামক
  function টি, আবার times এর ভিতরে রয়েছে sum() ও sub() নামক
  আরও দুটি function

  দিনশেষে sum ও sub এর ফলাফল times ফাংশন ব্যবহার করবে আর times
  এর ফলাফল Math.abs() ফাংশনটি ব্যবহার করবে, এই যে একটা function
  এর ভিতরে আরেকটা function তার ভিতর আরও function এটাকে বলা হয় 
  Function Composition
*/
const result=Math.abs(times(sum(10,20),sub(50,20)));
console.log(result);







console.log(`





Functional Programming
`);
/*
   Benefits of Functional Programmging:

   1.We can store function in a variable
   2.We can store function inside an object/array
   3.We can pass function as an argument
   4.We can also return a function from another function
*/


//function is a value
function testValue(){
    console.log(`Hello I'm Anik`);
}
const fStore=testValue;//fStore variable এ testValue function এর referance store করলাম
fStore();//এখন fStore call করলে কাজ হয়ে যাবে 
console.log(`



`);








//বাতিক্রম Functional Programming [ Run Time ]
/*
   new Function এর মধ্যে প্রথমে parameter এবং শেষে direct 
   function body pass করা যায়। 
*/

const operations=[
    {
        args:[10,40],
        params:['a','b'],
        body:`console.log('a+b=',a+b)`
    },
    {
        args:[10,40],
        params:['a','b'],
        body:`console.log('a-b=',a-b)`
    },
    {
        args:[10,40],
        params:['a','b'],
        body:`console.log('a*b=',a*b)`
    }
];


operations.forEach(item=>{
   const fn=new Function(...item.params,item.body);
   /*যে function নিয়ে কাজ করতে চাচ্ছি তার parameter আর body 
   টা new Function() এ pass করলাম।*/

   fn(...item.args);
   /*
     যেহেতু fn veriable এ function টা store করেছিলাম তাই এখন fn
     call করে দিলাম, এবং তার মধ্যে Argument গুলো pass করে দিলাম।
   */
});
console.log(`

`);




let nArr=['n1','n2','n3','n4'];//ইচ্ছামতো paramater নিলাম
const f1=new Function(
    // 'n1',
    // 'n2',
    // 'n3',
    ...nArr,//spread operator ব্যবহার করে সব parameter বসিয়ে দিলাম
    `
    console.log("All Sum n1+n2+n3=",n1+n2+n3+n4);

    `
);

f1(10,20,30,40);//Argument pass করে দিলাম
