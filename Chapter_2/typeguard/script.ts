

enum PermissionLevel {
    Instructor = 1,
    student = 0,
    admin = 2
}

interface User {
    name: string,
    age: number
}

interface UserExtended extends User {
    permission: PermissionLevel
}

const user1: UserExtended = {
    name: "john",
    age: 22,
    permission: PermissionLevel.student
}




function printAll(arg: string | string[]){
    if( typeof arg === 'object' ){
        arg.forEach((val) => console.log(val))
    }

    if( typeof arg === 'string' ){
        console.log(arg)
    }
}


const a1 = 'jan'
const o1 = ['English','Math','Science']



printAll(a1)
printAll(o1)
console.log(user1)
