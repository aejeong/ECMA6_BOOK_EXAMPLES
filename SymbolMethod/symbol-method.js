//19.1 for() Symbol 값 저장----------------------------------------------//
// console.log(Symbol.for('sports')) // Symbol(sports) //for가 글로벌 Symbol 레지스트리에 생성한 Symbol 값을 저장
// console.log(Symbol.for('sports')) //Symbol(sports) //앞에 이미 "sprots"를 프로퍼티 키로하여 저장했기떄문에 등록된 Symbol값을 반환한다.

// console.log(Symbol.for("ABC")=== Symbol.for("ABC")) //왼쪽과 오른쪽은 같은 Symbol key를 비교한것이기때문에 true
// console.log(Symbol.for("DEF")=== Symbol("DEF")) // Symbol.for("DEF")는 글로벌 Symbol 레지스트리에 저장되고 오른쪽은 스코프에 저장됨으로 false
// console.log(Symbol.for(true)) // Symbol(true); // 문자열이 아닌값을 지정하면 문자열로 변환하여 프로퍼티 키로 사용

//19.2 keyfor()  key 값 반환----------------------------------------------//

// let symOne = Symbol.for("123"); // 글로벌 Symbol 레지스트리에 프로퍼티 키로 "123" 저장하여 symOne에 할당
// console.log(Symbol.keyFor(symOne)); // keyFor로 key 값 반환

// let symTwo = Symbol("222"); // 글로벌 스코프에 222 생성하지만 글로벌 Symbol 레지스트리에 등록되지 않기때문에 
// console.log(Symbol.keyFor(symTwo));// Symbol.keyFor 에서 undefined 반환

//19.3 toString() 문자열로 변환----------------------------------------------//
//  값이아닌 Symbol 값 생성할때의 형태를 문자열로 반환
// console.log("1:",Symbol("123").toString()); // Symbol(123)
// console.log("2:",Symbol.for("ABC").toString()); //Symbol(ABC)
// console.log("3:",Symbol.iterator.toString()); // Symbol(Symbol.iterator) // Well-known Symbol 문자열로 변환

//19.4 valueOf() Symbol 프리미티브 값----------------------------------------------//
// console.log(Symbol("123").valueOf()); // Symbol(123)  심볼을 생성할때의 형태 반환
// console.log(Symbol.for("789").valueOf()); // Symbol(789)

//19.5 getOwnPropertySymbols():Symbol 프로퍼티 반환----------------------------------------------//
// let bookObj = {book:123};
// bookObj[Symbol("one")] = 10;
// bookObj[Symbol.for("two")] = 20;

// let names = Object.getOwnPropertyNames(bookObj);
// console.log("1:", names); // ["book"]
// let symbolList = Object.getOwnPropertySymbols(bookObj);
// console.log("2:",symbolList); // [Symbol(one),Symbol(two)]

// for(let sym of symbolList){
//     console.log(sym.toString(),bookObj[sym]); // Symbol(one) 10 // Symbol(two) 20 
// }

// let emptyList = Object.getOwnPropertySymbols({}); // 빈 배열을 지정하면 빈 배열이 반환됨
// console.log("5:",emptyList.length); //Symbol이 없기때문에 0출력

//19.6 JSON.stringfy(): JSON 형태로 반환 ----------------------------------------------//
//JSON의 key : value 형태로 Symbol-keyed 프로퍼티로 작성하면 Symbol이 변환에서 제외된다.
//심볼 값을 외부에 노출시키지 않으려는 의도 이지만 에러가 나지않기때문에 주의
// let result = JSON.stringify({[Symbol("one")]:"1"});
// console.log(result); // "{}"
// console.log(typeof result); // string
// console.log(JSON.stringify({[Symbol.for("two")]:"2"})); // "{}"

//주석을 프로퍼티 key 값으로 활용 ----------------------------------------------//
// Symbol 주석을 프로퍼티 키로 활용하여 JSON.stringfy()에서 제외되는 것 방지하는 방법
let bookObj = {};
bookObj[Symbol("one")] = 10;
bookObj[Symbol.for("two")] = 20;

let symbolList = Object.getOwnPropertySymbols(bookObj);
console.log(symbolList); // [Symbol(one), Symbol(two)]

let first,second,key,keyValue = {};
for(let sym of symbolList){
    key = Symbol.keyFor(sym); // keyFor을 사용해서 글로벌 레지스트리에 등록된 Symbol 키를 반환
    // Symbol("one")은 글로벌 스코프에 지정되있기때문에 undefined 된다
    if(key){ //20
        keyValue[key] = bookObj[sym];  // two =20;
    }else{
        //Symbol(one)
        first = /^Symbol[(]/[Symbol.replace](sym.toString(),""); // Symbol의 "one" 이외의 문자를 빈문자열로 대체
        second = /[)]$/[Symbol.replace](first,""); // "one" 문자열이 second에 할당됨
        keyValue[second] = bookObj[sym];
    }
}
console.log(JSON.stringify(keyValue)); // {"one":10 , "two":20}

