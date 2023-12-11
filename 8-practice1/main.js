// یک رشته داریم قسمت دوم اون رو انتقال بدین به یک رشته دلخواه

const str="hello world";
const split=str.split(" ");
const newString=`Hello this is war ${split[1]}`;
console.log(newString);



// یک ارایه داریم بصورت تصادفی یکی از کارکترهاشو در یک متغیرر نشون بدیم بصورت رندوم

const arr=["ali","amir","hamed","hasan"];
const random=arr[Math.floor(Math.random() * arr.length)];
console.log(random);


// یک ارایه داریم با دو عدد ایندکس ایندکس دومی رو در یک رشته ترکیب کنید

const data=[["sara","javad"],[25,26]];

const flat=data.flat();
console.log(flat);

const newStr=`Hello my name is Ali and my age is ${flat[3]} and my brother his name is javad and javad's age is ${flat[2]}`
console.log(newStr);


// یک ارایه اف ابجکت داریم یک ابجکت رو انتخاب و قسمت بادی رو در یک رشته نشون بدین


const user=[
    {id:1,name:"ali",body:"hello ali is a doctor."},
    {id:1,name:"amir",body:"hello amir is a student"},
];


const [user1,user2]=user;
const {id,name,body}=user1; 
const split1=body.split(" ");
console.log(split1);

const strFinal=`Hello my name is ${split1[1]} and I am a doctor`
console.log(strFinal);