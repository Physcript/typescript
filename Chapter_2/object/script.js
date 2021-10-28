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
var union1 = undefined;
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
}
function check(isTrue) {
    if (isTrue) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
printUser(user1);
printUser(user2);
check('best');
check(union1);
