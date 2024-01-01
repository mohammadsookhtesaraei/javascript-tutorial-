// map

const arr=["mahsa","sara","ali","javad"];
const numbers=[1,2,3,4,5,6,7,8,9,10];


const upperCaseArr=arr.map((item)=> item.toUpperCase());
console.log(upperCaseArr);

const duplicates=numbers.map((item)=>{
    return item * 2;
});

console.log(duplicates);