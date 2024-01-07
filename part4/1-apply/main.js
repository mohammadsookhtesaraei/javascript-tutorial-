

var name="ali";

function hell(age){
    console.log(this.name);
    console.log(`this age: ${age}`)
};

hell(37);

const data={
    name:"amir"
};

hell.apply(data,[27])