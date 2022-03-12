/*
   npm init -y
   npm i axios
*/

const axios=require('axios').default;

const USERS_URL='https://jsonplaceholder.typicode.com/users';
const POSTS_URL='https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL='https://jsonplaceholder.typicode.com/comments';


async function getComments(user){

  try{
    const {data:nUser}=await axios.get(`${USERS_URL}?username=${user}`);
    const {data:posts}=await axios.get(`${POSTS_URL}?userId=${nUser[0].id}`);
    const {data:comments}=await axios.get(`${COMMENTS_URL}?postId=${nUser[0].id}`);
    
 
    {//Find postId=4 Comments all e-mail
        comments.find(v=>console.log(v.email));
    }
 
  }catch(e){
      console.log(e.toJSON());//Error Message টা JSON আকারে আসবে 
  }
   

}
   
getComments('Samantha');













