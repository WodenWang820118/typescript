// enum Role {
//     ADMIN,
//     READ_ONLY,
//     AUTHOR
// }

// const person : {
//     name: string;
//     age: number;
//     hobbies: any[];
//     role: Role
// } = {
//     name:"Alex",
//     age:28,
//     hobbies: ["sports", "coding"],
//     role: Role.ADMIN
// };

// if (person.role === Role.ADMIN) {
//     console.log("Welcome back, admin");
// }

type Combineable = number | string;

function add(num1: Combineable, num2: Combineable,returnType: "as-number" | "as-string") {
    let result;
    if (typeof(num1)==="number" && typeof(num2)==="number" || returnType==="as-number") {
    return +(num1) + +(num2); // use "+" to make it numbers
    } else {
        result = num1.toString() + num2.toString();
    return result;
    }
}

const num1 = 5;
const num2 = 2;

const result1 = add(num1,num2,'as-number');
const result2 = add(num1,num2,'as-string');

console.log(result1);
console.log(result2);

console.log("Activate the watching mode");