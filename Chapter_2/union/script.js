"use strict";
function add(arg1, arg2) {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return console.log(addString(arg1, arg2));
    }
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return console.log(addNumber(arg1, arg2));
    }
    function addString(arg1, arg2) {
        return arg1 + arg2;
    }
    function addNumber(arg1, arg2) {
        return arg1 + arg2;
    }
    return;
}
const a1 = "john";
const a2 = "batino";
const b1 = 1;
const b2 = 2;
add(a1, a2);
add(b1, b2);
add('', '');
const user1 = {
    name: "John",
    age: 25,
    courses: ["C++", "C#", "React"],
    permissionLevel: "Professor"
};
const user2 = {
    name: "Jake",
    age: 19,
    courses: ["Java"],
    permissionLevel: "Student"
};
console.log(user1);
console.log(user2);
