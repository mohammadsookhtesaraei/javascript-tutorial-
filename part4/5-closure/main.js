


// closure


function hell(){
    let num=0;

    return function(){
        num++
        return num;
    }
};


const x=hell();
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
const y=hell();
console.log(y());
console.log(y());
console.log(y());
console.log(y());
console.log(y());
console.log(y());
