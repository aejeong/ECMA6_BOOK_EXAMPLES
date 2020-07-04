
//13------------------------------------------------------------------- //
//from() array 생성

// let arrayObj = Array.from({0:"zero",1:"one",length:2});
// console.log(Array.isArray(arrayObj)); //true
// console.log(arrayObj); // ["zero","one"]

// let stringObj = Array.from("ABC");
// console.log(stringObj); // ['A','B','C']

//------------------------------------------------------------------- //

// let arrayLike = {0:10,1:30,length:2};
// let values = Array.from(arrayLike,function(value){ // arrayLike 오브젝트 프로퍼티를 하나씩 읽으면서 함수 실행
//     return value + this.bonus; // from 에서 세번째 파라미터로 지정한 오브젝트에 접근
// },{bonus:100}) // 
// console.log(values); // [110,130];

//-13.2 of(): 배열 엘리먼트 설정------------------------------------------- //

// let arrayObj = Array.of(1,2,3); //파라미터에 지정한 값을 array로 반환
// console.log(arrayObj) // [1,2,3]

//13.3 copyWithin(): 범위 값 복사, 설정------------------------------------------- //
// let one = [1,2,3,4,5];
// console.log(one.copyWithin(0,3)); // [4,5,3,4,5] 시작 index가 3으로 [4,5]가 target이 되어 0번째부터 차례로 들어감

// let two = [1,2,3,4,5];
// console.log(two.copyWithin(0,2,4)); // [3,4,3,4,5] 2번째 index부터 시작해서 4번째 인덱스 전 값까지 복사해서 0번부터 시작

// let three = [1,2,3,4,5]; 
// console.log(three.copyWithin(3)); // [1,2,3,1,2] 두번째 세번쨰 파라미터 생략으로 전체 배열을 인덱스 3부터 차례대로 넣는다.

//--------------------------------------------------------------------------- //

// let arrayLike = {0:"ABC",1:"DEF",2:"가나다",length:3};
// let one = Array.prototype.copyWithin.call(arrayLike,0,1);
// // arrayLike는 array가 아닌 object이기때문에 arrayLike.copyWithin 메소드를 쓸수없기때문에
// //Array.prototype.copyWithin.call 로 사용가능
// // object key 값을 배열의 인덱스로 사용, 인덱스1부터 끝까지 복사하여 0번째 부터 넣는다.
// console.log(one); // {0: "DEF", 1: "가나다", 2: "가나다", length: 3} 

// function two(){
//     return Array.prototype.copyWithin.call(arguments,3,0,2); //들어온 arguments를 0부터 2직전 값 1,2를 복사하여 3번째 인덱스부터 넣음
// }
// console.log(two(1,2,3,4,5)); // [1,2,3,1,2]

//fill(): 범위 값 변경--------------------------------------------------------------- //

// let one = [1,2,3];
// console.log(one.fill(7)); // [7,7,7]
// //one 배열 전체를 7로 변경

// let two = [1,2,3,4,5];
// console.log(two.fill(7,1)); // [1,7,7,7,7]
// //two배열에 7을 인덱스 1번째부터 끝까지 채워넣음
// let three = [1,2,3,4,5];
// console.log(three.fill(7,1,3)); // [1,7,7,4,5];
// // three배열에 인덱스 1부터 3번째 직전까지 7로 채워넣음

// entries(): 이터레이터 오브젝트 생성--------------------------------------------------- //

// let values =[10,20,30];
// let iterator = values.entries(); // array로 iterator 오브젝트 생성 반환
// console.log(iterator.next()); //{value:Array[2],done:false}

// for(var [key,value] of iterator){
//     console.log(key,":",value); // 1:20  2:30   10은 위에 next()에서 처리했기때문에 나오지않음
// }

//13.6 keys(): Key 이터레이터 오브젝트 생성--------------------------------------------------- //

// let iterator = [10,20,30].keys();
// for(var key of iterator){
//     console.log(key,":",iterator[key]); 
// }
// 0: undefined
// 1: undefined
// 2: undefined

//13.7 values(): value 이터레이터 오브젝트 생성--------------------------------------------------- //

// let iterator = [10,20,30].values(); // iterator 오브젝트반환
// console.log(iterator.next()); //{value: 10, done: false}

//13.8 find(): 엘리먼트 값 비교, 반환--------------------------------------------------- //

// let result = [1,2,3].find((value,index,allData)=> value === 2); 
// // 1을 읽고 value ===2가 성립되지않기때문에 false 반환,다음 엘리먼트인 2로 콜백 함수 호출, 성립됨으로 true 반환
// // find함수가 종료되면서 처리하던 값이 반환됨
// console.log(result); // 2

// result = [1,2,1].find(function(value,index,allData){
//     return value === 1 && value === this.key;
// },{key:1});
// console.log(result); // 1

//13.9 findIndex(): 배열 인덱스 반환--------------------------------------------------- //
let result = [10,20,30].findIndex((value,index,allData)=> value === 20);
console.log(result); //1
// 조건에 성립되는 엘리먼트의 인덱스 반환

result = [10,20,30].findIndex((value,index,allData)=> value === 77);
console.log(result); // -1 
//마지막 엘리먼트까지 콜백 함수에서 false를 반환하면 findIndex()가 종료되면서 -1 반환 

result = [10,20,30].findIndex(function(value,index,allData){
    return value === 30 && value === this.check;
},{check:30});
console.log(result); //2
