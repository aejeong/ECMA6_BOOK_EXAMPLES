
//14 RegExp------------------------------------------------------------------- //
// unicode 플래그
// let result = /\u{31}\u{32}/u.test("12");
// console.log(result); // true  \u{31}\u{32} 유니코드의 코드 포인트 값으로 인식 test 메소드로 12와 비교

// result = /\u{31}\u{32}/.test("12"); // u 플래그를작성하지않고 하면 문자열로 인식함
// console.log(result); // false

//14.2 sticky 플래그----------------------------------------------------------- //

let regexpObj = /CD/y;
console.log("1:",regexpObj.lastIndex); // 디폴트 0 출력
console.log("2:",regexpObj.test("ABCDEF")); // CD가 존재하긴 하지만 C가 세번째에 있고, lastIndex값이 0임으로 false

regexpObj.lastIndex =2; // index 설정변경
console.log("3:", regexpObj.test("ABCDEF"));// true
console.log("4:", regexpObj.lastIndex); // 매치가 성공하면 끝문자인 D의 인덱스에 +1을 더해 설정되기때문에 4
console.log("5:", regexpObj.test("0123CD")); //true
