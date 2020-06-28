
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

let sports = {
    event:'축구',
    player : 11
}

let dup = Object.assign({},sports);
console.log(dup.player); // 11

dup.player = 33;
console.log(sports.player); // 11

sports.event = '수영';
console.log(dup.event); // 축구