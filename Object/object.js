
//8 오브젝트에 같은 key사용---------------------------------------------------------- //
// let sameKey = {one:1,one:2};
// console.log(sameKey);

// 오브젝트 프로퍼티 키 값이 같으면 나중에 추가된 오브젝트로 대체됨

//------------------------------------------------------------------- //
//변수 이름으로 값 설정

// let one =1,two=2;
// let values = {one,two};
// console.log(values);

//------------------------------------------------------------------- //

// ES5
// let obj = {
//     getTotal :function(param){
//         return param+ 123;
//     }
// }

//ES6
// let obj = {
//     getTotal(param){
//         return param+123;
//     }
// };
// console.log(obj.getTotal(400));

//8.2 디스크립터------------------------------------------------------------------- //
// Object.defineProperty({},'book',{ // 'book' 프로퍼티이름
//     value :123,  // 디스크립터 value와 enumerable 이 있어야 데이터 프로퍼티 디스크립터이고 그렇지않으면 액세스 프로퍼티 디스크립터
//     enumerable :true
// })

//8.3 get, set 속성------------------------------------------------------------------- //

// get

// var obj = {};
// Object.defineProperty(obj,"book",{
//     get: function(){
//         return '책';
//         }
// })

// console.log(obj.book);

// set

// var obj = {};
// Object.defineProperty(obj,"item",{
//     set: function(param){
//         this.sports = param
//         }
// })

// obj.item= "야구";
// console.log(obj.sports); // obj.sports는 getter인데, obj에 작성하지않았음에도 출력되는이유는 default getter가 호출되기떄문.

//8.4 getter------------------------------------------------------------------- //

// let obj = {
//     value : 123,
//     get getValue(){
//         return this.value;
//     }
// }
// console.log(obj.getValue); //123


//8.5 setter------------------------------------------------------------------- //

// let obj = {
//     set setValue(value){
//         this.value = value;
//     }
// }
// obj.setValue = 123; // obj의 setValue를 프로퍼티 키로 하여 값 할당
// console.log(obj.value); //123

//8.6 is(): 값과 값 타입------------------------------------------------------------------- //
// === 값과 값 타입 모두 비교
// == 값 타입은 비교하지 않고 값만 비교
// Object.is() 값과 값 타입 모두 비교

// console.log("1:", Object.is(1,"1")) // false
// console.log("2:", Object.is(NaN,NaN), NaN === NaN); // true,  false

// console.log("3:", Object.is(0,-0),0===-0); // false, true
// console.log("4:", Object.is(-0,0),-0===0); // false, true

// console.log("5:", Object.is(-0,-0), -0=== -0); // true, true
// console.log("6:", Object.is(NaN,0/0),NaN===0/0); // true, false

// console.log("7:", Object.is(null,null),null === null); //true, true
// console.log("8:", Object.is(undefined,null),undefined === null); //false, false

//8.7 assign(): 오브젝트 프로퍼티 복사------------------------------------------------------------------- //

// try {
//     let obj = Object.assign(null,{x:1});
// }catch(e){
//     console.log('null 지정 불가') // target obj 미지정으로 TypeError로 지정불가
// }
// console.log(Object.assign(123)); // 주어진 값 타입의 오브젝트 생성하고 Primitive Value에 파라미터 값 설정
// console.log(Object.assign(456,70)); // 두번째 파라미터가 열거 가능한 오브젝트가 아니기때문에 복사하지안고 첫번째값만 가지고 생성

//------------------------------------------------------------------- //

// console.log(Object.assign("ABC",{one:1})) // String {0:"A",1:"B",2:"C",one:1,length:3, [[PrimitiveValue]] : "ABC"};
// //String 오브젝트 생성 primitiveValue ABC , one:1 복사하고 생성 오브젝트 반환
// // 다 분리되서 생성된 이유는 String이 Iterable 하기때문
// console.log(Object.assign(Symbol('ABC'),{one:1}))// Symbol {one:1, [[PrimitiveValue]]: Symbol(ABC)}

// try{
//     let obj = Object.assign('ABC','ONE'); //첫번째와 두번째가 모두 문자열이기때문에 타입에러
// }catch(e){
//     console.log("파라미터 모두 문자열 사용 불가") //
// }

//------------------------------------------------------------------- //

// let oneObj = {};
// Object.assign(oneObj,"ABC",undefined,null);
// console.log(oneObj); // Object {0:'A',1:'B',2:'C'}}

// let twoObj ={};
// Object.assign(twoObj,{key1:undefined, key2:null});
// console.log(twoObj); // Object {key1:undefined,key2:null} 오브젝트이기때문에 복사됨

//8.8 assign() 의 필요성------------------------------------------------------------------- //
// Object.assign() 으로 복사해서 사용하면 프로퍼티 값이 연동되지않는다.
// let sports = {
//     event : '축구',
//     player : 11
// }

// let dup = sports; // dup 변수에 sports 변수 할당되며 dup와 sports의 프로퍼티가 연동됨

// sports.player=55;
// console.log(dup.player); // 55

// dup.event = "농구";
// console.log(sports.event); // 농구 // 한쪽의 값이 바뀌면 자동으로 다른쪽 값도 바뀜

//------------------------------------------------------------------- //
//프로퍼티 단위로 키와 값을 복사해서 사용하면 연동되지않음
// let sports = {
//     event : '축구',
//     player : 11
// }

// let dup = {};
// for(var key in sports){
//     dup[key] = sports[key];
// }

// sports.player = 33;
// console.log(dup.player); //11

//key value만 복사함으로 간단하지만 value 안에 또 키 밸류 형태가 펼쳐지면 복잡해짐
// 하지만 Object.assign()을 이용하면 간단하게 해결 가능
//------------------------------------------------------------------- //

// let sports = {
//     event:'축구',
//     player : 11
// }

// let dup = Object.assign({},sports);
// console.log(dup.player); // 11

// dup.player = 33;
// console.log(sports.player); // 11

// sports.event = '수영';
// console.log(dup.event); // 축구

//8.9 assign() 고려사항------------------------------------------------------------------- //

// let oneObj = {one:1}, twoObj = {two:2};
// let mergeObj = Object.assign(oneObj,twoObj);

// console.log(Object.is(oneObj,mergeObj));//oneObj와 twoObj를 합쳐서 mergeObj에 할당함으로 true

// mergeObj.one = 456;
// console.log(Object.is(oneObj,mergeObj))// true
// //oneObj와 twoObj는 연동되지않지만 oneobj의 값을 할당한 mergeObj의 값은 연동됨

//------------------------------------------------------------------- //

// let obj = {one:1};
// Object.assign(obj,{two:2},{two:3},{four:4});
// for(var pty in obj){
//     console.log(pty,obj[pty]);// one 1 two 3 four 4
// }
//왼쪽에서 오른쪽으로 순서대로 프로퍼티를 복사하기때문에 two:3 값으로 나옴

//8.10 assign() getter------------------------------------------------------------------- //
// let count ={
//     current :1,
//     get getCount(){
//         return ++this.current;
//     }
// }

// let mergeObj = {};
// Object.assign(mergeObj, count);
// console.log(mergeObj); //프로퍼티가 getter일 경우 함수를 복사하지않고 호출하여 반환된 값을 복사, return하지않을경우 undefined
// {current:1,getCount:2}

//8.11 setPrototypeOf():__proto__첨부------------------------------------------------------------------- //

// let Sports = function(){};
// Sports.prototype.getCount = function(){
//     return 123;
// }
// let protoObj = Object.setPrototypeOf({},Sports.prototype);
// console.log(protoObj.getCount()); //123

// setPrototypeOf():__proto__첨부 2------------------------------------------------------------------- //
// let Sports = function(){};
// Sports.prototype.getCount = function(){
//     return 123;
// }
// let fnObj = Object.setPrototypeOf({},Sports); 
// //위와 다르게 두번째 파라미터에 Sports를 지정하면, Sports의 prototype에 연결된 메서드를 직접 호출할수없다.
// console.log(fnObj.getCount);//undefined
// console.log(fnObj.prototype.getCount.call(Sports)); // 123
//전체 경로를 지정하여 호출. 

// __proto__와 prototype의 차이------------------------------------------------------------------- //
/** __proto__에 있는 메서드는 object.method() 의 형태로 출력하고
 * prototype에 연결된 메서드는 object.prototype.methodname.call()의 형태로 호출
 */
// let Sports = function(){
//     this.member =11;
// }
// Sports.prototype.getMember = function(){};
// let sportsObj = new Sports();
// console.log(sportsObj.__proto__ === Sports.prototype); //true
//Sports.prototype에 연결된 프로퍼티를 공유하므로 true

//------------------------------------------------------------------- //

let Sports = function(){};
Sports.prototype.get = function(){};
let sportsObj = new Sports();

sportsObj.__proto__["set"]=function(){} // sportsObj의 __proto__에 set메서드를 추가하면 Sports.prototype에 추가됨.
sportsObj.set(); //__proto__는 프로퍼티 검색과 경로를 재공하기 위한 것으로 실제 메서드는 Sports.prototype에 연결된 메서드 이용

let result = Sports.prototype.set; //Sports.prototype 에서도 set에 접근이 가능함. sportsObj에서 추가했지만 실제론 Sports.prototype에 들어가기때문.
console.log(result); // function(){}


