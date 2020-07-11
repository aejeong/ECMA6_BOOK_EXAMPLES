//----------------------------------------------//
//Symbol은 new 연산자를 사용할수없다. 
//Symbol()로 생성된 값은 프로그램 전체를 통해 유밀하며 값 변경 불가
//Symbol은 Symbol 반환함. 오브젝트를 생성하는 리터럴이 없음

// const sym = Symbol();
// console.log("1:",sym); // Symbol()
// console.log("2:",typeof sym); // symbol
// console.log("1:",Symbol('주석')); // Symbol('주석')
// console.log("1:",sym == Symbol()); //Symbol을 실행할때마다 프로그램 전체에서 유일한 값을 생성하므로 false

// Symbol 값 변경 ----------------------------------------------//

// const sym = Symbol();
// try{
//     +sym;
// }catch(e){
//     console.log('+sym 사용불가')
// };

// try{
//     sym | 0;
// }catch(e){
//     console.log("sym |0 사용불가")
// }

//----------------------------------------------//

// const sym = Symbol();
// try{
//     sym + '문자열'
// }catch(e){
//     console.log('문자열 연결 불가') // 실행됨
// }

// console.log(String(sym)+"연결") // Symbol()연결
// console.log(sym.toString()+"연결") //Symbol()연결

//----------------------------------------------//

// const sym = Symbol('123');
// try{
//     `${sym}` // 심볼값을 템플렛에 사용하면 문자열 값으로 변환되어 외부 노출되기때문에 에러가 발생
// }catch(e){
//     console.log("`${sym} 불가`") //실행됨
// }

//Symbol 값을 외부에 노출시키지 않는 것이 Symbol의 특징

//17.4 Symbol 오브젝트 생성----------------------------------------------//
// let sym = Symbol("123");
// const obj = Object(sym);
// console.log(obj) //[[PrimitiveValue]]: Symbol(123)

// console.log(obj == sym) //true  값을 비교하기때문에 Symbol('123') == Symbol('123') 으로 true
// console.log(obj === sym) //false 타입 비교로 Symbol과 오브젝트이기때문에 false

//17.5 오브젝트에서 Symbol 사용----------------------------------------------//

// let sym = Symbol("123");
// let obj = {[sym]:"456"} // [sym] 을 symbol-keyed 프로퍼티라 함

// console.log(obj); //Object{Symbol(123) : '456'}
// console.log(obj[sym]) //  '456'
// console.log(obj.sym) //undefined  [sym]형태로 사용하지않고 접근하려하면 undefined를 반환하게됨

//17.6 Symbol 사용형태----------------------------------------------//
// [[Enumerable]] :false 로, 프로퍼티를 열거할수없음

// let obj = {nine:999};
// obj[Symbol('one')] = 111;
// obj[Symbol('two')] = '222';
// console.log(obj);// { nine: 999, Symbol(one): 111, Symbol(two): "222"}

// for(var key in obj){
// console.log(key) //nine
// }

// 클래스의 메서드 이름으로 Symbol 사용 -----------------------------//

// const symbolOne= Symbol('symbol one')
// const symbolTwo= Symbol('symbol two')

// class Sports{
//     static [symbolOne](){
//         return 'Symbol-1';
//     }

//     [symbolTwo](){
//         return 'Symbol-2'
//     }
// }

// console.log(Sports[symbolOne]()); // 'Symbol-1'
// let obj = new Sports();
// console.log(obj[symbolTwo]()); //'Symbol-2'

// JSON.stringfy()에서 Symbol 사용 -----------------------------//

// let sym = Symbol('key');
// let result = JSON.stringify({[sym]: '값'});
// console.log(result); // {}  심볼값이 외부에 노출되지않도록 하기위해 키와 프로퍼티값이 문자열로 변환되지않았다
