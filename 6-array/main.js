// array


const array=["ali","sara","javad","hasan","hamed"];


// یکی از اخر به ارایه اضافه بشه

array.push("jafar");

// یکی از اول اضافه بشه به ارایه

array.unshift("mahsa");

// یکی از اخر حذف بشه

array.pop();

// یکی از اول حذف بشه

array.shift();


// برعکس بشن
const reversed=array.reverse();
console.log(reversed);

// مرتب سازی بر اساس حروف الفبا

console.log(array.sort());

// splice حذف

console.log(array.splice(0,2));


// تبدیل به رشته بشن

console.log(array.join(" "));

// فلت ادغام
const newArr=[[25,26,27],[56,36]];



const flat=newArr.flat();
console.log(flat)

// کانکت

const arr2=flat.concat(array);
console.log(arr2);



// spread operator

const data=["sara","javad"];
const data1=[25,26];
const newData=[...data,...data1];
console.log(newData);


// array destructuring

const user=[
    {id:1,name:"ali",age:25},
    {id:2,name:"amir",age:27},
    {id:3,name:"javad",age:20},

];

const [user1,user2,user3]=user;






