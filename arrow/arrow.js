
// 3------------------------------------------------------------------- //

// es5
// var es5 = function(one, two){
//     return one+two;
// }

// var sum = es5(1,2);
// console.log(sum);//3

//es6
// let es6 = (one,two) => {
//     return one + two;
// }

// let result = es6(1,2);
// console.log(result);//3

// 3-3 블록, 파라미터--------------------------------------------------- //

// let total = (one,two) => one+two;
// let result = total(1,2);
// console.log(result); //3

//-------------------------------------------------------------------- //

// let get = value=> value+10;
// let result = get(20);
// console.log(result); //30

//-------------------------------------------------------------------- //

// let noParam = () => 3+4;
// let result = noParam();
// console.log(result); // 7

// 3-4 return --------------------------------------------------- //
// let sports = () => {}; 
// let result = sports(); // 화살표가 {}를 블록으로 인식해서 object가 반환되는것이 아닌 undefined 반환됨
// console.log(result); // undefined;

//-------------------------------------------------------------------- //

// let get = param => ({sports:'축구'}); //화살표 함수에서 오브젝트를 반환하려면 소괄호()에 감싸면됨.
// let result = get(); 
// console.log(result); // {sports:'축구'};


// 3-5 new 연산자 --------------------------------------------------- //
// let get = () => 123;
// get();
//get()을 살펴보면 __proto__안에 빌트인 Funtion 오브젝트의 메서드가 있고 constructor는 연결되있지않기때문에
//new 연산자로 인스턴스를 생성할수없다.

// 3-6 arguments 사용 --------------------------------------------------- //

// 화살표 함수에는 argumnets 가 존재하지않기때문에 ReferencError 발생
// let sports = ()=>{
//     try{
//         let args = argumnets;
//     }catch(error){
//         console.log('사용 불가');
//     }
// }

// sports(1,2)

// 대신해 화살표 함수에서는 argumnets 대신 rest 파라미터 사용.
// let sports = (...rest)=>{
//     try{
//         let args = rest; 
//         console.log(args)
//     }catch(error){
//         console.log('사용 불가');
//     }
// }
// sports(1,2) // 1,2가 rest에 배열로 설정됨

// 3-7 this와 setTimeout() --------------------------------------------------- //

// let Sports = function(){
//     this.count = 20;
// }

// Sports.prototype = {
//     plus : function(){
//         this.count +=1;
//     },
//     get: function(){
//         setTimeout(function(){ // setTimeout이 window에 속한 메서드이기떄문에 this는 window로 참조하게됨
//             console.log(this === window); // true
//             console.log(this.plus); // window에 plus가 없으므로 undefined
//         },1000)
//     }
// };

// let newSports = new Sports();
// newSports.get();

// 3-8 화살표 함수와 setTimeout() --------------------------------------------------- //

// let Sports = function(){
//     this.count = 20;
// }

// Sports.prototype = {
//     plus : function(){
//         this.count +=1;
//     },
//     get: function(){
//         setTimeout(() =>{
//             this.plus() //화살표 함수로는 this가 인스턴스를 참조하게 됨
//             console.log(this.count);
//         },1000)
//     }
// };

// let newSports = new Sports();
// newSports.get();

// 3-9 prototype --------------------------------------------------- //

let Sports = function(){
    this.count = 20;
}

Sports.prototype = {  
    add: ()=>{  //화살표 함수를 prototype에 연결하면 this가 window를 참조하게 됨.
        this.count += 1;
    }
};

let newSports = new Sports();

newSports.add();
console.log(newSports.count); //20
console.log(window.count); // NaN  window에 count가 없음으로 undefined + 1이 되버려서 NaN
