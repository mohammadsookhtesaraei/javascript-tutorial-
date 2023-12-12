

// یک حلقه بنویسید که کار بر اسم طرف رو وارد میکنه شماره تماسشو نشون بده



// for

const contacts=["hamed-09117724569","sara-0911455698","kamal-093658974","sahel-09365662555"];
const user=prompt("please enter a name");

// for(i=0; i<contacts.length; i++) {
//     const list=contacts[i].split("-");
//     if(list[0]=== user) {
//         console.log(`number of ${list[0]} is ${list[1]}`);
//         break;
//     } else {
//         console.log("user not found");
       
//     }
// };


// for of


for(i of contacts) {
const list=i.split("-");
if(list[0]=== user) {
            console.log(`number of ${list[0]} is ${list[1]}`);
            break;
        } else {
            console.log("user not found");
           
        }
}




