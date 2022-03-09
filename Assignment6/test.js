console.log("Log 1");
function two(){
    setTimeout(() => {
      console.log("Log 2");
    },1000);
}

function three(){
    console.log("Log 3");
}

function four(){
    setTimeout(() => {
      console.log("Log 4");
    },500);

    three();
}
two();
four();
console.log("Log 5");


/*
JavaScript Visualizer 9000 এর মাধ্যমে সহজেই বুঝা যায়। 

   Log-1
   Log-3
   Log-5
   Log-4
   Log-2

*/
