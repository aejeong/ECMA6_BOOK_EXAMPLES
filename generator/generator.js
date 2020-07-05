
// 15------------------------------------------------------------------- //
// function* sports(one,two){ //제너레이터 선언문
//     console.log("함수 블록");
//     yield one + two;
// }
// console.log(typeof sports); //function

// let genObj = sports(1,2); // sports 함수 블록을 실행하지않고 제너레이터 오브젝트 생성 반환
// console.log(typeof genObj); //object

// function* 표현식------------------------------------------------------- //

// let sports = function*(one,two){ // let ports를 제외한 나머지는 무명함수. 
//     console.log("함수 블록");     // 생성한 함수를 변수에 할당해야 함수를 호출할수있고 sports가 함수 이름이 됨.
//     yield one + two;             // function* 함수이름(){} 으로 작성할수도있지만 외부에서 호출할때는 sports()로 호출해야하고
// }                                // 함수이름은 함수안에서 자신을 호출할때 사용

// let genObj = sports(10,20); // 제너레이터 오브젝트 생성 반환
// console.log(genObj.next())  //함수 블록 수행
// //함수 블록
// //{value:30, done:false}}

// 15.4 GeneratorFunction(): 제너레이터 함수 생성-------------------------- //
//new 연산자로 GeneratorFunction() 함수를 호출할수없음

// let GenConst =Object.getPrototypeOf(function*(){}).constructor;
//이름 없는 제너레이터 함수를 파라미터 값으로 지정해서 제너레이터 함수의 prototype 오브젝트를 반환받는다.
//prototype에 있는 constructor를 불러 할당함으로써 GenConst는 생성자 함수가 됨
// let sports = new GenConst("one","two","console.log('함수 블록'); yield one + two");
//new 연산자로 GenConst 생성자를 호출, 제너레이터 함수 생성

// let genObj = sports(3,4); // 제너레이터 오브젝트 생성 반환
// console.log(genObj.next()); //함수블록 실행

//함수 블록
// {value:7,done:false}}

// 15.5 yield 제너레이터 함수 실행,멈춤-------------------------- //

// function* sports(one){
//     let two = yield one;
// let param= yield two +one;
// yield param + one;
// }
// let generatorObj = sports(10);

// console.log(generatorObj.next()) // {value:10, done: false}
//제너레이터 오브젝트의 next() 호출하면 sports 제너레이터 함수 블록의 첫 줄 부터 첫번째 yield 까지 수행
//고로 let two = yield one을 실행
// 할당 연산자 (=) 오른쪽 값을 왼쪽 변수에 할당하지만 yield는 할당하지 않음.
// console.log(generatorObj.next()) //{value:NaN, done: false} // two로 들어온 값이 없기때문에 undefined가 설정되면서 NaN 반환
// console.log(generatorObj.next(20)) //{value:30, done: false} // 파라미터 값20을 param에 설정 param 값이 20, one 변수 값이 10

//------------------------------------------------------------//

// function* sports(one){
//     yield one;
//     let check = 10;
// }
// let genObj = sports(10); // 제너레이터 함수의 one 파라미터에 10이 설정되면서 제너레이터 오브젝트 생성 반환

// console.log(genObj.next()); //{value:10, done:false}
// console.log(getObj.next()); // {value:undefined, done:true} // 더 이상 수행할 yield가 없어 반환값이 없음으로 undefined. done : true

// 15.6 next():yield 단위로 실행-------------------------- //

// let gen = function*(value){
//     value = value+10;
//     yield ++value;
//     value=value+7;
//     yield ++value;
// }
// let genObj = gen(1);

// console.log(genObj.next()); // {value:12, done:false}  //첫줄부터 yield 표현식까지 수행
// console.log(genObj.next()); // {value:20, done:false}
// console.log(genObj.next()); // {value:undefined,done:true}; // yield가 없음으로 undefined, true

// ----------------------------------------------------------- //
//제너레이터 함수에 yield를 작성하지않고 return 문을 작성한 형태
// let gen = function*(value){
//     return ++value;
// }

// let genObj = gen(1);
// console.log(genObj.next()); // {value:2, done: true}

// ----------------------------------------------------------- //

// let gen = function*(param){
// let one =param+1;
// yield one;
// var two = 2;
// yield one+two;
// }
// let genObj = get(10);

// console.log(genObj.next()); // {value:11, done:false}
// console.log(genObj.next()); // {value:13, done:false}
//function 키워드 함수는 다시 함수안으로 들어가면 변수에 초기값을 설정하지만
// 제너레이터 함수는 변수에 설정된 값을 유지하는 것이 특징.

// ----------------------------------------------------------- //

// let one, two;
// let gen = function*(){
//     one = yield;
//     two = yield one+10;
// }
// let genObj = gen();

// console.log(genObj.next()) // {value:undefined,done:false} // yield에 표현식을 작성하지않으면 value에 undefined 설정
// console.log(genObj.next(12)) // {value:22,done:false} // 앞 one 변수에 12설정 하고 그다음 yield 실행 
// console.log(genObj.next(34)) // {value:undefined,done:true} // 수행할 yield가 없음으로 undefined

// 15.7 next() 활용---------------------------------------------- //

// let getAmount = function*(qty,price){
//     let amount = Math.floor(qty * price);
//     let discount = yield amount;
//     return amount - discount;
// }

// let getDiscount = function(amount){
//     return amount > 1000 ? amount * 0.2 : amount*0.1;
// }

// let amountObj = getAmount(10,60);

// let result = amountObj.next();
// console.log(result); // {value:600 , done:false}
// let dcAmount = getDiscount(result.value); 
// console.log(dcAmount); // 60
// console.log(amountObj.next(dcAmount)); // 600 - 60   {value: 540, done:true}

// 15.8 next() 의 다양한 형태---------------------------------------------- //

// let gen = function*(value){
//     let count = 0;
//     while(value){
//         yield ++count;
//     }
// };
// let genObj = gen(true);
// console.log(genObj.next()) // {value:1,done:false}
// console.log(genObj.next()) // {value:2,done:false}

// --------------------------------------------------------------------- //

// let gen = function*(){
//     return yield yield yield;
// }

// let genObj = gen();

// console.log(genObj.next()) // {value:undefined, done:false}
// console.log(genObj.next(10)) // {value:10, done:false} 두번째 yield 수행. 파라미터 값을 받을 변수가 없음으로 받은 값 그대로 반환
// console.log(genObj.next(20)) // {value:20, done:false}
// console.log(genObj.next(30)) //{value:30, done:true} // 수행할 yield가 없지만 return을 작성했음으로 파라미터로 넘겨준 값 반환

// --------------------------------------------------------------------- //

// let gen = function*(){
//     return [yield yield];
// };

// let genObj = gen();

// console.log(genObj.next()) // {value:undefined, done:false} // 첫 yield
// console.log(genObj.next(10)) // {value:10, done:false} // 두번째 yield
// console.log(genObj.next(20)) // {value:Array[1], done:true} //return [yied yield]에서 yield를 제외한 []를 파라미터로 넘겨준 값을 작성해 반환

// --------------------------------------------------------------------- //

// let gen = function*(start){
//     let value = start;
//     while(true){
//         yield ++value;
//     }
// }
// for(var count of gen(10)){
//     console.log(count); // 11 12 13
//     if(count >12){
//         break;
//     }
// }

// 15.9 return(): 이터레이터 종료--------------------------------------- //
// let gen = function*(start){
//     let count = start;
//     while(true){
//         yield ++count;
//     }
// }

// let genObj = gen(10);

// console.log(genObj.next()) // {value:11, done:false}
// console.log(genObj.return(77)) // {value:77, done:true} // genObj 종료시키고 제너레이터 함수 호출 없이 파라미터 값 77 반환
// console.log(genObj.next(55)) // {value:undefined, done: true}; 

// 15.10 throw(): Error 발생 --------------------------------------- //
// let gen = function*(){
//     try{
//         yield 10;
//     }catch(message){
//         yield messae;
//     }
//     yield 20;
// }
// let genObj = gen();

// console.log(genObj.next()) // {value:10, done:false}
// console.log(genObj.throw('에러 발생')) // {value:'에러 발생', done:false}
// console.log(genObj.next()) // {value:20, done:false}

// --------------------------------------------------------------------- //

// let gen = function*(){
//     throw "에러 발생";
//     yield 20;
// }
// let genObj = gen();
// try{
//     let result = genObj.next();
// }catch(error){
//     console.log(error); // 에러 발생
// }
// console.log(genObj.next()); // {value:undefined,done:true}

// 15.11 yield* 키워드------------------------------------------------------ //
// function* gen(){
//     yield* [10,20]; //next 호출할때마다 iterable 오브젝트 하나씩 실행
// }

// let genObj = gen();

// console.log(genObj.next()) //{value:10, done:false}
// console.log(genObj.next()) //{value:20, done:false}
// console.log(genObj.next(77)) // {value:undefined, done:true};

// --------------------------------------------------------------------- //
// let plusGen = function*(value){
//     yield value + 5;
//     yield value +10;
// }

// let gen = function*(value){
//     yield* plusGen(value);
//     yield value +20;
// };

// let genObj = gen(10);
// console.log("1:",genObj.next()) // {value:15, done:false}
// console.log("2:",genObj.next()) // {value:20, done:false} //plusGen에서 첫번째 수행한 yield 이후에 두번째 yield 수행
// console.log("3:",genObj.next()) // {value:30, done:false} // plusGen에 yield가 없음으로 gen()함수 남은 yield 시행

// --------------------------------------------------------------------- //
let gen = function*(value){
    yield value;
    yield* gen(value+10);
}

let genObj = gen(1);
console.log(genObj.next()) // {value:1,done:false}
console.log(genObj.next()) // {value:11,done:false}
console.log(genObj.next()) // {value:21,done:false}