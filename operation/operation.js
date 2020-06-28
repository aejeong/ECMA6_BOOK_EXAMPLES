
// 7.1------------------------------------------------------------------ //

// 프로퍼티 문자열 조합
// let item ={
//     ["one"+"two"]:12
// }
// console.log(item.onetwo); //12
// console.log(item); // obj = {onetwo:12}

//------------------------------------------------------------------ //
// let item = "tennis";
// let sports = {
//     [item]:1, // 대괄호 안에 변수이름 작성하면 변수값을 키로 사용
//     [item+"Game"] : "윔블던",
//     [item+"Method"](){ //변수이름과 문자열 조합에 함수를 나타내는 소괄호() 사용으로 tennisMethod() 호출가능
//         return this[item];
//     }
// }

// console.log(sports.tennis); //1
// console.log(sports.tennisGame);// 윔블던
// console.log(sports.tennisMethod()); // 1

//디스트럭처링과 프로퍼티 이름 조합------------------------------------------------------------------ //
// let one = "sports";
// let {[one]:value} = {sports:"농구"};
// {sports : value} -> {sports: 농구}
// console.log(value) // 농구

//7.2 default value------------------------------------------------------------------ //

// let [one,two,five = 5] = [1,2];
// console.log(five);// 5

// [one,two,five =5] = [1,2,77];
// console.log(five); // 77

// let {six,seven=7} = {six:6};
// console.log(six,seven); // 6 7

//------------------------------------------------------------------ //
// let [one,two=one+1,five=two+3] =  [1];
// console.log(one,two,five); //1 2 5
//왼쪽에서 오른쪽으로 디폴트 값 적용

//7.3 default 파라미터------------------------------------------------------------------ //

// let plus = (one,two=2)=> one+two;
// console.log(plus(1)); // 3
// console.log(plus(1,undefined)); // 3  undefined 넘기면 파라미터에서는 값을 넘기지 않은것으로 인식해 디폴트 값이 적용됨
// console.log(plus(1,70)); // 71

//파라미터 디스트럭처링--------------------------------------------------------------- //

// let getTotal = ([one,two]=[10,20])=> one+two;
// console.log(getTotal()); // 30

// let getValue = ({two:value}={two:20})=> value;
// console.log(getValue()); // 20

//7.4 for-of ------------------------------------------------------------------ //

// for(variable of iterableObject) {}

//배열을 반복할수있다
// for(var value of [10,20,30]){
//     console.log(value); //10 20 30
// }

//string 사용
//문자열 하나씩 분리하여 반복
// for(var value of "ABC"){
//     console.log(value);// A B C
// }

// nodelist 반복

// let nodes = document.querySelectorAll('li');
// for(var node of nodes){
//     console.log(node.textContent);
// }

//디스트럭처링 ------------------------------------------------------------------ //
// let values= [
//     {item:'선물1',amount:{apple:10,candy:20}},
//     {item:'선물2', amount: {apple:30,candy:40}}
// ]

// for(var {item:one,amount:{apple:two,candy:five}} of values){
//     console.log(one,two,five) // 선물  10 20
//                             // 선물2 30 40
// }


//7.4 for-of 과 for-in 의 차이 ------------------------------------------------------------------ //

// for-in 문의 대상은 Obejct . 열거 가능한 프로퍼티. 
// for-of 문의 대상은 Iterable Obeject . 

// let values= [10,20,30]; // Array 오브젝트
// Array.prototype.music = function(){
//     return '음악';
// }

// Object.prototype.sports = function(){
//     return '스포츠';
// }

// for(var key in values){
//     console.log(key,values[key])
// }
// // for in 문으로 values를 열거하면 빌트인 메소드는 열거되지않지만
// // Array.prototype에 추가한 열거되기때문에 위 music 과 sports를 따로 호출하지않아도 출력됨


// console.log("<<for-of>>");
// for(var value of values){
//     console.log(value);
// }
// //for of 문으로 values 배열을 열거하면 prototype에 연결된 프로퍼티가 열거되지않음

//7.6 for-of로 object 열거 ------------------------------------------------------------------ //

//Object는 Iterable 오브젝트가 아님으로 for-of문으로 열거할수없지만
//Object.keys() 이용해 열거할수있다.
// let sports = {
//     soccer: '축구',
//     baseball:'야구'
// }

// let keyList = Object.keys(sports);
// console.log(keyList,'List'); // ['soccer','baseball']
// for(var key of keyList){
//     console.log(key,sports[key]);
// }

//7.7 거듭 제곱 연산자 ------------------------------------------------------------------ //
// Exponentiation 거듭 제곱
console.log(3**2); // 9
console.log(3**3); // 2
console.log(Math.pow(3,3)); // 27
