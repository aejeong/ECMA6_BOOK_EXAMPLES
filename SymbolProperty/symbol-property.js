// toStringTag----------------------------------------------//

// let Sports = function(){};
// let sportsObj = new Sports;
// console.log(sportsObj.toString()); // [object Object]

// Sports.prototype[Symbol.toStringTag] = 'Sports-Function'; // Object에 표시할 문자열 지정 가능
// console.log(sportsObj.toString()); // [object Sports-Function]

// 클래스의 메서드로 사용----------------------------------------------//
// class Book{};
// let bookObj = new Book();
// console.log(bookObj.toString()); //  [object Object]

// class Sports{
//     get [Symbol.toStringTag](){
//         return 'Sports-class'
//     }
// }

// let sportsObj = new Sports();
// console.log(sportsObj.toString()); // [object Sports-class]
// console.log(Map.prototype[Symbol.toStringTag]); //Map  Map은 이미 Symbol.toStringTag가 포함되어있다

// 18.3 isConcatSpreadable----------------------------------------------//
// Array 오브젝트의 concat에서 배열 결합할때 결합하는 배열의 펼침 여부를 지정할수있다. 기본적으로 true 값
// let one = [11,12], two = [21,22];
// let result = one.concat(two);
// console.log(result, result.length); // [11,12,21,22] 4

// two[Symbol.isConcatSpreadable] = false;
// result = one.concat(two);
// console.log(result,result.length); // [11,12,Array[2] 3

// two[Symbol.isConcatSpreadable] = true;
// result = one.concat(two);
// console.log(result,result.length); // [11,12,21,22] 4

// array-like 오브젝트 사용 ----------------------------------------------//
// let one = [11,12];
// let fiveSix = {
//     0:'five',1:'six',length:2
// }
// let result = one.concat(fiveSix);
// console.log(result,result.length); // [11,12,Object] 3

// let arrayLike = {
//     [Symbol.isConcatSpreadable] :true,
//     0:"five",1:'six',length:2
// }

// result = one.concat(arrayLike);
// console.log(result, result.length) // [11,12,'five','six'] 4

// unscopables ----------------------------------------------//

// let sports = {soccer:'축구',baseball:'야구'}
// with(sports){
//     console.log(soccer,baeball) // 축구 , 야구
// }
// sports[Symbol.unscopables] = {baseball:true}; //전개하지 않을 프로퍼티 작성
// try{
//     with(sports){
//         console.log(soccer); // 축구
//         let value = baseball; // baseball 프로퍼티가 전개되지 않음으로 할당할수없어 에러 메세지 출력
//     }
// }catch(e){
//     console.log(e.message);
// }

// species ----------------------------------------------//
//인스턴스의 메소드를 호출했을 때 인스턴스를 반환하도록 하는것이 Symbol.species
//반환되는 인스턴ㅅ느 병경 가능
// class ExtendArray extends Array {
//  getValue(){}
// }

// let newArray = new ExtendArray(1,2,3);

// let newInst = newArray.slice(1,2);
// console.log(newInst instanceof ExtendArray); // true

//  ----------------------------------------------------//

// class ExtendArray extends Array{
    // static get [Symbol.species](){ // Array 오브젝트의 Symbol.speices 오버라이드
        // return Array; // Array 인스턴스 반환
    // }
// }
// let oneInstance = new ExtendArray(1,2,3);

// let twoInstance = oneInstance.slice(1,2); //Symbol.speices가 호출되면서 return Array로 생성한 인스턴스를 할당
// console.log(oneInstance instanceof ExtendArray) //true

// console.log(twoInstance instanceof Array); // true
// console.log(twoInstance instanceof ExtendArray); // false

//다른 class 반환----------------------------------------------------//
// class ExtendOne extends Array {
//     showOne(){
//         console.log("ExtendOne")
//     }
// }

// class ExtendTwo extends Array{
//     static get [Symbol.species](){
//         return ExtendOne; // 클래스의 constructor 반환하므로 인스턴스 생성하여 반환
//     }
//     showTwo(){
//         console.log("ExtendTwo")
//     }
// };

// let twoInst = new ExtendTwo(10,20,30); 
// let threeInst = twoInst.filter(value => value >10);
// console.log(threeInst); // 20 30

// threeInst.showOne(); // ExtendOne
// console.log(threeInst.showTwo); // undefined

// null 반환----------------------------------------------------//
// class ExtendOne extends Array{
//     static get [Symbol.species](){
//         return null; // 
//     }
// };

// let oneInst = new ExtendOne(10,20,30);
// let arrayInst = oneInst.filter(value=>value>10); //ExtendOne 클래스의 Symbol.speicies가 호출되며 return 값이 null이지만
// // 디폴트 Symbol.species가 호출되어 Array 인스턴스 생성 반환하기때문에 filter 사용가능
// console.log(arrayInst instanceof Array); // true
// console.log(arrayInst instanceof ExtendOne); // false

// toPrimitive----------------------------------------------------//

//기존
// console.log("1:", 1+undefined); // NaN
// console.log("2:",1+null); // 1

// console.log("3:","1"+undefined); // 1undefined
// console.log("4:","1"+null);// 1null

//  ----------------------------------------------------//

// let obj = {};
// console.log("1:",123+obj); //123[object Object]
// console.log("2:","123"+obj)// 123[object Object]

//  ----------------------------------------------------//
// Symbol.toPrimitive()의 세가지 모드
/// Number 환경에서는 number를 파라미터에 설정
// String , string
//Number와 String이 아니면 default를 파라미터에 설정

// let obj = {
//     [Symbol.toPrimitive](hint){
//         if(hint === 'number'){
//             return 30;
//         }
//         if(hint === 'string'){
//             return "문자열";
//         }
//         return '디폴트';
//     }
// }
// console.log("1:", 20+obj) //20디폴트
// console.log("2:", 20*obj) //600
// console.log("3:", obj+50)//디폴트50
// console.log("4:", +obj+50) //80  +obj에서 +는 +연산자로 피연산자를 Number 타입으로 변환
// console.log("5:", `${obj}`+123); //문자열123

// 이터레이터----------------------------------------------------//
// let numberArray = [10,20];
// for (let value of numberArray){
//     console.log(value); // 10  //20
// }

// let iteratorObj = numberArray[Symbol.iterator](); // numberArray 인스턴스의 Symbol.iterator() 호출 이터레이터 오브젝트 생성 , 반환
// console.log(iteratorObj.next()) // {value:10, done:false}
// console.log(iteratorObj.next()) // {value:20, done:false}
// console.log(iteratorObj.next()) // {value:undefined , done :true}

// String.prototype[Symbol.iterator]----------------------------------------------------//
// let StringValue = "1A";
// for (let value of stringValue){
    // console.log(value);// 1 // A
// }
// let iterObj = stringValue[Symbol.iterator]();

// console.log(iterObj.next()) // {value: "1", done: false}
// console.log(iterObj.next()) // {value: "A", done: false}
// console.log(iterObj.next()) // {value: undefined, done:true}

// Object 이터레이션----------------------------------------------------//
// Object에는 Symbol.iterator가 없기때문에 for of문을 사용할수없다. 
// 하지만 Object에 Symbol.iterator를 작성하는 방법으로 반복 처리 할수있다.

// let obj = {
//     [Symbol.iterator](){
//         return {
//             maxCount:2,
//             count:0,
//             next(){
//                 if(this.count<this.maxCount){
//                     return {value:this.count++,done:false}
//                 }
//                 return {value:undefined,done:true}
//             }
//         }
//     }
// }

// let iteratorObj = obj[Symbol.iterator]();

// console.log(iteratorObj.next()) //{value:0, done:false}
// console.log(iteratorObj.next()) // {value:1, done:false}
// console.log(iteratorObj.next()) // {value:undefined, done:true};

// 18.11 제너레이터 ----------------------------------------------//
// let obj = {};
// obj[Symbol.iterator] = function*(){
//     yield 10;
//     yield 20;
//     yield 30;
// }

// let result = [...obj];
// console.log(result); // [10,20,30];

// ------------- ----------------------------------------------//
// let gen = function*(){
//     yield 10;
//     yield 20;
// }
// let genObj = gen();
// console.log(genObj.next()); // Object {value:10, done:false}

// let iteratorObj = genObj[Symbol.iterator](); // generator가 아닌 iterator의 next() 수행
// console.log(iteratorObj.next()) // Object {value:20, done:false}

// match(): match 결과 반환 ----------------------------------------------//

// console.log("1:", "Sports".match(/s/)); // [0:"s", index:5, input: "Sports"]

// class MatchCheck{
//     constructor(base){
//         this.base = base;
//     }

//     [Symbol.match](target){ //기존 match를 Symbol.match로 오버라이드
//         return this.base.indexOf(target)>=0;
//     }
// }
// let instMatch = new MatchCheck("sports")
// console.log("2:","po".match(instMatch)); // instaMatch인스턴스의 Symbol.match 호출 po를 파라미터 값으로 넘김 true 반환

// ------------- ----------------------------------------------//

try{
    "ABC".includes(/ABC/); // Symbol match 여부 체크시 존재하지않아 정규 표현식으로 인식하지 못하여 TypedError 발생
}catch(e){
    console.log("정규 표현식 작성 불가") //출력
}
let regexObj = /ABC/; // RegExp 오브젝트 생성하여 할당
regexObj[Symbol.match] = false; // 값이 없으면 정규 표현식으로 인식하지 않으므로 인식하지 않도록 하기 위해 false 할당
console.log("/ABC/".includes(regexObj)); // true
//Symbol.match 값이 false이므로 regexpObj에 설정된 /ABC/를 정규 표현식으로 인식하지 않는다.

