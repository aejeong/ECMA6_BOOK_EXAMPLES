// 20.2 new Map()  Map 인스턴스 생성 -------------------------

// let emptyMap = new Map();
// let newMap = new Map([
//     ["key1","value1"],
//     ["key2","value2"],
//     ["key1","sports"]
// ]);
// for(var element of newMap){
//     console.log(element); // ["key1","sports"] // ["key2","value2"];
// }

//--------------------------------------------------------
// let newMap = new Map([
//     ["key1","value1"],
//     ["key2","value2"]
// ])

// for(var element of newMap){
    //["key1","value1"]
    //["key2","value2"]
    // element.forEach((keyValue,index)=>{
        // console.log(index,keyValue); 
    // })
// }
// 0 "key1"
// 1 "value1"
// 0 "key2"
// 1 "value2"
// for(var [key,value] of newMap){
    // console.log(key,value) // key1 value1 // key2 value2
// }

//--------------------------------------------------------

// try{
//     new Map(["one",1]); // 대괄호 []가 이터러블이고 "one", 1 형태로만 남기때문에 에러 발생
// }catch(e){
//     console.log("[one,1]") //[one,1] 출력
// }
// try{
//     new Map({one:1}); // 이터러블하지 않기때문에 TypeError 
// }catch(e){
//     console.log("{one:1}") // {one:1} 출력
// }
// let newMap = new Map([{one:1}]); // [] 작성후 {one:1} 작성하면 인스턴스는 생성되지만 key,value에 undefined 설정됨
// console.log(newMap); // {undefined=>undefined};

// 20.3 set()  key와 value 설정 -------------------------
// const newMap = new Map();
// newMap.set("one",100);
// console.log(newMap.size); // 1

// newMap.set({},"오브젝트");
// newMap.set(function(){},"Function");
// newMap.set(new Number("123"), "인스턴스");
// newMap.set(NaN,"Not a Number");

// for(var [key,value] of newMap){
//     console.log(key,value);
// };
//one 100
//Object {}  "오브젝트"
//function(){}  "Function"
//Number {[[PrimitiveValue]]:123} "인스턴스"
// NaN "Not a Number"

//--------------------------------------------------------

// const newMap = new Map();
// newMap.set("one",100);
// newMap.set("one",123); // 이미 newMap 인스턴스에 키 값 one이 존재하기때문에 value가 123으로 대체됨

// let sportsObj = {sports:"스포츠"};
// newMap.set(sportsObj,"Sports Object");
//sportsObj가 key가 되고 "Sports Obejct"가 value가 됨
//{sports:"스포츠"}를 컴퓨터의 메모리에 설정하고 sportsObj로 참조

// newMap.set(sportsObj,"Sports Object-변경");
//이미 sportsObj key가 존재하기때문에 value만 대체됨
// newMap.set({},"Object-1")
//Object 리터럴 지정, Object-1 value로 지정
// newMap.set({},"Obejct-2")
//똑같이 오브젝트 {}을 지정했지만 앞의 오브젝트와 다른 메모리 주소에 저장되기떄문에 값이 대체되지 않는다.

// 20.4 get() key가 같은 value 반환--------------------- //
// key 값 작정하면 value 반환. Type체크 함
// const newMap = new Map();
// newMap.set("one",100);
// console.log(newMap.get("one")); // 100
// console.log(newMap.get("two")) // undefined

// let sportsObj = {sports: "스포츠"};
// newMap.set(sportsObj,"Sports Object"); 
// console.log(newMap.get(sportsObj)); // Sports Object

//--------------------------------------------------------

// const newMap = new Map();
// newMap.set({},"Object");
// console.log(newMap.get({})); // 메모리 주소가 다르므로 undefined

// newMap.set(123,"값 123"); 
// console.log(newMap.get(123)); //값 123 // Number 타입으로 key를 지정했고 Number로 get하고 있기때문에 value가 출력됨
// console.log(newMap.get("123")); // String타입으로 파라미터를 날려서 존재하지 않는 key 이므로 undefined 

// newMap.set(NaN,"Not a Number"); 
// console.log(newMap.get(NaN)); // Not a Number 

//has() key 존재여부--------------------------------------------------------
// key 값 존재 여부 확인
// const newMap = new Map();
// newMap.set("one",100);
// console.log(newMap.has("one")); // true

//20.6 entries() 이터레이터 오브젝트 생성-------------------------------------
// const newMap = new Map([ // 2개의 엘리멘트를 가진 Map 인스턴스 생성
//     ["key1","value1"],
//     ["key2","value2"]
// ])

// let iteratorObj = newMap.entries(); //이터레이터 오브젝트 반환
// let result = iteratorObj.next(); 
// console.log(result); // {value:Array[2], done:false}
// console.log(iteratorObj.next()) // {value:Array[2], done:false}
// console.log(iteratorObj.next()) // {value:undefined, done:true}

//20.7 keys() key 반환 이터레이터 오브젝트 생성-------------------------------------
// Map 인스턴스의 key 값만 반환
// const newMap = new Map([
//     ["key1","value1"]
// ])

// newMap.set({},"오브젝트");

// let iteratorObj = newMap.keys();
// console.log(iteratorObj.next()) // {value:"key1",done:false}
// console.log(iteratorObj.next()) //{value:Object,done:false}

//20.8 values() value 반환 이터레이터 오브젝트 생성----------------------

// const newMap = new Map([
//     ["key1","value1"]
// ])

// newMap.set({},"오브젝트");
// let iteratorObj = newMap.values();
// console.log(iteratorObj.next()) //{value:"value1", done:false}
// console.log(iteratorObj.next())//{value:"오브젝트", done:false}

//20.9 forEach() 엘리먼트마다 콜백 함수 호출-------------------------------------

// const newMap = new Map([
//     ["key1","value1"],
//     [{},"오브젝트"]
// ])
// newMap.forEach((value,key,map)=>{ 
//     //value에 newMap인스턴스의 "value1"이 설정되고
//     //key에 "key1"이 설정됨
//     // 세번째 파라미터에 newMap 인스턴스가 설정됨
//     console.log(key,value) // key1, value1 // Obejct {}, "오브젝트"
// })

//20.10 delete() 엘리먼트마다 삭제-------------------------------------

// const newMap = new Map([
//     ["key1","value1"],
//     [{},"오브젝트"]
// ])
// let sportsObj = {};
// newMap.set(sportsObj,"추가");

// console.log(newMap.delete("key1")); // 같은 key가 존재하면 삭제하고 true 반환
// console.log(newMap.delete({})); // false
// console.log(newMap.delete(sportsObj)) // true

//20.11 clear() 모든 key,value 지움-------------------------------------
// const newMap = new Map([
//     ["key1","value1"],
//     [{},"오브젝트"]
// ])
// console.log(newMap.size()); // 2

// newMap.clear();
// console.log(newMap.size()) //0

//20.12 Symbol.iterator 이터레이터 오브젝트 생성---------------------------
let newMap = new Map([
    ["1","music"],
    ["2","sports"],
])
let iteratorObj = newMap[Symbol.iterator]();
console.log(iteratorObj.next()); // {value:Array[2],done:false}
console.log(iteratorObj.next()); // {value:Array[2],done:false}
