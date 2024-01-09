// Setter




const data={
    firstName:"Ali",
    lastName:"so",
    get fullName(){
        return `${data.firstName} ${data.lastName}`
    },

    set fullName (str) {
        this.firstName=str.split(" ")[0];
        this.lastName=str.split(" ")[1];
    }
};


data.fullName="Sara so";
console.log(data.fullName);