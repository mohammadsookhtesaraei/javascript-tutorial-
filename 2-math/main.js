// Math in js 

// چهار عمل اصلی در جاوا اسکریپت
console.log(5+5);
console.log(5-5);
console.log(5/5);
console.log(5*5);

// توان
console.log(5**5);



// let 

let number=5;

number++;
console.log(number);

number--;
console.log(number);

number+=5;
console.log(number);
number-=5;
console.log(number);

number*=10;
console.log(number);

number/=2;
console.log(number);

number**=2;
console.log(number);/* 625 */

// متدهای Math

//random
const random=Math.random()* 3; 
console.log(random); /* میاد از صفر تا 2.99 یک عدد تصادفی میده خوده سه رو نمیده */

// round
const round=5.65;
console.log(Math.round(round));/* جواب رو برای ما گرد می کنه */

// floor
const floor=5.86;
console.log(Math.floor(floor));/* همیشه رو به پاینن گرد می کنه */

// ceil
const ceil=5.32;
console.log(Math.ceil(ceil)); /* همیشه رو به بالا گرد می کنه */

// square root 

const sqrt=68;
console.log(Math.sqrt(sqrt)); /* جذرشو میگیره */

// value of power توان
console.log(Math.pow(2,3));/* به توتن میرسونه */

// min 
const min=Math.min(1,2,3,4,5);
console.log(min);/* مینیموم */

//max 
const max=Math.max(1,2,3,4,5);
console.log(max);/* lماکسیموم */

// sign

const result=Math.sign(56);
console.log(result);  /*اگه یک عدد مثبت بدیم خروجی یک است */
// اگه یک عدد منفی بدیم خروجی منفی یک است
// اگه صفر بدیم خروجی صفر است


// تبدیل تایپ ها به نامبر و رشته

const num=5;
console.log(String(num)); /* تبدیل نامبر به رشته */

// تبدیل رشته به نامبر

const string="5";
console.log(Number(string));

// سریع ترین راه تیدیل یک رشته به نامبر استفاده از یونری پلاس unaryplus
console.log(+string);

// اگر رشته باشد و تبدیل به نامبر شود و اعشار ان حذف شود 

const string2="5.36";
console.log(parseInt(string2)); /* parse Int */

// اگر رشته باشد تبدیل به نامبر شود ولی اعشار حذف نشود

const string3="5.34";
console.log(parseFloat(string3)); /* parse float */

// اگر نامبر باشد تبدیل به رشته شود و اعشار بصورت دلخواه کم و زیاد شود

const number1=56.36;
console.log(number1.toFixed(1));/* to fixed */




