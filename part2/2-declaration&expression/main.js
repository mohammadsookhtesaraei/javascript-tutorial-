

// function declaration

function hell(name) {
    console.log(name)
};



hell("ali");



// function expression


const number=function(num){
    console.log(num +5)
};

number(5);


// function declaration


function hell(str) {
    const result=str.split(" ").slice(0,1).join("")
    return result
};


const slice=hell("hello my name is Ali");
console.log(slice);


// function expression

const xr=function(num) {
 const result=num*2;
 return result
};



const final=xr(5);
console.log(final)