
// forEach 

const arr=["sara","hasan","javad","mahmod","yaser"];
const numbers=[2,4,5,6,7,8,9,10];
const upperCaseArray=[];
const duplicates=[];

arr.forEach((item,index,arr)=>{
    upperCaseArray.push(item.toUpperCase())
});

numbers.forEach((item)=>{
 duplicates.push(item * 2)
})

console.log(upperCaseArray);
console.log(duplicates);