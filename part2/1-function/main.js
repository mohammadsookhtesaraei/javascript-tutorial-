

// function


function hell() {
    console.log("hello world")
};



hell();



function hello(name) {
    console.log(name)
};


hello("Ali");


function sum(n1,n2){
    console.log(n1+n2)
};



sum(5,5);




function data(n1,n2,n3){
    const x=(n1+n2) * n3;
    return x;
};



console.log(data(5,5,2));

const y=data(5,3,3);
console.log(y);





// hello world


function reverse(str) {
    return str.split("").reverse().join("");
};


console.log(reverse("hello world"));
const k=reverse("mohammad");
console.log(k);



// 123
// -421

function numberReverse(number) {
  const m=number.toString().split("").reverse().join("");
  return parseInt(m) * Math.sign(number);
};

console.log(numberReverse(123));
console.log(numberReverse(-421));



function palindRome(str) {
    const x=str.split("").reverse().join("");
     return x===str
};


console.log(palindRome("گرگ"));
console.log(palindRome("دود"));
console.log(palindRome("abcdfgh"));


