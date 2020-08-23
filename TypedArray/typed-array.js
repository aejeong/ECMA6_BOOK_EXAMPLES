//29.3 new TypedArray(length) 엘리먼트 수로 TypedArray 생성
/*
let int16Obj = new Int16Array(3);
console.log("1:",int16Obj); // [0,0,0]

int16Obj[0] = 123; 
int16Obj[1] = 456;
console.log("2:",int16Obj); //[123,456,0]

console.log("3:",int16Obj[0]); 
console.log("4:",new Int16Array()); // []
*/

//---------------------------//
/*

let oneObj = new Int16Array("123");
console.log("1:",oneObj.length); //123

let twoObj = new Int16Array("ABC");
console.log("2:",twoObj.length); //0
*/
//29.4 new TypedArray(TypedArray) TypedArray로 TypedArray 생성

let int16Obj = new Int16Array(3);
int16Obj[0] = 258;

console.log(new Int16Array(int16Obj)) // [258,0,0]
console.log(new Int8Array(int16Obj)) // [2,0,0]
