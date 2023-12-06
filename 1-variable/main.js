// variables

// var
// es6 2015 const let
// دیگه از سال دو هزار و پانزده به بعد از ور استفاده نمیشه
// و به جاش لت و کانست با معرفی اکما اسکریپت 6

// const constant
// let

const x=10;
console.log(x);

//  const variable is constant and we can not change it 
// but in let we can change variable
// در کانست ما نمی تونیم مقدار اولیه رو تغییر بدیم و ثابت کلا بجز ارایه ها
// و لت میشه مقدار اولیه رو تغییر داد

let y=10;
y=20;
console.log(y)/* 20 */

// در جاوا اسکریپت به سه روش میشه متغییر هارو نوشت
// camelCase-PascalCase-snake-case
// که بطور پیش فرض از کمل کیس استفاده میشه
// پاسکال کیس برای کلاس ها هستند
// اسنک کیس در جاوا اسکریپت استفاده نمیشه 
// متغییرها می تونن با علامت دالر شروع بشن با اندرلاین شرو بشن اما با اعداد نمی تونند تعریف بشن
// در اکما اسکریپت شیش به متغییرهای هم نام حساس است و نمیشه  متغییر هم نام داشت

const userData={name:"ali"};/* camelCase */
const DataUser="hello";/* PascalCase */

// dataTypes
// دیتا تایپ
// string-boolean-number-array-object-null-undefined-symbol

const string="hello world";
console.log(typeof string);/* string */
console.log(!! string);/* true */

const number=5;
console.log(typeof number);/* number */
console.log(!! number);/* true */

const boolean=true;
console.log(typeof boolean);/* boolean */
console.log(!! boolean);/* true */ /* if variable is false this is false not true */

const array=[1,"ali",{a:"a"}];
console.log(typeof array); /* object */
console.log(!! array);/* true */


const object={name:"ali"};
console.log(typeof object);/* object */
console.log(!! object);/* true */


const m=null;
console.log(typeof null);/* object */
console.log(!! m);/* false */


let z;
console.log(typeof z); /* undefined */
console.log(!! z); /* false */


const symbol=Symbol("name");
console.log(typeof symbol);/* symbol */
console.log(!! symbol); /* true */



// primitive types string-number-boolean-null-undefined-symbol stack memory
// reference type array-object heap memory

// falsy - zero-null-undefined-""-false-NaN
