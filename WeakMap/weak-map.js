// 21.2 new WeakMap()  WeakMap 인스턴스 생성 -------------------------
//오브젝트만 key로 지정할수있다. value는 타입에 제한이없다.
// const emptyWeakMap = new WeakMap();
// let obj = {};
// const newWeakMap = new WeakMap([
//     [obj,"오브젝트"]
// ])
// 21.3 set() key, value 설정 -------------------------
// const newWeakMap = new WeakMap();
// (function(){ //즉시 실행함수 . 함수를 저장하지않고 한번만 사용하려는것이 목적. 함수 실행이 끝나 함수를 빠져나오면
//     // 함수에서 선언한 변수가 저장되지않아 다시 사용할수없다.
//     var obj = {item:"weakmap"};
//     newWeakMap.set(obj,"GC");
// }()); // 함수 실행이 끝나 빠져나오면 함수블록의 obj 변수가 메모리에서 삭제됨
// // newWeakMap 인스턴스의 key에서 obj 오브젝트 참조 불가

// const newMap = new Map();
// (function(){
//     var obj = {item:"map"};
//     newMap.set(obj,"Keep") 
// }()) //함수 빠져나오면 obj를 참조하는 Map 인스턴스의 [key,value]를 삭제하지않고 유지

// setTimeout(function(){
//     console.log("1:",newWeakMap); 
//     console.log("2:",newMap);
// },1000);

// ------------------------------------------------
// const newWeakMap = new WeakMap();
// let sportObj = {};
// newWeakMap.set(sportObj, "Object-1");

// sportObj ={}; //새 오브젝트를 할당했기때문에 기존에 있던 오브젝트는 GC 대상이된다
// newWeakMap.set(sportObj,"Object-2");

// setTimeout(function(){
//     console.log(newWeakMap);
// },1000);

//WeakMap {Object {} => "Object-2"} 또는
//WeakMap {Object {}=> "Object-2", Object{}=> "Object-1"}

// ------------------------------------------------
// const newWeakMap = new WeakMap();
// let fn = function(){};
// newWeakMap.set(fn,"함수");
// newWeakMap.set(fn,"value 변경"); //메모리 주소가 같으므로 value만 변경
// console.log(newWeakMap); // WeakMap {function=> "value 변경"}

// 21.4 get() key가 같은 value반환-------------------
// const newWeakMap = new WeakMap();
// let obj = {};
// newWeakMap.set(obj,"오브젝트");
// console.log(newWeakMap.get(obj)); // "오브젝트"

// 21.5 has() key 존재 여부-------------------
// const newWeakMap = new WeakMap();
// let obj = {};
// newWeakMap.set(obj,"오브젝트");
// console.log(newWeakMap.has(obj)); // true

// 21.6 delete() 엘리먼트 삭제-------------------
const newWeakMap = new WeakMap();
let obj = {};
newWeakMap.set(obj,"오브젝트");
console.log(newWeakMap.delete(obj)); // true
