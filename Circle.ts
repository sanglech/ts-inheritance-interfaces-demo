import { Shape } from "./Shape";

export class Circle extends Shape{

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius,2);
    }

    constructor(theX:number, theY:number,
        private _radius:number){
        super(theX,theY);
    }

    getInfo():string{
        return super.getInfo() + `, radius=${this._radius}`;
    }

}