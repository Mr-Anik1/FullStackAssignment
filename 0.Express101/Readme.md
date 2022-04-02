> ### ***nodemon install করার কারণ হল, বার বার আমাদের server on/off করতে হবে না। code save করলেই automatic server reload হবে।***
`npm i -D nodemon`

**কোন কিছু ***devDependencies*** আকারে ***install*** করার জন্য**

`npm i -D [package name]`

-D দ্বারা "devDependencies" বুঝায় 

 
```
{
  "name": "0.express101",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {//এই script গুলা নিজের সুবিধার জন্য লিখা, npm run dev/start দিলে প্রোজেক্ট run করবে
    "start": "node index.js",
    "dev": "nodemon index.js"
  }, 
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.3"
  },
  "engines": {//Node এর কোন version ব্যবহার করছি সেটা, ফলে অন্য ডেভেলপার সহজেই বুঝতে পারবে
    "node": "16.14.0"
  },
  "devDependencies": {//এটা project এর কোন অংশ না,এটা Developer এর সুবিধার জন্য
    "nodemon": "^2.0.15"
  }
}
```


