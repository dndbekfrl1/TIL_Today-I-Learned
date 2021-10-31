
interface Shape{
    getArea():number;
}

class Circle implements Shape{

    //타입스크립트에서는 constructor 의 파라미터 쪽에 public 또는 private accessor 를 사용하면 직접 하나하나 설정해주는 작업을 생략해줄 수 있음 
    constructor(public radius:number){
        this.radius=radius;
    }

    getArea(){
        return this.radius*this.radius * Math.PI
    }
}

class Rectangle implements Shape{
    constructor(private width:number,private height:number){
        this.width=width;
        this.height=height;
    }
    getArea(){
        return this.width*this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10,4);

console.log(circle.radius); // public 으로 선언된 값은 클래스 외부에서 조회가 가능함 
// console.log(rectangle.width); // private으로 선언되어서 조회 불가능 

const shapes = [circle,rectangle];
shapes.forEach(shape=>{
    console.log(shape.getArea());
})

/** 일반 객체를 interface 로 타입 설정하기 **/
interface Person{
    name:String;
    age?:number; //optional 
}

interface Developer extends Person{
    skills:string[];
}

const person: Person = {
    name:"하품이",
    age:20
}

const expert: Developer={
    name:"김개발",
    skills:['js','react']
}

/** Type Alias 타입에 별칭 붙여주기 **/
// type Person={
//     name:String;
//     age?:number; //optional 
// }

// type Developer = Person&{
//     skills:string[];
// }

// const person: Person = {
//     name:"하품이",
//     age:20
// }

// const expert: Developer={
//     name:"김개발",
//     skills:['js','react']
// }

/**
 * interface --> 클래스와 관련된 타입
 * type --> 일반 객체의 경우 
 */

/** Generics 함수, 클래스, interface, type alias를 사용시 여러 종류의 타입에 대해 호환을 맞춰야 하는 상황에 사용 **/

/**
 * A,B가 어떤 타입이 올 지 모르기에 any 타입 사용
 */
function merge(a:any, b:any):any{
    return{
        ...a,
        ...b
    }
};

const merged = merge({foo:1},{bar:1});

function merge_<A,B>(a:A, b:B):A&B{
    return{
        ...a,
        ...b
    }
};

const merged_ = merge_({foo:1},{bar:1});

//인터페이스에 제네릭 사용
interface Items<T>{
    list:T[];
}

const items:Items<string>={
    list:['a','b','c']
}

const dd:Items<number>={
    list:[1,2,3]
}

//클래스에서 제네릭 사용하기
class Queue<T>{
    list:T[] = [];
    //자바 getter setter 키워드 구나
    get length(){
        return this.list.length;
    }
    enqueue(item: T){
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}