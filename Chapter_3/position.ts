
export class Point2D {
    _xPos: number
    _yPos: number

    constructor(xPosInput: number, yPostInput: number) {
        this._xPos = xPosInput
        this._yPos = yPostInput
    }

    public printPosition() {
       console.log(this._xPos)
       console.log(this._yPos)
    }

    public get xPos(){
        return this._xPos
    }

}

export class Point3D extends Point2D {
    _zPos: number

    constructor(xPosInput: number, yPostInput: number, zPosInput: number){
        super(xPosInput,yPostInput)

        this._zPos = zPosInput
    }

    public override printPosition() {
        console.log(`Position X: ${this._xPos}`)
        console.log(`Postionn Y: ${this._yPos}`)
        console.log(`Postionn Z: ${this._zPos}`)
    }

}
