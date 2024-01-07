

// call

var name="ali";

function hell(age){
    console.log(this.name)
    console.log(`This Age : ${age}`);
};


hell(27);

const data={
    name:"sara"
};


hell.call(data,25);