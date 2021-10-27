"use strict";
var user1 = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Typescript', 'Phyton']
};
var user2 = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#']
};
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
}
printUser(user1);
printUser(user2);
