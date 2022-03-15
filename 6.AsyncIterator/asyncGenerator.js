const axios = require('axios').default;

async function helloData(){
    const url=`http://jsonplaceholder.typicode.com/users`;
    const {data:users}=await axios.get(`${url}`);
    return users;
}

//Async Generator
async function* asyncGener(users){
    const postUrl=`http://jsonplaceholder.typicode.com/posts`;
    for(let i=0;i<users.length;i++){
        const {data:posts}=await axios.get(`${postUrl}?userId=${users[i].id}`);

        yield posts;
        /*সব post গুলা একবারে আসবে না,আমি যখন next() call করব 
        তখন i এর value এক এক করে বাড়বে আর নতুন userId এর post
        আসবে। */
    }
}

helloData()
.then(async(users)=>{
    const userIterator=await asyncGener(users);
    await userIterator.next();//প্রথম next() call এ userId=1
    console.log((await userIterator.next()).value);//দ্বিতীয় next() call এ userId=2

    console.log(`
    
    `);
    console.log((await userIterator.next()).value.map(v=>v.title));//তৃতীয় next() call এ userId=3 এর সকল title বের করে নিয়ে আসলাম map চালিয়ে। 
})
.catch((e)=>{
    console.log(e);
})












