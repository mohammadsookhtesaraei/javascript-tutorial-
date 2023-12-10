

// string

// استرینگ یکی از 8 دیتا تایپی است که ما در جاوا اسکریپت با اون سرو کار داریم


const string="hello world";
console.log(typeof string);/* string */
console.log(!! string);/* true */

// متدها
console.log(string.length);
console.log(string[0]);
console.log(string.indexOf("w"));/* true */
console.log(string.charAt(7));
console.log(string.substring(0,5));
console.log(string.slice(0,5));
console.log(string.split(""));
console.log(string.concat(" Happy"));
console.log(string.trim());
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.includes("w"));
console.log(string.replace("hello","hi"));


// template literals in javascript

const final=`${string} this is my book`;
console.log(final)




