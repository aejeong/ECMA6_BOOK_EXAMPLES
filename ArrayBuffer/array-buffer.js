//let bufferObj = new ArrayBuffer(20); //ArrayBuffer 인스턴스 생성 20바이트 크기의 버퍼 고정 영역 정의
// let int32View = new Int32Array(bufferObj);

// 28.4 new ArrayBuffer() ArrayBuffer 인스턴스 생성
/*
let obj1 = new ArrayBuffer(20);
console.log(obj1.byteLength); //20

let obj2 = new ArrayBuffer();
console.log(obj2.byteLength); //0

let obj3 = new ArrayBuffer("12");
console.log(obj3.byteLength); //12
*/


// 28.5 slice() 지정 범위 복사
/*
let newBuffer = new ArrayBuffer(20);

let oneObj = newBuffer.slice(0);
console.log(oneObj.byteLength); //20

let twoObj = newBuffer.slice(3,7);
console.log(twoObj.byteLength); //4
*/
// 28.6 isView() TypedArray, DataView 여부
/*
let bufferObj = new ArrayBuffer(10);
console.log(ArrayBuffer.isView(bufferObj)); //false

let typedObj = new Int16Array();
console.log(ArrayBuffer.isView(typedObj)); //true

let viewObj = new DataView(bufferObj);
console.log(ArrayBuffer.isView(viewObj)); //true
*/

// 28.7 Symbol.species: constructor 반환
class ExtendBuffer extends ArrayBuffer{
    static get [Symbol.species](){
        return ArrayBuffer
    }
}
let newBuffer = new ExtendBuffer(20);
let bufferObj = newBuffer.slice(3,7);
console.log(bufferObj.byteLength) //4


