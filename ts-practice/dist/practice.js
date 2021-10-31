"use strict";
var Circle = /** @class */ (function () {
    //타입스크립트에서는 constructor 의 파라미터 쪽에 public 또는 private accessor 를 사용하면 직접 하나하나 설정해주는 작업을 생략해줄 수 있음 
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 4);
console.log(circle.radius); // public 으로 선언된 값은 클래스 외부에서 조회가 가능함 
// console.log(rectangle.width); // private으로 선언되어서 조회 불가능 
var shapes = [circle, rectangle];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
