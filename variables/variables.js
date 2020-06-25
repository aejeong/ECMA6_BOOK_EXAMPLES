//"use strict";

//var

// use strict 사용시 키워드 미사용으로 에러 발생
// one =100;
// function get(){
    // one=300;
    //함수 안에 one 변수가 없기때문에 함수밖에서 찾음
//   console.log('함수:', one)
// }

// get();
// console.log('글로벌:',one)

//2.2 let --------------------------------------------------- //

// let book;
// let sports ="축구";
// sports = '농구'; //재할당

// let sports = '배구'; // sports라는 변수가 이미 있기때문에 같은 이름으로 선언시 SyntaxError
// let one=1, tow=2,three; // let 키워드 후 콤마(,)로 구분하여 연속 선언 가능하지만
// let four=4, let five =5; // 콤마로 구분하여 변수마다 선언시 SyntaxError
//let six = 6, var seven = 7; // let 과 var 섞어 사용불가

// 2.4 블록 스코프--------------------------------------------------- //

// let sports = "축구";
// if(sports){
//     let sports = "농구";
//     console.log("블록:",sports); //농구
// }
// console.log('글로벌:',sports) // 축구

//2.5 let과 this 키워드

// var music = "음악";
// console.log(this.music); // 음악

// let sports = "축구";
// console.log(this.sports); //undefined
//this가 window 오브젝트에 let 변수가 설정되지않음

//2.6 function ------------------------------------------------------- //

// let sports = "축구", music ="재즈"
// function get(){
//     let music = "클래식";
//     console.log(music); // 함수안에서 먼저 검색. 클래식
//     console.log(sports); // 함수 안에 해당 변수 미존재로 함수밖으로 나가 검색 축구
// }
// get();

//-------------------------------------------------------------------- //

// "use strict"
// var sports = "축구";
// let music = "재즈";
// function get(){
    // var sports ="농구";
    // let music ="클래식";
    // console.log('1: ', sports); // 농구
    // console.log('2: ', this.sports); // 축구
    // console.log('3: ', this.music); // undefined
// }
// window.get();
// 농구,축구,undefined출력됨
// sports 는 함수 내부 값을 출력하고 this.sports는 참조하고있는 window에 있는 sports 값 출력
// this.music은 window 오브젝트에 존재하지않음으로 undefined 를 출력함
// get(); 
// use strict 모드에서 window object없이 get()를 사용하게 될 경우 this가 가리킬 곳이 없기때문에
// this 자체가 undefined가 떨어지면서 TypeError 가 발생.

// 2.7 try-catch ---------------------------------------------------- //

// let sports = "축구";
// try{
//     let sports = "농구";
//     console.log(sports); //농구
// }catch(e){};
// console.log(sports); //축구

// 2.8 switch-case ---------------------------------------------------- //

// var count = 1;
// let sports = "축구";

// switch(count){
//     case 1:
//         let sports = "농구";
//         console.log(sports); //농구
// }
// console.log(sports) //축구

// 2.9 hoisting ---------------------------------------------------- //
// 자바스크립트는 위에서 아래로 실행되기떄문에 함수 작성하고 아래쪽에서 호출해야하지만
//반대로 해도 호출이됨.

// console.log(sports);
// var sports = "스포츠";
// // 하지만 변수의 경우, 호이스팅되어 접근할수는 있지만 할당된 값에 접근이 안됨.

// console.log(music);
// let music = "음악"; // let은 호이스팅되지않기때문에 ReferenceError 발생
