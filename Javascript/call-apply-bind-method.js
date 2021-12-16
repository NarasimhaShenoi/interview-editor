let person1 = {
    fname: "Narasimha",
    lname: "Shenoi",
}

const printFullName = function (hometown, country) {
    console.log(this.fname + " " + this.lname + " from "+ hometown + ", " + country);
}

// call method
printFullName.call(person1, "Kochi", "ernakulam");

// apply method
printFullName.apply(person1, ["Kochi", "idduki"]);

// normal bind method
let printNameUsingBind = printFullName.bind(person1, "Kochi"); // we can pass country as well.
printNameUsingBind("Kerala");

// polyfill for bind method -> this will be accessible for all the functions
Function.prototype.mybind = function (...args) {
    let obj = this, params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let printNameWithoutBind = printFullName.mybind(person1, "Kochi");
printNameWithoutBind("India");