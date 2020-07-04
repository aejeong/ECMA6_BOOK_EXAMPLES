// Number 상수 -------------------------------------------------- //

// console.log("1:",Number.MAX_SAFE_INTEGER); //1: 9007199254740991
// console.log("2:",Math.pow(2,53)-1); // 2: 9007199254740991

// console.log('3:',Number.MIN_SAFE_INTEGER); // 3: -9007199254740991
// console.log('4:',-(Math.pow(2,53)-1)); // 4: -9007199254740991


// 9.2 EPSILON -------------------------------------------------- //

// let total = 0.1+0.2;
// console.log(total); // 0.3을 예상하지만 자바스크립트는 2진 유동 소수점 방식으로 값을 계산하기때문에
// //0.30000000000000004 이라는 어마어마한 숫자가 나오게됨

// let result = (Math.abs(0.1+0.2-0.3)<Number.EPSILON);
// console.log(result); //true
// //0.1 + 0.2 후 -0.3을 한 절대값이 Number.EPSILON 값보다 작으면 2진 유동 소수점으로 인한 차이로 처리

// let value = (Math.pow(10,1)*0.1)+(Math.pow(10,1)*0.2);
// console.log(value/10 === 0.3); //true

// 9.3 진수 리터럴 -------------------------------------------------- //

// let two = 0b0101;
// console.log(two); //5

// let eight = 0o0101;
// console.log(eight); //65

// 9.4 isNaN(): NaN 여부 -------------------------------------------------- //
// 숫자가 아니면 true
// console.log("1:",Number.isNaN(NaN),isNaN(NaN)); // true true
// console.log("2:",Number.isNaN("NaN"),isNaN("NaN")); //false true
// console.log("3:",Number.isNaN("ABC"),isNaN("ABC")); //false true

// console.log("4:",Number.isNaN(undefined),isNaN(undefined)); //false true
// console.log("5:",Number.isNaN({}),isNaN({})); // false true
// console.log("6:",Number.isNaN(Number.NaN),isNaN(Number.NaN)); // true true

// console.log("7:",Number.isNaN(0/0),isNaN(0/0)); // true true
// console.log("8:",Number.isNaN(true),isNaN(true)); //false false
// console.log("9:",Number.isNaN(null),isNaN(null));// false false
// console.log("A:",Number.isNaN(""),isNaN("")); //false false

// 9.5 isInteger():정수 여부 -------------------------------------------------- //

// console.log("1:",Number.isInteger(0)); // true
// console.log("2:",Number.isInteger(1.0)); // true
// console.log("3:",Number.isInteger(-123)); // true

// console.log("4:",Number.isInteger("12")); // false
// console.log("5:",Number.isInteger(1.02)); //false
// console.log("6:",Number.isInteger(NaN)); // false
// console.log("7:",Number.isInteger(true)); // false

// 9.6 isSafeInteger():안정 정수 여부 -------------------------------------------------- //
//true
// console.log('1:',Number.isSafeInteger(7)); 
// console.log('2:',Number.isSafeInteger(7.0)); 
// console.log('3:',Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); 
// console.log('4:',Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); 

//false
// console.log('5:',Number.isSafeInteger(7.1)); 
// console.log('6:',Number.isSafeInteger("123")); 
// console.log('7:',Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));
// console.log('8:',Number.isSafeInteger(Number.MIN_SAFE_INTEGER-1));

// 9.7 isFinite():유한 값 여부 -------------------------------------------------- //

// console.log('1:',Number.isFinite(Infinity), isFinite(Infinity)); // false false
// console.log('2:',Number.isFinite(-Infinity), isFinite(-Infinity)); // false false
// console.log('3:',Number.isFinite(0), isFinite(0)); // true true
// console.log('4:',Number.isFinite("0"), isFinite("0")); //false false

// console.log('5:',Number.isFinite(null), isFinite(null)); // false true
// console.log('6:',Number.isFinite(NaN), isFinite(NaN)); //false false
// console.log('7:',Number.isFinite(undefined), isFinite(undefined)); // false false
// console.log('8:',Number.isFinite(true), isFinite(true)); // false true


