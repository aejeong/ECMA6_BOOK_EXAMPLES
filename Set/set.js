// 22.2 new Set() 인스턴스 생성 -------------------------
// const setObj = new Set();
// const newSet = new Set([1,2,1,2,"스포츠"]); //파라미터 값이 key역할을 하면서 value로 저장됨
// console.log(newSet.size); //3

// for(let element of newSet){
//     console.log(element) // 1 // 2 //"스포츠"
// }
// 22.3 add() value 추가 -------------------------
// const newSet = new Set();
// newSet.add("축구").add("농구"); // newSet.add()를 실행후 newSet 인스턴스를 반환함으로 add()를 또 호출할수있다
// newSet.add("축구");

// for(let element of newSet){
//     console.log(element); //축구 //농구
// }

//----------------------
// const newSet = new Set();
// let music = () => {};
// newSet.add(music);
// newSet.add(music); // 메모리 주소가 같기 때문에 위 하나만 추가됨.
// for(let element of newSet){
//     console.log(element); //function()=>{}
// }

// 22.4 has() value 존재 여부 -------------------------
// const newSet = new Set();
// newSet.add('sports');
// console.log(newSet.has('sports')) // true

// 22.5 entries() 이터레이터 오브젝트 생성 -------------------------

// const newSet = new Set(["one",()=>{}]);
// let iteratorObj = newSet.entries(); // 이터레이터 오브젝트 생성 반환

// console.log(iteratorObj.next()) //{value:Array[2],done:false}
// key,value "one","one" 이기때문에 다시 0:"one" , 1:"one" 이런식으로 들어감
// console.log(iteratorObj.next()) //{value:Array[2],done:false}
//value를 key에 설정하여 반환함으로 {value:Array[2]}의 형태가 됨.

// 22.6 values() value 반환 이터레이터 오브젝트 생성 -------------------------
// const newSet = new Set(["one",()=>{}]);
// let iteratorObj = newSet.values(); 
// console.log(iteratorObj.next()) // {value:"one",done:false}
// console.log(iteratorObj.next()) // {value:function(){},done:false}

// 22.7 keys() key 반환 이터레이터 오브젝트 생성 -------------------------
// const newSet = new Set(["one",()=>{}]);
// let iteratorObj = newSet.keys();
// console.log(iteratorObj.next()) //{value:"one", done:false}
// console.log(iteratorObj.next()) //{value:function(){}, done:false}

// 22.8 forEach() 엘리먼트마다 콜백 함수 호출 -------------------------
// const newSet = new Set(["one","two"]);
// newSet.forEach(function(value,key,obj){
//     console.log(value,this.member) // one 10 // two 10
// },{member:10});

// 22.9 delete() 엘리먼트마다 삭제 -------------------------
// const newSet = new Set(["one"]);
// console.log(newSet.delete("one")); // true
// cconsole.log(newSet.size); // 0

// 22.10 clear() 모든 value 지움 -------------------------
// const newSet = new Set(["one","two"]);
// newSet.clear();
// console.log(newSet.size); //0

// 22.11 Symbol.iterator 이터레이터 오브젝트 생성------------
const newSet = new Set([1,"스포츠"]);
// 1:1 "스포츠":"스포츠"
let iteratorObj = newSet[Symbol.iterator]();

console.log(iteratorObj.next()) // {value:1, done:false }
console.log(iteratorObj.next()) // {value:"스포츠", done:false }