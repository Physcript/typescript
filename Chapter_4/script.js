"use strict";
// class Point2D {
//     public _xPos
//     public _yPos
//     constructor(xPosInput: number, yPosInput: number){
//         this._xPos = xPosInput
//         this._yPos = yPosInput
//     }
// }
// function printCoordinates(point: Point2D): void
// function printCoordinates(x: number, y: number): void
// function printCoordinates( arg1: unknown, arg2?: unknown ) {
//     if(typeof arg1 === 'object'){
//         console.log( (arg1 as Point2D)._xPos )
//         console.log( (arg1 as Point2D)._yPos )
//     }else {
//         console.log( arg1 )
//         console.log( arg2 )
//     }
// }
// const p1 = new Point2D(1,2)
// printCoordinates(p1)
// printCoordinates(2,1)
class User {
    constructor(nameInput, ageInput) {
        this.name = nameInput;
        this.age = ageInput;
    }
}
class Admin extends User {
    constructor(nameInput, ageInput, idInput, departmentInput) {
        super(nameInput, ageInput);
        this.id = idInput;
        this.department = departmentInput;
    }
}
function showUser(arg) {
    if (arg instanceof User) {
        console.log(arg.age);
        console.log(arg.name);
    }
    if (arg instanceof Admin) {
        console.log(arg.id);
        console.log(arg.department);
    }
}
const u1 = new User("john", 22);
const a1 = new Admin("patrick", 23, "87ab22", "IT DEPT");
showUser(a1);
