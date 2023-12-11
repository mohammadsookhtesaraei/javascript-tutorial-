// object



const data={
    id:1,
    name:"ali",
    age:25,
    siblings:["sara"],
    address:{
        lng:1236,
        zipCode:123456789
    }
    ,
    car:206
};


// دسترسی به کلید های یک ارایه

console.log(data.id);
console.log(data.name);
console.log(data.age);
console.log(data.siblings);
console.log(data.address);

// چجوری کلید جدید اضافه کنیم

data.city="gorgan";

// چجوری کلید رو حذف کنیم

delete data.city;

// گرفتن همه ی کلیدها


const keys=Object.keys(data);
console.log(keys);

// گرفتن همه مقدارها

const values=Object.values(data);

// دی استراگ ابجکت


const {id,name,age,siblings,address}=data;

// spread operator

const data2={
    city:"gorgan"
};


const spread={...data,...data};
console.log(spread);


// rest operator

const {car,...user}=data;
console.log(user);