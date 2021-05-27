import {Shape} from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape= new Shape(10,15);
let myCircle = new Circle(5,10,20);
let myRect = new Rectangle(10,10,20,20);


// declare an array of shapes to
let theShapes: Shape[] = [];

//add shapes to the List
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRect);

for (let tempShape of theShapes){
    console.log(tempShape.getInfo());
}