let arr=[
    {
        id:1,
        name:'Anik',
        email:'anik@gmail.com',
    },
    {
        id:2,
        name:'Manik',
        email:'manik@gmail.com',
    },
    {
        id:3,
        name:'Tonik',
        email:'tonik@gmail.com',
    },
];

//for i দিয়ে কোন Array এর index বের করা হয়
for(let i in arr){
   console.log(i);
}
console.log(``);


//for of দিয়ে কোন Array এর value বের করা হয়
for(let v of arr){
   console.log(v);
}
console.log(``);








//নতুন ডাটা 
let updatedObj={
    name:'Chagol',
    price:20000,
}

//index বের করার জন্য
let updatedIndex=arr.findIndex((item)=>item.id==2);

//index ধরে Update করে দিলাম
arr[updatedIndex]={
    ...arr[updatedIndex],//আগের ডাটা গুলো বসবে
    ...updatedObj,//নতুন data বসবে,আগের গুলোর মিল পেলে সেটা replace করে দিবে।
}

console.log('Updated',arr);
/*
Updated Array:2 নং id এর Data Update হয়ে গেছে 
   [
        { id: 1, name: 'Anik', email: 'anik@gmail.com' },
       { id: 2, name: 'Chagol', email: 'manik@gmail.com', price: 20000 },
      { id: 3, name: 'Tonik', email: 'tonik@gmail.com' }
   ]

*/