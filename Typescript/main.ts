export {}
let messgae = "hello man";
console.log(messgae);

let isBegineer: boolean =  true;
let total: number =  100;
let name: string = "narasimha";

let sentnece: string = `My name is ${name}. I am a beigineer in typescript.`;
console.log(sentnece);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let arr1: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];

let person1: [string, number] = ["Narasimha", 23];

enum color {Red = 7, Green, Blue};
let c: color = color.Green;
console.log(c);

// let anyVairable: any =10;
// anyVairable();
// anyVairable = 'hello';

let myVariable: unknown = 10;
function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === "object" && "name" in obj;
} 

if(hasName(myVariable)){
    console.log(myVariable.name);
}

(myVariable as number).toLocaleString();

let a;
a = 10;
a =  true;

let b = 10;

let multiType:  number|boolean;
multiType = 5;
multiType = false;

let anyType: any;
anyType = 3;
anyType = false;


function add(num1: number, num2: number = 10):number {
    if (num2) {
        return num1 + num2;
    }
    return num2;
}

add(5,10);
add(7);

interface Person {
    firstName: string,
    lastName: string,
};

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Narasimha',
    lastName: 'Shenoy'
};

fullName(p);