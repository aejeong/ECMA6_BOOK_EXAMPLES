
// 6 Destructuring Assignment------------------------------------------------------------- //
//분할된 엘리먼트 값을 변수에 할당
//인덱스 기준으로 인덱스번째 엘리먼트 값을 인덱스 번째 변수에 할당하기때문에
// value 가 배열이면 왼쪽 변수도 배열이여야함
// let one, two,three, four,five;
// const values = [1,2,3];

// [one,two,three] = values;
// console.log('A:', one, two,three); // 1 2 3

// [one,two] = values;
// console.log('B:', one, two); // 1 2

// [one,two,three,four] = values;
// console.log('C:', one, two,three,four); // 1 2 3 undefined

// [one,two,[three,four]] = [1,2,[73,74]];
// console.log('D:', one, two,three,four); // 1 2 73 74


// ------------------------------------------------------------- //

// let one, two,three, four,other;
// [one,,,four]=[1,2,3,4];
// console.log(one,four); // 1,4
// //콤마로 작성하여 건너뛰면 인덱스를 건너뛰고 다음 변수로 이동함

// [one,...other] = [1,2,3,4];
// console.log(other); // [2,3,4];
// //spread 연산자로 other 변수 작성으로 1을 one에 할당하고 남은 [2,3,4] other에 할당

// //6.3 Object 분할 할당 ------------------------------------------------------------- //
// //할당받는 쪽과 할당하는쪽 모두 object여야함
// let {one, two} = {one:1,nine:9};
// console.log(one,two); // 1 , undefined

// let three, four; // 바로 할당하지 않고 선언만함
// ({three,four}={three:3,four:4});  // 미리 선언된 변수를 사용하려면 소괄호로 감쌈
// console.log(three,four); // 3 4

// let five, six;
// ({one:five,two:six} = {one:10, two:20});
// console.log(five,six); //10 20

// let {nine,plus:{ten}} = {nine:9,plus:{ten:10}}; //경로를 맞춰줘야함
// console.log(nine,ten); //9 10
// console.log(plus.ten); // plus를 property 키로하여 값 출력하면 referenceError

// ------------------------------------------------------------- //

function total({one,plus:{two,five}}){
    console.log(one+two+five);
}

total({one:1,plus:{two:2,five:5}}); //8

//호출하는 함수 파라미터를 object 형태로 작성

