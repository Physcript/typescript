"use strict";
function add(arg1, arg2) {
    return arg1 + arg2;
}
function concatString(arg1, arg2) {
    return arg1 + " " + arg2;
}
function check(arg1) {
    if (arg1 > 2) {
        return false;
    }
    return true;
}
const a1 = 2;
const a2 = 2;
const s1 = "john";
const s2 = "batino";
const r1 = add(a1, a2);
const r2 = concatString(s1, s2);
console.log(r1);
console.log(r2);
