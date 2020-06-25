// 2.10 for() ---------------------------------------------------- //

//var 사용시
// var nodes = window.document.querySelector('ul');
// for(var k=0;k<nodes.children.length; k++){
//     var el = nodes.children[k];
//     el.onclick = function(event){
//         event.target.style.backgroundColor = 'yellow';
//         console.log(k); // 3
//     }
// }

// let 사용시
// var nodes = window.document.querySelector('ul');
// for(let k=0;k<nodes.children.length; k++){
//     var el = nodes.children[k];
//     el.onclick = function(event){
//         event.target.style.backgroundColor = 'yellow';
//         console.log(k); // let 변수가 스코프를 갖기 때문에 클릭한 각 엘리먼트의 값 출력 
//     }
// }

// 2.11 const ---------------------------------------------------- //
//관습적으로 상수는 대문자로 작성하지만 const 라는 키워드가 상수임을 가리키기때문에 소문자로 작성해도 됨
// const SPORTS = "축구"; // const는 선언 후 할당 까지 해야함
// try{
//     SPORTS = "농구"; // 이미 할당된 값이 있기때문에 재할당 불가로 에러 발생
// }catch(e){
//     console.log("const 재할당 불가");
// }

// const-2 ---------------------------------------------------- //

// const obj = {language : "한글"};
// try{
//     obj = {}; // try문 밖 obj에 재할당하는것이 되므로 에러 발생
// }catch(e){
//     console.log("const 재할당 불가")
// }
// obj.language = "영어" // obj 자체는 바꿀수없지만 프로퍼티에는 값을 할당 가능
// console.log(obj.language)  // 영어

