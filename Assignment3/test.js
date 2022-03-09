// let arr=[];
// arr[0]=0;
// arr[1]=1;
// function fibo(n){
//     for(let i=2;i<=n;i++){
//        arr[i]=arr[i-2]+arr[i-1];
//     }
//     console.log(arr[arr.length-1]);//n তম fibonacci
// }
// fibo(10);
// console.log(arr);





// let arr=[];
// let obj={};
// for(let i=1;i<=5000000;i++){
//     let ob={
//         id:i,
//         value:i,
//     };
//     arr.push(ob);

//     //for obj
//     obj[i]=ob;

// }



// let id=4999999;
// let updeteObj={
//     value:209,
//     name:'Anik',
//     email:'anik@gmail.com',
//     salary:2000,
//     village:'Mandertala',
//     age:20,
// };





// //একই কাজ Array দ্বারা করলে time বেশি লাগে
// console.time("checkTime");
// // let objCheck=arr.find((item)=>item.id==id);
// // objCheck.value=120;
// let objIndex=arr.findIndex((item)=>item.id==id);
// arr[objIndex]={
//   ...arr[objIndex],
//   ...updeteObj,
// };

// // let updateObj=arr.find((item)=>item.id==id);
// // console.log(updateObj);

// console.timeEnd("checkTime");//checkTime: 93.356ms






// //একই কাজ Object দ্বারা করলে time কম লাগে
// console.time("Time");

// obj[id]={
//     ...obj[id],
//     ...updeteObj,
// }


// console.timeEnd("Time");//Time: 0.042ms
// console.log(`

// `);





// //100000 id টার সবকিছু delete করব 
// let nId=100000;


// //Array Delete Method
// console.time("ArrayDeleteTime");

// let nIndex=arr.findIndex((item)=>item.id==nId);
// arr.splice(nIndex,1);//1 টা item delete করে দিলাম


// console.timeEnd("ArrayDeleteTime");// 16.598ms





// //Object Delete Method
// console.time("ObjectTime");

// delete obj[id];
// //console.log(obj[id]);

// console.timeEnd("ObjectTime");//0.032ms





// //Reduce Method Implement
// let arr=['anik','manik','ali','goli','moli','toli','zoly','kelly','alex','google','mokles','moslem'];

// let result=arr.reduce((acc,cur)=>{
//     let firstLetter=cur[0].toUpperCase();
//     if(firstLetter in acc){
//         acc[firstLetter].push(cur);
//     }
//     else{
//         acc[firstLetter]=[cur];
//     }
   
//     return acc;
// },{});

// Object.keys(result).forEach((key)=>{
//     console.log(key);
//     console.table(result[key]);
// });



// /*
//    Object এ সহজেই নতুন কোন element অ্যাড করা যায়, কোন element 
//    চাইলে Update করা যায়, আবার কোন element Delete ও করা যায়। 
//    সহজ ভাষায় বললে Object এর মাধ্যমে CRUD Operation করা যায়।
// */

// let obj={
//     1:{
//         id:1,
//         name:'Anik',
//         email:'anik@gmail.com',
//     },
//     2:{
//         id:2,
//         name:'Manik',
//         email:'manik@gmail.com',
//     },
//     3:{
//         id:3,
//         name:'Tonik',
//         email:'tonik@gmail.com',
//     },
// };

// /*
//    উপরের obj এ ৩ টি key রয়েছে, আবার প্রতিটি key এর value হিসেবে
//    এক এক টি Object রয়েছে, যেখানে নিদৃষ্ট ব্যক্তির বিভিন্ন তথ্য রয়েছে। আমরা নতুন key create করব এবং তাতে নতুন value রাখব।

// */
// console.log(`



// `);

// //new element
// let newItem={
//     id:4,
//     name:'Fokir',
//     email:'fokir@gmail.com',
// }



// //Add new element
// obj[newItem.id]=newItem;
// console.log(obj);


// /*
//    নতুন item অ্যাড হয়ে গেছে, যা 4 no key তে show করেছে।

// {
//   '1': { id: 1, name: 'Anik', email: 'anik@gmail.com' },
//   '2': { id: 2, name: 'Manik', email: 'manik@gmail.com' },
//   '3': { id: 3, name: 'Tonik', email: 'tonik@gmail.com' },
//   '4': { id: 4, name: 'Fokir', email: 'fokir@gmail.com' }
// }


// */
// console.log(`






// `);





// /*
//    এখন আমরা চাচ্ছি উক্ত Object এর 2 no key এর item Update করতে

// */


// const updatedId=2;//id 
// const updatedItem={
//     name:'Puppy Dog',
//     age:'10 Month',
//     price:50000,
// };

// //Update Item
// obj[updatedId]={
//     ...obj[updatedId],
//     ...updatedItem,
// }
// console.log(obj);



// /*
//    2 no key এর value এর name Update হয়ে Manik থেকে Puppy Dog
//    হয়ে গেছে, এবং আরও কিছু নতুন item অ্যাড হয়েছে।

// '2':{
//      id: 2,
//      name: 'Puppy Dog',
//      email: 'manik@gmail.com',
//      age: '10 Month',
//      price: 50000
//    },

// */


// console.log(`





// `);



// /*
//    Object এ কোন element Delete করা একেবারে সহজ। আমরা এবার 
//    2 no key টা Delete করে দিব।
// */


// //Delete obj item
// delete obj[updatedId];//obj[2]
// console.log(obj);



// /*
// {
//   '1': { id: 1, name: 'Anik', email: 'anik@gmail.com' },
//   '3': { id: 3, name: 'Tonik', email: 'tonik@gmail.com' },
//   '4': { id: 4, name: 'Fokir', email: 'fokir@gmail.com' }
// }

// এখানে দেখা যাচ্ছে 2 no key টা নাই, মানে Delete হয়ে গেছে।
// */




// console.log(`





// `);

















