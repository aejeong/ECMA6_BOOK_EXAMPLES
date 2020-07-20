
//26.2 get() 프로퍼티 값 반환---------------------------------------- //
// let sports = {
//     event:"축구",
//     ground:"상암구장",
//     get getName(){
//         return this.event+":"+this.ground;
//     }
// }

// console.log(Reflect.get(sports,"event")); //"축구"
// console.log(Reflect.get(sports,"getName")); // "축구:상암구장"
// console.log(Reflect.get(sports,"getName",{event:"농구"})); //"농구:undefined"
//getter에서 세번째 파라미터인 {event:"농구"} 오브젝트를 참조하기때문에 농구:undefined로 반환됨

//----------------------------------------------- //

// let sportsArray = ["축구","농구"];
// console.log(Reflect.get(sportsArray,1)) //농구 
// console.log(Reflect.get(sportsArray,5)) //undefined

//----------------------------------------------- //

// let sports = {soccer:"축구"}
// let newProxy = new Proxy(sports,{
//     get(target,key,receiver){
//         return target[key]+ ", 11명"
//     }
// })
// console.log(Reflect.get(newProxy,"soccer")) //축구, 11명

//----------------------------------------------- //

// let sports = {soccer:"축구"}
// let newProxy = new Proxy(sports,{
//     get(target,key,receiver){
//         return Reflect.get(target,key)+ ": 11명" //위는 ES5의 방식이다.
//         //저자는 이 형태로 사용하는것을 권하고있다. 이유인 즉 오브젝트.메서드이름() 으로 값을 반환하는것이 전형적인 형태이기때문
//     }
// })
// console.log(Reflect.get(newProxy,"soccer")) //축구: 11명

//26.3 set() key, value 값 설정---------------------------------------- //

// let sportsObj = {};
// console.log(Reflect.set(sportsObj,"soccer","축구")) //처리 성공으로 true
// console.log(sportsObj);// {soccer:"축구"}

//----------------------------------------------- //

// let sportsObj = {
//     set setGame(event){
//         Reflect.set(sportsObj,event[0],this.player|| event[1]);
//     }
// };

// Reflect.set(sportsObj,"setGame",["soccer"],{player:11})
// console.log(sportsObj); // {soccer:11}

// Reflect.set(sportsObj,"setGame",["baseball",9]);
// console.log(sportsObj); // {soccer:11,baseball:9}

//----------------------------------------------- //
// let sportsArray = ["농구"];
// Reflect.set(sportsArray,1,"축구");
// console.log(sportsArray) // ["농구","축구"]
// Reflect.set(sportsArray,0,"아이스하키"); 
// console.log(sportsArray) // ["아이스하키","축구"]

//----------------------------------------------- //
// let sportsObj={};
// let newProxy = new Proxy(sportsObj,{
//  set(target,key,value,receiver){
//      Reflect.set(target,key,value)
//  }   
// })

// Reflect.set(newProxy,"baseball","야구");
// console.log(sportsObj) // {baseball:"야구"}

//26.4 has() key 존재 여부------------------------------- //
// let nameObj = {name:"이름"}
// console.log(Reflect.has(nameObj,"name")); // true

// function sports(){}
// console.log(Reflect.has(sports,"hasOwnProperty"))//true
//상속받은 오브젝트도 검색함

//----------------------------------------------- //
// let sportsObj ={baseball:"야구"};
// let newProxy = new Proxy(sportsObj,{
//     has(target,key){
//         Reflect.has(target,key)
//     }
// })

// console.log(Reflect.has(newProxy,"baseball")) // false

//26.5 apply() 함수 호출------------------------------- //
//Reflect에서 apply()를 사용하면 call 과 apply를 구분하지않고 함수를 호출할수있다.
// function getValue(...values){
//     return this.base + values.reduce(function(pre,cur){
//         return pre+cur;
//     })
// }
// console.log(Reflect.apply(getValue,{base:100},[10,20,30])) //160

//----------------------------------------------- //
// let result = Reflect.apply(String.prototype.indexOf,"ABC",["B"]);
// console.log(result); //1
//----------------------------------------------- //

// function getValue(...values){
//     return this.base + values.reduce(function(pre,cur){
//         return pre+cur;
//     })
// }

// let newProxy = new Proxy(getValue,{
//     apply(target,thisObj,params){
//         return Reflect.apply(target,thisObj,params)
//     }
// })

// console.log(Reflect.apply(newProxy,{base:100},[10,20,30])) //160

//26.6 constuct() 인스턴스 생성----------------------------------------------- //

// class Sports{
//     constructor(ground){
//         this.ground = ground
//     }
// }
// let obj = Reflect.construct(Sports,["상암구장"])
// console.log(obj.ground) // "상암구장"

//----------------------------------------------- //

// class Sports{
//     constructor(ground){
//         this.ground = ground
//     }
//     getGround(){
//         return this.ground;
//     }
// }

// class Soccer{
//     getGround(){
//         return "Soccer.getGround() 사용"
//     }
// }
// let obj = Reflect.construct(Sports,["상암구장"],Soccer)
// console.log(obj.getGround) // "Soccer.getGround() 사용"

//----------------------------------------------- //
// class Sports{
//     constructor(...values){
//         this.values = values;
//     }

//     getValues(){
//         return this.values;
//     }
// }

// let newProxy = new Proxy(Sports,{
//     construct(target,params,proxy){
//         return Reflect.construct(target,params)
//     }
// })

// let obj =Reflect.construct(newProxy,["축구","상암구장"])
// console.log(obj.getValues()); // ["축구","상암구장"]

//26.7 defineProperty() 프로퍼티 추가, 값 변경---------------------------------- //
//Object.definedProperty()와는 달리 Reflect.definedProperty()는 성공적으로 처리하면 true / 실패시 false 반환

// let sportsObj = {
//     event: "축구"
// }

// let result = Reflect.defineProperty(sportsObj,"sports",{
//     get(){
//         return this.event;
//     }
// })
// console.log(result); //true
// console.log(sportsObj.sports); //"축구"

//26.8 deleteProperty() 프로퍼티 삭제---------------------------------- //
//삭제 수행시 true 실패시 false

// let obj = {member:11,ground:"상암"}
// console.log(Reflect.deleteProperty(obj,"ground")); //true
// console.log(Reflect.deleteProperty(obj, "ground")); //true

// Object.freeze(obj); // 오브젝트의 프로퍼티를 삭제할수없는 상태로 설정
// console.log(Reflect.deleteProperty(obj,"member")); //false

//26.9 getOwnPropertyDescriptor() 디스크립터 반환---------------------------------- //
// let sportsObj = {sports:"스포츠"};
// let result = Reflect.getOwnPropertyDescriptor(sportsObj,"sports")
// console.log(result) // Object {value:"스포츠",writable:true,enumerable:true,configurable:true}

//26.10 getPrototypeOf() prototype 반환---------------------------------- //
// let obj = {sports:"스포츠"};
// console.log(Reflect.getPrototyp/eOf(obj)); // Object { }

//26.11 setPrototypeOf() __proto__에 prototype 설정---------------------------------- //
// let Sports = function(){};
// Sports.prototype.getGround = function(){ //Sports.prototype에 getGround 메서드 연결
//     return this.ground; // 메서드가 호출되면 this가 참조하는 오브젝트의 ground 프로퍼티 값 반환
// }

// let groundObj = {ground:"상암구장"};
// Reflect.setPrototypeOf(groundObj,Sports.prototype); //groundObj의 __proto__에 Sports.prototype의 프로퍼티 연결
// console.log(groundObj.getGround()); //"상암구장"

//26.12 preventExtensions() 프로퍼티 추가 금지---------------------------------- //
//처리 결과가 true/false로 반환됨
let obj = {};
console.log(Reflect.preventExtensions(obj)); // true
console.log(Reflect.defineProperty(obj,"baseball",{value:"야구"})) // false

//26.13 isExtensible() 프로퍼티 추가 가능 여부---------------------------------- //
let emptyObj = {};
Reflect.preventExtensions(emptyObj);
console.log(Reflect.isExtensible(emptyObj)); // false

//26.14 ownKeys() 프로퍼티 키 반환---------------------------------- //
// configurable false 혹은 확장 불가 오브젝트여도 키 값 반환
let sportsObj = {
    soccer:"축구",
    baseball : "야구",
    [Symbol.for("one")]:10
}
console.log(Reflect.ownKeys(sportsObj));
//["soccer","baseball",Symbol(one)]