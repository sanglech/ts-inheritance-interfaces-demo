"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
//let myShape= new Shape(10,15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRect = new Rectangle_1.Rectangle(10, 10, 20, 20);
// declare an array of shapes to
var theShapes = [];
//add shapes to the List
//theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRect);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea() + "\n");
}
