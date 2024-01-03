// this

var age=26;


function hell () {
    console.log(this)
};

hell();/* window */


const data={
    name:"ali",
    hi:function() {
        console.log(this)
    }
};


data.hi(); /* object data */

const global=data.hi;

global(); /* window */