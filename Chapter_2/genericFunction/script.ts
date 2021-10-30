

function firstElement <T> (arr: T[]) {
    return arr[0]
}
const arr1 = [ 1,2,3,4, ]
const arr2 = [ true,false,true ]
const arr3 = [ 1,true,3 ]

// console.log(firstElement(arr1))
// console.log(firstElement(arr2))
// console.log(firstElement(arr3))



function map <Input,Output> (arr: Input[], func: (arg: Input)  => Output) {
    return arr.map(func)
}



function lengthComparison <Type> ( a: Type[], b: Type[] ) {
    if(a.length >= b.length) {
        return a
    }
    return b
}


const c1 = [1,2,3,4]
const c2 = [2]

console.log(lengthComparison(c1,c2))

// const arr4 = ["1","2","3"]
// const r1 = map( arr4 , (n) => parseInt(n) )
// console.log(r1)
