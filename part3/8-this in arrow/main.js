// this in arrow function


const data={
    name:"ali",
    hi:()=>{
        console.log(this)
    }
};


data.hi(); /* window */
const x=data.hi;
x();/* window */

