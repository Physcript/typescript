
// alias
type Addable = number | string

interface User {
    name: string,
    age: number,
    courses: string[]
}


type UserType = {
    name: string,
    age: number,
    course: string[]
}

type UserPermission = {
    permissionLevel: string
}

type UserExtendedType = UserType & UserPermission


interface UserExtended extends User {
    permissionLevel: String,
}

function add ( arg1: Addable , arg2: Addable ) {

    if( typeof arg1 === 'string' && typeof arg2 === 'string' ) {
        return console.log(addString(arg1,arg2))
    }
    if( typeof arg1 === 'number' && typeof arg2 === 'number' ) {
        return console.log(addNumber(arg1,arg2))
    }

    function addString ( arg1:string,arg2:string ) {
        return arg1 + arg2
    }
    function addNumber ( arg1:number,arg2:number ) {
        return arg1 + arg2
    }

    return
}



const a1 = "john"
const a2 = "batino"

const b1 = 1
const b2 = 2

add(a1,a2)
add(b1,b2)
add('','')

const user1: UserExtended = {
    name: "John",
    age: 25,
    courses: ["C++","C#","React"],
    permissionLevel: "Professor"
}

const user2: UserExtended = {
    name: "Jake",
    age: 19,
    courses: ["Java"],
    permissionLevel: "Student"
}

console.log(user1)
console.log(user2)
