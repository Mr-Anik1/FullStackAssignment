let obj={
    1:{
        id:1,
        name:'Anik',
        email:'anik@gmail.com',
    },
    2:{
        id:2,
        name:'Manik',
        email:'manik@gmail.com',
    },
    3:{
        id:3,
        name:'Tonik',
        email:'tonik@gmail.com',
    },
};


let newObj={
    id:4,
    name:'Fokir',
    email:'fokir@gmail.com',
}



//Add new element
obj[newObj.id]=newObj;




//update obj item
const updatedId=2;
const updatedItem={
    name:'Kukur',
    age:'10 Month',
    price:50000,
};

obj[updatedId]={
    ...obj[updatedId],
    ...updatedItem,
}
console.log('Updated key2',obj);
console.log(``);




//delet obj item
delete obj[updatedId];
console.log('Delete key2',obj);
console.log(`

`);




//object এর key গুলো বের করা 
for(let key in obj){
    console.log(key);
}
console.log(`

`);



//Object এর key গুলোকে Array তে রূপান্তর 
console.log(Object.keys(obj));//[ '1', '3', '4' ]
console.log(`

`);




//Object এর value গুলোকে Array তে রূপান্তর 
console.log(Object.values(obj));
/*
Object এর value গুলোকে Array তে রূপান্তর করলে ওই Array এর উপর 
আমরা সহজেই loop/array method গুলো চালাতে পারব। 

[
  { id: 1, name: 'Anik', email: 'anik@gmail.com' },
  { id: 3, name: 'Tonik', email: 'tonik@gmail.com' },
  { id: 4, name: 'Fokir', email: 'fokir@gmail.com' }
]

*/
console.log(`



`);



//Object এর key গুলোকে Array তে রূপান্তর করে তাদের উপর লুপ চালাব
Object.keys(obj).forEach((key)=>{
    let item=obj[key];
    console.log(item.name,item.email);
})
console.log(`



`);





//Object এর value গুলোকে Array তে রূপান্তর করে তাদের উপর লুপ চালাব
Object.values(obj).forEach((item)=>{
  console.log(`Id:${item.id} Name:${item.name} Email:${item.email}`)
});
/*
    Id:1 Name:Anik Email:anik@gmail.com
    Id:3 Name:Tonik Email:tonik@gmail.com
    Id:4 Name:Fokir Email:fokir@gmail.com

*/
console.log(`


`);






//Array এবং Object এর মধ্যে কোনটায় টাইম বেশি লাগবে সেটার ব্যাখ্যা 
let arr4=[];
let obj4={};
for(let i=1;i<=5000000;i++){
    let ob={
        id:i,
        value:i,
    };

    //for Array
    arr4.push(ob);

    //for obj
    obj4[i]=ob;

}





//4999999 Id যুক্ত Object টা update করব 
let id4=4999999;
let updeteObj={
    value:209,
    name:'Anik',
    email:'anik@gmail.com',
    salary:2000,
    village:'Mandertala',
    age:20,
};





//একই কাজ Array দ্বারা করলে time বেশি লাগে
console.time("checkTime");
// let objCheck=arr4.find((item)=>item.id==id4);
// objCheck.value=120;
let objIndex=arr4.findIndex((item)=>item.id==id4);
arr4[objIndex]={
  ...arr4[objIndex],
  ...updeteObj,
};

// let updateObj=arr4.find((item)=>item.id==id4);
// console.log(updateObj);

console.timeEnd("checkTime");//checkTime: 143.962ms






//একই কাজ Object দ্বারা করলে time কম লাগে
console.time("Time");

obj4[id4]={
    ...obj4[id4],
    ...updeteObj,
}


console.timeEnd("Time");//Time: 0.037ms
console.log(`

`);







//100000 id টার সবকিছু delete করব 
let nId=100000;


//Array Delete Method
console.time("ArrayDeleteTime");

let nIndex=arr4.findIndex((item)=>item.id==nId);
arr4.splice(nIndex,1);//1 টা item delete করে দিলাম


console.timeEnd("ArrayDeleteTime");// 16.598ms





//Object Delete Method
console.time("ObjectTime");

delete obj4[nId];
//console.log(obj[id]);

console.timeEnd("ObjectTime");//0.032ms














