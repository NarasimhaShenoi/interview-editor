"use strict";
exports.__esModule = true;
var messgae = "hello man";
console.log(messgae);
var isBegineer = true;
var total = 100;
var name = "narasimha";
var sentnece = "My name is " + name + ". I am a beigineer in typescript.";
console.log(sentnece);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var person1 = ["Narasimha", 23];
var color;
(function (color) {
    color[color["Red"] = 7] = "Red";
    color[color["Green"] = 8] = "Green";
    color[color["Blue"] = 9] = "Blue";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
// let anyVairable: any =10;
// anyVairable();
// anyVairable = 'hello';
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toLocaleString();
var a;
a = 10;
a = true;
var b = 10;
var multiType;
multiType = 5;
multiType = false;
var anyType;
anyType = 3;
anyType = false;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num2;
}
add(5, 10);
add(7);
;
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Narasimha',
    lastName: 'Shenoy'
};
fullName(p);
