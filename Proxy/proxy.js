//proxy의 사전적의미는 "대리", "대신"

//ex
// let target = {food:"밥"};
// let left = target.food;
// console.log(left); // "밥"
//중간 과정을 거치지않고 target에서 left로 직접 받은 형태

//--------------------
//중간과정을 거친 형태
// let target ={food:"밥"};
// let middle = new Proxy(target,{}); // 프락시는 가운데서 중개 역할을 하므로 자신이 {food:"밥"}을 갖고있지않다.
//Proxy getter를 호출한 다음 food를 파라미터 값으로 넘기고 {food:"밥"}을 갖고있는 target의 getter를 호출
// let left = middle.food;

// 트랩 trap --------
//get과 set 각각을 trap 이라고 함
//트랩은 OS에서 사용하는 용어중 하나로 실행중인 프로그램에 이상이 발생했을때
// 중단하고 사전에 정의된 제어로 이동하는 동작을 의미
// let target = {food:"밥"};
// let handler = { //트랩이 작성된 오브젝트를 핸들러 오브젝트라고함
//     get(target,key){ 
//         return target[key]+", 수저"; //getter가 호출되면 target의 키 값에 ", 수저" 연결하여 반환
//     },
//     set(target,key){}
// }
// let middle = new Proxy(target,handler);
// let left = middle.food;
// console.log(left); //밥, 수저

//--------------------

let target = {food:"밥"};
let middle = new Proxy(target,{ //트랩이 작성된 오브젝트를 핸들러 오브젝트라고함
    get(target,key){ 
        return target[key]+", 수저"; //getter가 호출되면 target의 키 값에 ", 수저" 연결하여 반환
    }
})
let left = middle.food;
console.log(left); //밥, 수저

