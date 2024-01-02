
// every

const arr=[1,2,3,4,5,6];

const final=arr.every((item) => typeof item === "number");
console.log(final);

const arr1=[1,2,"3",4,5,6,7,8];
const result=arr1.some((item)=> typeof item === "number");
console.log(result);