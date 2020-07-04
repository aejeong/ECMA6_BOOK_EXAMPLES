
// 11------------------------------------------------------------------- //
//unicode
// console.log("1:", "\x31\x32\x33") //123
// console.log("2:", "\u0031\u0032\u0033") //123

// console.log("3:", "\u{34}\u{35}\u{36}") //456
// console.log("4:", "\u{1f418}") // 코끼리 아이콘
// console.log("5:", "\uD83D\uDC18") //코끼리 아이콘..

// 11.2 fromCodePoint() 코드 포인트 문자 반환 ----------------------------- //

// console.log("1:",String.fromCodePoint(35,36,37)); // #$%
// console.log("2:",String.fromCodePoint(0x31,0x32,0x33)); //123
// console.log("3:",String.fromCodePoint(44032,44033));//가각
// console.log("4:",String.fromCodePoint(0x1F418));//코끼리아이콘

// //es5함수
// console.log("5:",String.fromCharCode(0x1f418)); // ES5는 4자리까지만 표시 가능하기때문에 코끼리아이콘이 보이지않는다..
// console.log("6:",String.fromCharCode(0xD83D,0xDC18)); // 코끼리 아이콘...

// 11.3 codePointAt() 코드 포인트 값 반환 ----------------------------- //
//인덱스열 번째의 코드 값 반환
// console.log("가".codePointAt(0)); //44032

// let values = 'ABC';
// for(var value of values){
//     console.log(value, value.codePointAt(0)); //65 66 67
// }

// 11.4 includes(): 문자열 포함 여부 ----------------------------- //

// let target = '123가나다라456';
// console.log("1:", target.includes(2)); // true 숫자로 작성하여도 숫자를 문자열로 변환하여 체크
// console.log("2:", target.includes("가나")); // true
// console.log("3:", target.includes("12",5)); // false // 두번째 파라미터로는 시작할 인덱스 작성

// 11.5 startsWith(): 문자열 시작 여부 ----------------------------- //

// let target = '123가나다';
// console.log('1:', target.startsWith(123)); //true
// console.log('2:', target.startsWith("23")); // false
// console.log('3:', target.startsWith("가나",3)); //true

// 11.6 endsWith(): 문자열 종료 여부 ----------------------------- //

// let target = '123가나다';
// console.log(target.endsWith("가나다")) // true
// console.log(target.endsWith("가나")) // false
// console.log(target.endsWith("가나",5)) // true //인식할 문자 길이를 5로 지저해서 '123가나'를 기준으로 체크함

// 11.7 repeat(): 문자열 복제 ----------------------------- //

// let target = '123';
// console.log("1:",target.repeat(3)) // 123123123
// console.log("2:",target.repeat(0)) // ""
// console.log("3:",target.repeat(2.7)) // 123123 // 0.7 버리고 2번만 반복

// 11.8 normalize(): 유니코트 정규화 형식 변환 ----------------------------- //

console.log("1:","ㄱ".charCodeAt(0)); //12593
console.log("2:","ㅏ".charCodeAt(0)); //12623

let jamo = "\u3131\u314F"; //ㄱ 과 ㅏ 코드 포인트값 연결
console.log("3:",jamo.normalize("NFC")); // ㄱㅏ //NFC형식
console.log("4:",jamo.normalize()); // ㄱㅏ // 디폴트 NFC
console.log("5:",jamo.normalize("NFD")); // ㄱㅏ 
console.log("6:",jamo.normalize("NFKD")); // 가 
console.log("7:",jamo.normalize("NFKC")); //가
