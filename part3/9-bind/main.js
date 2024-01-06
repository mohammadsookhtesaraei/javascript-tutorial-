
globalThis.name="mohammad";


function hell (){
    console.log(this.name)
};

hell();

const data={name:"ali"};

hell=hell.bind(data);
hell();