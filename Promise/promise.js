
/*
function create(){//1.엔진이 function 키워드를 만나 create()를 호출할수있도록 Function 오브젝트 생성
    return new Promise(function(resolve,reject){ //3.new Promise() 인스턴스 생성하고 파라미터의 함수(executer) 실행
        resolve(); // 4.resolve()가 있지만 함수를 호출하진 않는다. 핸들러 함수 이름과 executer 파라미터의 이름은 같아야한다
        console.log("1: resolve") // first  // 5. log 출력  
    }) 
}
create().then(function(){ //2.create()함수 호출하면 function create(){} 블록안의 함수가 실행됨
//6. create()의 실행이 끝나면 생성한 Promise 인스턴스 반환, 인스턴스에 then()이 있어 호출할수있지만
//호출하지않고 아래 코드로 이동한다.
    console.log("3:성공") // third //8. log 출력 
},function(){
    console.log("3:실패")
})
console.log("2:끝") //second //7. 실행하고 then()안의 function(){} 실행
*/

// 27.3 new Promise() Promise 인스턴스 생성

/*
function create(param){
    return new Promise(function(resolve,reject){ //2.Promise 인스턴스 생성
        if(param==="ok"){
            resolve(param); // 3.executer 블록에서 resolve()를 호출하면 
            console.log("1: resolve"); //first 출력
        }else{
            reject(param) // 5. reject()호출하면 
        }
    })
}

create("ok").then(function(param){// 1.create()호출하면서 ok를 파라미터 값으로 넘김
    //create()의 호출이 완료되면 Promise 인스턴스 반환
    console.log("3: 성공", param) // third 출력 "3: 성공, ok" // 4.then()의 첫번째 파라미터의 함수 호출
}, function(param){
    console.log("3: 실패", param) // 6. then의 두번째 파라미터의 함수 호출
})
console.log("2: 끝") // second 출력
*/

//----------------------------------------------------//

/*
function create(param){
    return new Promise(function(resolve,reject){
        if(param==="ok"){
            resolve(param);
        }else{
            reject(param);
        console.log("1: reject") // first 출력
        }
    })
}
create("fail").then(function(param){
    console.log("3:성공",param)
},function(param){
    console.log("3: 실패",param) // third 출력 "3: 실패, fail"
})

console.log("2: 끝") // second 출력
*/

// 27.4 then() 성공, 실패 핸들러

/*
function create(){
    return new Promise((resolve)=>{
        resolve(100);
    })
}

create().then(()=> console.log("1:then")) // first 출력 //1. create()호출, Promise 인스턴스 반환
//5. 콘솔에 "1: then" 출력
create().then((param)=>{ //2.create() 호출, Promise 인스턴스 반환
    console.log("2:then",param) //second 출력 "2: then 100"
    return param+50;
})
//6. 콘솔에 "2:then, 100"출력

create().then((param)=>{ //150 //3.create() 호출, Promise 인스턴스 반환
    console.log("3:then",param); //third 출력 "3: then 100"
    return param+70
}).then((param)=> console.log("4:then",param)) // fourth 출력 170 
//4. 더 이상 처리할 코드가 없다
//7. 콘솔에 "3:then, 100" 출력
//8. 세번째 then()에 연결된 then() 핸들러 함수 실행 
//9. 콘솔에 "4:then, 170" 출력
*/

// 27.5 catch() 실패 핸들러

/*
function create(param){
    return new Promise((resolve,reject)=>{
        param === 'ok'? resolve(param) : reject(param)
    })
}

create("fail").then((param)=>{
    console.log("성공:",param)
}).catch((param)=>{
    console.log("실패:",param) //"실패: fail" 출력
})
*/

//----------------------------------------------------//
/*
function create(param){
    return new Promise((resolve, reject)=>{
        resolve("resolve");
    })
}
create().then((param)=>{
    console.log("1: then",param); // "1: then, resolve" 출력
    throw "에러 발생 시킴";  
}).catch((param)=>{
    console.log("2: catch", param) //"2: catch, 에러 발생 시킴"
}).then((param)=>{
    console.log("3:then,",param) // "3: then, undefined"
}).catch((param)=>{
    console.log("4:catch,",param)
})
*/


// 27.6 resolve() 성공 상태의 인스턴스 반환

/*
let promiseObj = Promise.resolve( // Promise 인스턴스 생성, 성공 상태로 설정하여 반환
    {sports:"스포츠",music:"음악"}
);
promiseObj.then((param)=>{
    for(let name in param){
        console.log(name,param[name]) // sports, "스포츠" // music, "음악"
    }
})

Promise.resolve(
    ["sports","music"]
).then((param)=> console.log(param)); // ["sports","music"]
*/

//----------------------------------------------------//
/*
let oneObj = Promise.resolve({sports:"스포츠"})
Promise.resolve(oneObj).then((param)=>{
    console.log(param) // Object {sports:"스포츠"}
})
*/

// thenable-----------------------------------------//
/*
let oneObj = Promise.resolve({
    then(resolve){
        console.log("1: then"); // first 출력 "1: then"
        resolve("thenable")
    }
})
oneObj.then((value)=> console.log("2:",value)) // second 출력 "2: thenable"
*/

//----------------------------------------------------//
/*
let thenable = {
    then(resolve,reject){
        resolve("resolve");
        reject("에러")
    }
}
let oneObj = Promise.resolve(thenable);
oneObj.then((value)=> console.log(value), (value)=>console.log("실행되지 않음"))
// resolve 

*/

// 27.7 reject() 실패 상태의 인스턴스 반환
/*
let paramObj = Promise.reject("reject 처리")
promiseObj.then((param)=>console.log(param),(param)=>console.log("에러:",param))
// "에러: reject 처리" 출력
*/

//----------------------------------------------------//
/*
let errorObj = new Error("에러");
let promiseObj = Promise.reject(errorObj);
promiseObj.then((param)=>console.log(param),(error)=>console.log("1:",error.message))
//"1: 에러" 출력

Promise.reject(errorObj).catch((error)=>console.log("2:",error.message)); //"2: 에러"
Promise.reject(errorObj).then((param)=> console.log(param),(error)=> console.log("3:", error.message))
//"3: 에러"
*/

// 27.8 all() 모두 성공이면 핸들러 실행
/*
function order(mili){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("실행",mili);
            resolve(mili);
        }, mili);
    })
}
Promise.all([order(300),order(200),order(100)]).then((milis)=> console.log("호출",milis))
//"실행,100" // "실행, 200" // "실행, 300"
//호출 [300,200,100]
*/

//----------------------------------------------------//
//Promise.all()은 매번 then()의 핸들러 함수를 실행하지않고, 전체가 끝났을 때 한번만 실행 하지만
//중간에 실패가 발생하면 바로 then()의 두번째 함수 실행
//실패 후에도 중단하지않고 코드를 이어가지만 전체가 성공이여야만 resolve가 수행됨
/*
function order(mili){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(mili);
            mili === 200 ? reject("reject") : resolve(mili);
        },mili)
    })
}

Promise.all([order(300),order(200),order(100)]).then((milis)=> console.log("then resolve"), (error)=> console.log("then",error));
//100 
//200 //"then reject"
//300
*/
// 27.9 race() 처음 한 번만 핸들러 호출

function order(mili){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(mili);
            resolve(mili)
        },mili)
    })
}

Promise.race([order(300),order(200),order(100)]).then((milis)=> console.log("then:",milis), (error)=> console.log(error))
//100
//"then:100"
//200
// 300 