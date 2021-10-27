"use strict";
// [ number,string ]
// number[]
// string[]
let arr = [1, 2, 3];
function printArray(arr) {
    console.log(arr);
}
function tupleArray(tpl) {
    console.log(tpl[0]);
    console.log(tpl[1]);
    console.log(tpl[2]);
}
function tupleMixedArray(tpl) {
    console.log(tpl[0]);
    console.log(tpl[1]);
    console.log(tpl[2]);
}
let myTuple = [1, 2, 3];
let myMixTuple = [1, 2, 'John'];
tupleArray(myTuple);
tupleMixedArray(myMixTuple);
