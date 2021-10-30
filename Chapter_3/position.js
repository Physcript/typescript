export class Point2D {
    constructor(xPosInput, yPostInput) {
        this._xPos = xPosInput;
        this._yPos = yPostInput;
    }
    printPosition() {
        console.log(this._xPos);
        console.log(this._yPos);
    }
    get xPos() {
        return this._xPos;
    }
}
export class Point3D extends Point2D {
    constructor(xPosInput, yPostInput, zPosInput) {
        super(xPosInput, yPostInput);
        this._zPos = zPosInput;
    }
    printPosition() {
        console.log(`Position X: ${this._xPos}`);
        console.log(`Postionn Y: ${this._yPos}`);
        console.log(`Postionn Z: ${this._zPos}`);
    }
}
