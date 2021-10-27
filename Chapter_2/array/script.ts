

// [ number,string ]
// number[]
// string[]


let arr = [1,2,3]

function printArray(arr: number[]) {
    console.log(arr)
}

function tupleArray( tpl: [number,number,number] ) {
    console.log(tpl[0])
    console.log(tpl[1])
    console.log(tpl[2])
}

function tupleMixedArray( tpl: [number,number,string] ) {
    console.log(tpl[0])
    console.log(tpl[1])
    console.log(tpl[2])
}

let myTuple: [number,number,number] = [1,2,3]
let myMixTuple: [number,number,string] = [1,2,'John']

tupleArray(myTuple)
tupleMixedArray(myMixTuple)
