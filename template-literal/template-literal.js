
// 12------------------------------------------------------------------- //
// Template literal 은 문자열 처리를 위한 템플릿 제공

// console.log("1:",`123ABC가나다`);
// console.log("2:",`라인 1\n라인 2`);
// console.log("3:",`첫 번째 줄 
// 두 번째 줄`); // es5처럼 \n를 하지않아도 에디터에 입력된 그대로 줄바꿈되어 출력

// let one =1, two = 2;
// console.log("4:",`1+2는 ${one+two}이다`); // 1+2는 3이다


// 12.2 Tagged Template --------------------------------------------------- //

// let one =1, two = 2;
// function tagFunction(text,value){
//     console.log("1:", text[0]); // 1+2=
//     console.log("2:", value); //3
//     console.log("1:", text[1]);// ""
//     console.log("1:", typeof text[1]); // string
// }

// tagFunction `1+2=${one+two}`; // 문자열과 표현식 분리해서 넘겨줌

// 다수의 파라미터 형태

// let one =1, two = 2;
// function tagFunction(text,plus,minus){
//     console.log(text[0],plus,text[1]); // 1+2= 3이고 1-2=
//     console.log(minus, text[2], text[3]); //3 -1 "이다" undefined
// }
// tagFunction `1+2=${one+two}이고 1-2=${one-two}이다`; 

// //문자열과 표현식을 분리하면 ["1+2=","이고","1-2=","이다"]가 된다. 표현식은 각각 값으로 3과 -1이되며
// //이렇게 분리된게 tagFunction 파라미터로 각각 들어가게 된다.

//12.3 String.raw ---------------------------------------------------//
//템플릿의 표현식은 변한하지만 특수 문자와 유니코드는 문자열로 인식
// let one =1, two = 2;
// console.log('1:',String.raw`1+2=${one+two}`); //1+2=3

// console.log('2:',`줄 바꿈-1\n줄 바꿈-2`); 
// //줄 바꿈-1
// //줄 바꿈-2
// console.log('3:',String.raw`줄 바꿈-1\n줄 바꿈-2`);
// //줄 바꿈-1\n줄 바꿈-2
// console.log('4:',`Unicode \u0031\u0032`);
// //Unicode 12
// console.log('5:',String.raw`Unicode \u0031\u0032`);
// //Unicode \u0031\u0032

//12.4 String.raw(): 문자열 전개, 조합 ---------------------------------//
let one =1, two = 2;
let result = String.raw({raw:"ABCDE"},one,two,3); // raw에 문자열과 조합할 값을 작성. raw가 아닌 다른 값 사용 불가
console.log(result); //A1B2C3DE