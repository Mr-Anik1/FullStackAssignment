/*
যা কোন কিছু রিটার্ন করে না সেটা Statement. যেমন variable এ কোন 
কিছু store করা।
Example:
let nam='Anik';
let arr=[1,2,3,4];
for(let i=0;i<=10;i++){
    
}


যা কোন কিছু রিটার্ন করে ,সেটা Expression. যেমন যেকোনো function call
Example:
console.log('something');
sendEmail(students)//function call



**function statement & Expression**
কোন ফাংশন সাধারনভাবে লিখা হলে সেটা function statement
example:
function eat(v){

}


Variable এর মধ্যে কোন function store করা হলে তাকে function 
expression বলে।
Example:
const myEat=function(v){

}


*/



let names=['Anik','MAnik Da','Tonik vai','Hello kitty'];

//Partice-1
let index=-1;
let name=names[++index];

//এটা ১ সেকেন্ড সময় নিবে তাই সবার লাস্টে প্রিন্ট হবে
setInterval(()=>{
    name=names[index++];
    console.log(name,name.length);//print name & length
},1000);

console.log(``);//1 লাইন ফাকা রাখলাম




//Partice-2
for(let i=0;i<4;i++){
    // let name=names[i].toLowerCase();
    console.log(names[i].toLowerCase());//নামগুলো lowerCase এ convert হবে
}
console.log(``);//1 লাইন ফাকা রাখলাম


 



//Practice-3
const students=[
    {
        firstName:'MI',
        lastName:'Anik',
        email:'anik@gmail.com',
        age:21,
    },
    {
        firstName:'Manik',
        lastName:'Mia',
        email:'manikmia@gmail.com',
        age:34,
    },
    {
        firstName:'Rahim',
        lastName:'Ali',
        email:'rahimali@gmail.com',
        age:29,
    },

];


const teachers=[
    {
        firstName:'Mr.',
        lastName:'Alex',
        email:'mralex234@gmail.com',
        age:44,
    },
    {
        firstName:'Joe',
        lastName:'Biden',
        email:'joebiden65@gmail.com',
        age:65,
    },
    {
        firstName:'Donald',
        lastName:'Trump',
        email:'donaldtrump@gmail.com',
        age:60,
    },

];


function sendEmail(arr){
    for(let i=0;i<arr.length;i++){
      console.log(`Sending email to ${arr[i].email}`);
    }
}

sendEmail(students);//সকল ছাত্রছাত্রীদের কাছে ইমেইল চলে যাবে 
console.log(``);//1 লাইন ফাকা রাখলাম
sendEmail(teachers);//সকল শিক্ষকদের কাছে ইমেইল চলে যাবে 



console.log(``);//1 লাইন ফাকা রাখলাম 




