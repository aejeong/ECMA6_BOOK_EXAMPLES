//이터러블 오브젝트-> 반복가능한 오브젝트
// 4------------------------------------------------------------------- //

// let arrayObj = [];
// let result = arrayObj[Symbol.iterator];
// console.log(result);  // fuction values() {[native code]}

// 4------------------------------------------------------------------- //

// let objectObj = {};
// let result = objectObj[Symbol.iterator];
// console.log(result) // 오브젝트에 iterator 가 없음으로 undefined
//오브젝트의 값을 차례대로 처리할수있는 방법에 오브젝트의 next()메서드가 있지만,
// key value 형태의 오브젝트에는 존재하지않고, Map 오브젝트로 처리해야한다.

// 4------------------------------------------------------------------- //

// let arrayObj = [1,2];
// let iteratorObj = arrayObj[Symbol.iterator]();
// console.log("1:", typeof iteratorObj); // object

// console.log("2:", iteratorObj.next()); // value 1 done false
// console.log("3:", iteratorObj.next()); // value 2 done false
// console.log("4:",  iteratorObj.next()); // value undefined done true
