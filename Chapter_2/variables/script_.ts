
function add( arg1: number, arg2: number ) {
    return arg1 + arg2
}

function concatString( arg1: string, arg2: string ) {
    return arg1 + " " + arg2
}

function check( arg1: number ) {
    if(arg1 > 2) {
        return false
    }
    return true
}


const a1 = 2
const a2 = 2

const s1 = "john"
const s2 = "batino"


const r1 = add( a1, a2 )
const r2 = concatString( s1, s2 )

console.log(r1)
console.log(r2)
