//WeakMap과 반대로 value를 기준으로 한다.
// value에 Object만 들어갈수있고 GC가 발생하면 WeakSet 인스턴스의 value 삭제
// 23.2 new WeakSet() WeakSet 인스턴스 생성-------------------------
// let newString = new String("문자열");
// let newNumber = new Number(12345);
// const newWeakSet = new WeakSet([newString,newNumber]);

// try{
//     new WeakSet(["ABC",345]); // string, number 
// }catch(e){
//     console.log("object 이외 지정 불가") //출력
// }

// 23.3 add() value 추가-------------------------
// const newWeakSet = new WeakSet();
// let newString = new String("문자열")
// newWeakSet.add(newString);

// let obj = {sports:"스포츠"};
// newWeakSet.add(obj);

// 23.4 has() value 존재여부-------------------------
// let newString = new String("문자열");
// const newWeakSet = new WeakSet([newString]);
// console.log(newWeakSet.has(newString)); // true

// 23.5 delete() 엘리먼트 삭제-------------------------
// let newString = new String("문자열");
// const newWeakSet = new WeakSet([newString]);
// console.log(newWeakSet.delete(newString)) // true
// console.log(newWeakSet.has(newString)) // false


