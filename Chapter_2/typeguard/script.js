"use strict";
var PermissionLevel;
(function (PermissionLevel) {
    PermissionLevel[PermissionLevel["Instructor"] = 1] = "Instructor";
    PermissionLevel[PermissionLevel["student"] = 0] = "student";
    PermissionLevel[PermissionLevel["admin"] = 2] = "admin";
})(PermissionLevel || (PermissionLevel = {}));
const user1 = {
    name: "john",
    age: 22,
    permission: PermissionLevel.student
};
function printAll(arg) {
    if (typeof arg === 'object') {
        arg.forEach((val) => console.log(val));
    }
    if (typeof arg === 'string') {
        console.log(arg);
    }
}
const a1 = 'jan';
const o1 = ['English', 'Math', 'Science'];
printAll(a1);
printAll(o1);
console.log(user1);
