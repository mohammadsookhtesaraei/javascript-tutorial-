


function hell(str,letter) {
    let count=0;
    for(let i=0; i<str.length; i++) {
     if(str[i]=== letter){
        count++
     } 
    }

    return count;
};


const x=hell("hello world","l");
console.log(x)
