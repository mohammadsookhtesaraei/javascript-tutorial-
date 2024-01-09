

// getter 



const data={
    firstName:"Ali",
    LastName:"so",
    get fullName () {
        return `${data.firstName} ${data.LastName}`
    }
};


console.log(data.fullName)