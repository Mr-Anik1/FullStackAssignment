const nam="Anik";
const itIterator=nam[Symbol.iterator]();
console.log(itIterator.next());
console.log(itIterator.next());
console.log(itIterator.next());
console.log(itIterator.next());
console.log(itIterator.next());
console.log(`


`);




//Object কে iterable করা 
const range={
    start:0,
    stop:20,
    step:2,
};

range[Symbol.iterator]=function(){
    let current=this.start;
    let stop=this.stop;
    let step=this.step;

    return{
        next(){
          const obj={
              value:current,
              done:current>stop
          }
          current+=step;
          return obj;
        }
    }
}

//range object টা এখন iterable হয়ে গেছে তাই for of loop চালাতে পারলাম 
for(let v of range){
    console.log(v);
}
