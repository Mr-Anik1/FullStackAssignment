> ## ***ejs*** হল একটা Template Engine 
### ejs Installation
### `npm i ejs`

### **ejs setup**
```
app.set('view engine','ejs');

app.set('views',__dirname + '/views');//এইখানে views নামক একটা folder তৈরি করে সেটা set করা হয়েছে।
```

***ejs এ javascript code লিখা***

`<%= JsCode %>`

 ***code এর অংশ আরেক code এর file এ link করা***

`<%- include('../partials/head.ejs') %>`