/*
  Generator সবসময় iterator return করে 

  মূলকথা হল iterator এর কাজটা সহজ করার জন্য generator এসেছে।
  function এর পর একটা * দিলে সেটা generator হয়ে যায়। 
  yield এর অর্থ হল at a time আমাকে একটা ডাটা দেও। 

*/



function* myGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
const nIterator=myGenerator();

console.log(nIterator.next());
console.log(nIterator.next());
console.log(nIterator.next());
console.log(nIterator.next());
console.log(nIterator.next());
/*
দেখা গেল এটা iterator এর মতই কাজ করল 

   { value: 1, done: false }
   { value: 2, done: false }
   { value: 3, done: false }
   { value: undefined, done: true }
   { value: undefined, done: true }

*/
console.log(`

`);






/*
   Generator এর মাধ্যমে আমি loop এর control নিয়ে নিলাম, এখন 
   loop আমার মনমতো চলবে। আমি যখন next() call করব ঠিক তখন
   loop এর একটা item প্রিন্ট হবে।
*/
function* loopGenerator(start,stop,step){
   for(let i=start;i<=stop;i+=step){
       yield i;
   }
}
const nIt=loopGenerator(1,20,3);

console.log(nIt.next());
console.log(nIt.next());


//loop এর মাঝে হালকায় গল্প করে নিলাম, পরে মন চাইলে আবার loop চালাব
console.log(`
`);

console.log("Lets Discuss");

console.log(`
`);


//এখন আবার next() call করলাম 
console.log(nIt.next());
console.log(nIt.next());
console.log(nIt.next());
console.log(nIt.next());
console.log(nIt.next());
console.log(nIt.next());
console.log(nIt.next());
/*
   { value: 1, done: false }
   { value: 4, done: false }


   Lets Discuss


   { value: 7, done: false }
   { value: 10, done: false }
   { value: 13, done: false }
   { value: 16, done: false }
   { value: 19, done: false }
   { value: undefined, done: true }
   { value: undefined, done: true }

*/
console.log(`

`);






//Generator দিয়ে IdGenerator তৈরি করা Real Life Example
function* idGenerator(){
    let index=1;
    while(true){
        yield index++;
    }
}

const studentId=idGenerator();
const teacherId=idGenerator();
const parentsId=idGenerator();

console.log(`Student Id:`);
/*
  Generator Object আকারে value আর done return করে 
  { value: 7, done: false } এরকম...
  এখন studentId মানে ওই Object এর value টা চাচ্ছি,
  তাই studentId.next() এর পর .value দেওয়া হয়েছে।  
*/
console.log(`Student-${studentId.next().value}`);
console.log(`Student-${studentId.next().value}`); 
console.log(`Student-${studentId.next().value}`); 
console.log(`Student-${studentId.next().value}`); 
console.log(`Student-${studentId.next().value}`);
console.log(`Student-${studentId.next().value}`); 
console.log(`Student-${studentId.next().value}`); 
console.log(`Student-${studentId.next().value}`); 



console.log(`

Teacher Id:`);
console.log(`Teacher-${teacherId.next().value}`);
console.log(`Teacher-${teacherId.next().value}`);
console.log(`Teacher-${teacherId.next().value}`);
console.log(`Teacher-${teacherId.next().value}`);




console.log(`

Parents Id:`);
console.log(`Parents-${parentsId.next().value}`);
console.log(`Parents-${parentsId.next().value}`);
console.log(`Parents-${parentsId.next().value}`);
console.log(`Parents-${parentsId.next().value}`);
console.log(`Parents-${parentsId.next().value}`);
console.log(`Parents-${parentsId.next().value}`);
console.log(`Parents-${parentsId.next().value}`);
console.log(`Parents-${parentsId.next().value}`);


//1:11



