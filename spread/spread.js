
// 5 array------------------------------------------------------------------ //
//객체의 요소 하나하나를 분리
// let one= [11,12];
// let two = [21,22];
// let spreadObj = [51,...one,52,...two];

// console.log(spreadObj); //[51, 11, 12, 52, 21, 22]
// console.log(spreadObj.length); //6


// 5 string------------------------------------------------------------------ //
// 문자 하나하나 분리
// let spreadObj = [...'music'];
// console.log(spreadObj); //["m", "u", "s", "i", "c"]

// 5 함수 파라미터 ------------------------------------------------------------------ //

// const values = [10,20,30];
// get(...values);

// function get(one,two,three){
//     console.log(one+two+three);
// }

// rest 파라미터 ------------------------------------------------------------------ //

// let get = (one) => {
//     console.log(one);
// }

// get(...[1,2,3]); //이렇게 되면 get(1,2,3) 형태로 전개되어 하나의 파라미터만 설정됨
//화살표 함수에서는 arguments가 존재하지 않음. 대신해 rest 파라미터를 사용하면됨

// -------------------------------------------------------------------- //

// let get = (...rest)=>{ // rest가 아닌 다른 이름으로 전개 가능
//     console.log(rest);
//     console.log(Array.isArray(rest));
// }

// get(...[1,2,3]);

// -------------------------------------------------------------------- //


// let get =(one,...rest)=>{
// console.log(one);
// console.log(rest);
// }

// get(...[1,2,3]); // get(1,2,3) 형태로 호출하게되어 파라미터 one에 1 설정되고, 나머지 순서대로 설정됨.


// spread 파라미터와 rest 파라미터의 차이는 
//spread 는 배열을 엘리먼트로 분리, 전개
// rest 는 전개된 엘리먼트를 다시 배열에서 설정

// Array-like ------------------------------------------------------------------ //
//오브젝트를 배열처럼 사용하는것
// let values = {0:'zero',1:'one',2:'two',length:3};
// for(var key in values){ // for in 문은 오브젝트를 전개할떄 사용
//     console.log(key,':',values[key])
// }

// for(var k =0; k <values.length; k++){ //배열 전개할때 사용
//     console.log(values[k]);
// }

//5.4 Array-like 전개 ------------------------------------------------------------------ //

// let values = {10:'ten',zoo:'동물원',2:'two', length:3};
// // values에 length가 있음으로 Array-like 의 형태
// for(var k =0; k<values.length; k++){
//     console.log(values[k]) // undefiend undefiend two
// }
// values[0]에 0이 없음으로 undefined
// values[1]에 1이 없음으로 undefined
// values[2]에 2로 two가 출력됨
// object를 array-like같은 형태로 작성하고 싶으면 키 값이 0부터 1 순차적으로 증가되게 작성해야됨
//length property를 키로 하여 전체 프로퍼티 수를 작성해야함 두가지 중 하나라도 만족하지않으면 Array-like으로 쓸수없음
//argument 오브젝트가 Array-like.
// arguments 는 array-like 이기때문에 Array의 메서드를 사용할수없지만 
// rest는 파라미터가 배열이여서 Array 메서드 사용가능

