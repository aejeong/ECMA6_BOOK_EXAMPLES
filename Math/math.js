
// 10------------------------------------------------------------------- //

// sinh(): 쌍곡 사인
// console.log(Math.sinh(0)); // 0
// console.log(Math.sinh(1)); // 1.1752011936438014

// asinh(): 쌍곡 아크사인

// console.log(Math.asinh(0)); // 0
// console.log(Math.asinh(1)); // 0.881373587019543

// cosh():쌍곡 코사인

// console.log("1:",Math.cosh(0)); // 1
// console.log("2:",Math.cosh(1)); //  1.5430806348152437
// console.log("3:",Math.cosh(-1)); // 1.5430806348152437

// acosh():쌍곡 아크코사인

// console.log("1:",Math.acosh(0)); // NaN
// console.log("2:",Math.acosh(1)); //  0
// console.log("3:",Math.acosh(-1)); // NaN

// tanh(): 쌍곡 탄젠트

// console.log("1:",Math.tanh(0)); // 0
// console.log("2:",Math.tanh(1)); // 0.7615941559557649
// console.log("3:",Math.tanh(Infinity)); // 1

// atanh(): 쌍곡 아크탄젠트

// console.log("1:",Math.atanh(-2)); // NaN
// console.log("2:",Math.atanh(2)); // NaN
// console.log("3:",Math.atanh(-1)); // -Infinity
// console.log("4:",Math.atanh(1)); // Infinity
// console.log("5:",Math.atanh(0)); // 0
// console.log("6:",Math.atanh(0.5)); // 0.5493061443340548

// log2(): 2를 밑으로 한 로그 값

// console.log("1:",Math.log(3)); // 1.0986122886681096
// console.log("2:",Math.log(2)); //  0.6931471805599453
// console.log("3:",Math.log(1)); // 0
// console.log("4:",Math.log(0)); // -Infinity
// console.log("5:",Math.log(-1)); // NaN

// log2(): 10을 밑으로 한 로그 값

// console.log("1:",Math.log10(100)); // 2 
// console.log("2:",Math.log10(10)); // 1
// console.log("3:",Math.log10(2)); //  0.3010299956639812
// console.log("4:",Math.log10(1)); // 0
// console.log("5:",Math.log10(-1)); // NaN

// log1p(): 로그(1+값)

// console.log("1:",Math.log1p(1)); // 0.6931471805599453
// console.log("2:",Math.log1p(0)); // 0
// console.log("3:",Math.log1p(-1)); // -Infinity
// console.log("4:",Math.log1p(-2)); // NaN

// expm1():자연로그 상수의 x승 -1

// console.log("1:",Math.expm1(-1)); // -0.6321205588285577
// console.log("2:",Math.expm1(0)); // 0
// console.log("3:",Math.expm1(1)); // 1.718281828459045
// console.log("4:",Math.expm1(Infinity)); // Infinity
// console.log("5:",Math.expm1(-Infinity)); // -1

// hypo() : 제곱근

// console.log("1:",Math.hypot(3)); // 3
// console.log("2:",Math.hypot(3,4)); // 5
// console.log("3:",Math.hypot(3,4,5)); // 7.0710678118654755
// console.log("4:",Math.hypot()); // 0
// console.log("5:",Math.hypot(-3,-4)); // 5

// cbrt() : 세제곱근

// console.log("1:",Math.cbrt(-1)); // -1
// console.log("2:",Math.cbrt(0)); // 0
// console.log("3:",Math.cbrt(1)); // 1
// console.log("4:",Math.cbrt(3)); // 1.4422495703074083
// console.log("5:",Math.cbrt(8)); // 2

// sign()): 사인 값

// console.log("1:",Math.sign(NaN)); // NaN
// console.log("2:",Math.sign(0)); // 0
// console.log("3:",Math.sign(-0)); // -0
// console.log("4:",Math.sign(1)); // 1
// console.log("5:",Math.sign(-1)); // -1

// trunc(): 소수를 제외한 정수
// console.log("1:",Math.trunc(12.78)); // 12
// console.log("2:",Math.trunc(0.12)); // 0
// console.log("3:",Math.trunc(-0.12)); // -0
// console.log("4:",Math.trunc(-1.23)); // -1
// console.log("5:",Math.trunc()); // NaN
// console.log("6:",Math.trunc(NaN)); // NaN

// imul(): 32비트로 전환
// 곱한값을 32비트로 변환해서 반환
// console.log("1:",Math.imul(2,4)); // 8
// console.log("2:",Math.imul(-3,-4)); // 12
// console.log("3:",Math.imul(123456,1000)); // 123456000
// console.log("4:",Math.imul(123456,1000)); // 123456000
// console.log("5:",Math.imul(123456,100000)); // -539301888

// clz32(): 32비트 값에서 0 비트 수
// console.log("1:",Math.clz32(1)) //31
// console.log("2:",Math.clz32(2)) // 30
// console.log("3:",Math.clz32()) // 32 : 값이 0으로 처리되므로
// console.log("4:",Math.clz32(2.5)) // 30 : 소수 값은 무시되므로
// console.log("5:",Math.clz32(true)) // 31 1로 변환되므로

// fround(): 32비트 유동 소수 값
let value = 0.1+0.2;
console.log("1:",value); //0.30000000000000004
console.log("2:",Math.fround(value));//0.30000001192092896
console.log("3:",1.23); //1.23
console.log("4:",Math.fround(1.23)); //1.2300000190734863