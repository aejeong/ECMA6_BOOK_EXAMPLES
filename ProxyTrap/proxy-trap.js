//new Proxy()  Proxy 인스턴스 생성 ---------
// let obj = Proxy;
// console.log(obj) // function Proxy() {[native code]}

// let json = JSON;
// console.log(json); // JSON {Symbol(Symbol.toStringTag):"JSON"}
//글로벌 오브젝트는 new 연산자로 인스턴스 생성할수없다.
//JSON 오브젝트의 구조를 보면 prototype과 constructor가 없어서 new 연산자로 인스턴스를 생성할수없다.
//Proxy도 마찬가지이지만 new 연산자로 인스턴스를 생성할수있다.
// try{
//     let proxyObj = Proxy();
// }catch(e){
//     console.log("new 사용") //출력
// }

//----------------------------------------//
// let target = {ground:"상암구장"};
// let newProxy = new Proxy(target,{});
// newProxy.sports = "축구";
// console.log(newProxy) // Proxy{ground:"상암구장", sports:"축구"}
//newProxy.sports가 실행되면 newProxy 인스턴스의 [[Set]]이 호출되고 "sports", "축구"를 파라미터로 넘기고
// target 오브젝트의 [[Set]] 호출 , "sports", "축구" 파라미터로 넘김 
//target 오브젝트에 저장
// console.log(target) // Object{ground:"상암구장", sports:"축구"}
//Proxy 인스턴스가 target 오브젝트를 참조하기때문에 위와 같은 결과가 나옴

//25.2 set() key,value 설정----------------------------------------//

// let target = {event:"축구"};
// let sportsProxy = new Proxy(target,{});
// sportsProxy.sports = "스포츠"; // sportsProxy 인스턴스에서 set() 트랩 작성여부 체크
//존재하지않으면 [[Set]] 호출하면서 sports와 "스포츠"를 파라미터로 넘겨줌
//target 오브젝트의 set() 트랩 작성여부 체크. 존재하지않으므로 target의 [[Set]] 호출

//----------------------------------------//
// let target = {};
// let musicProxy = new Proxy(target,{
//     set(target,key,value,receiver){
//         console.log(target); // Object
//         console.log(key,value); // music, "음악"
//         return true; //트랩 처리가 성공적으로 수행된것을 엔진에게 알려주기 위해 true 반환
//     }
// })
// musicProxy.music = "음악";
// console.log(musicProxy.music); //undefined
//set 트랩에서 들어온 값을 설정한 코드를 작성하지 않았기때문에 undefined

//----------------------------------------//

// let target = {};
// let musicProxy = new Proxy(target,{
//     set(target,key,value,receiver){
//         target[key] = value;
//         return true; 
//     }
// })
// musicProxy.music = "음악";
// console.log(musicProxy.music); // "음악"

//----------------------------------------//

// let target = {event:"축구"};
// let handler = {
//     set(target,key,value, receiver){
//         //set trap의 네번째 파라미터에 sportsProxy의 인스턴스가 설정됨
//         console.log(target == receiver); //fasle
//         //target은 target 오브젝트이고 receiver는 Proxy 인스턴스이므로 같지않다
//         console.log(receiver.event) // 축구
//         //proxy인스턴스에 get이 없기때문에 target 오브젝트의 get 이 호출되면서 event 프로퍼티 값 반환
//         return true;
//     }
// }
// let sportsProxy = new Proxy(target,handler);
// sportsProxy.sports = "스포츠";

//----------------------------------------//

// let target = {event:"축구"};
// let newProxy = new Proxy(target,{
//     set(target,key,value,receiver){
//         target[key] = value; // target.player = 11
//         console.log(receiver.time); // 90
//         console.log(target.time); // undefined  // target에 time이 존재하지않음
//         target["time"] = receiver.time; // target.time = 90
//         return true;
//     }
// })

// let createObj = Object.create(newProxy,{
//     time:{value:90}
// })
//두번째 파라미터의 오브젝트가 첫번째 파라미터의 오브젝트 상속받아 인스턴스 생성
// createObj.player = 11; // setter
//createObj 인스턴스의 __proto__에 set이 있기때문에 set 트랩 호출

//25.3 this와 트랩----------------------------------------//
// 트랩 안의 this는 handler 오브젝트 참조
// let target = {event:"축구"};
// let handler = {
//     ground : "상암구장",
//     set(target,key,value,receiver){
//         console.log(this.ground); // 상암구장
//         this.home= "서울" 
//         return true
//     }
// }
// let sportsProxy = new Proxy(target, handler);
// sportsProxy.sports ="스포츠"   // setter 호출
// console.log(handler.home); // 서울

//화살표 함수로 작성한 트랩------------------------------------//
// let arrowProxy =new Proxy({},{
//     ground:"상암구장",
//     set: (target,key,value,receiver) =>{
//         console.log(this == window); // arrow 함수에서 this는 window 오브젝트를 참조하므로 true
//         console.log(this.ground); //undefined window에 정의된 ground가 없기때문에 undefined가 된다.
//         return true;
//     }
// });
// arrowProxy.sports = "스포츠" // setter 호출

//25.4 get() 프로퍼티 값 반환----------------------------------------//

// let sports = {soccer:"축구"};
// let handler ={
//     get(target,key,value,receiver){
//         return target[key] + ", 11명"
//     }
// }

// let sportsProxy = new Proxy(sports,handler);
// console.log(sportsProxy.soccer); // get 트랩 호출로 축구, 11명 출력

// let desc = Object.getOwnPropertyDescriptor(sports,"soccer");
// console.log(desc);// Object {value: "축구",writable:true, configurable:true,enumerable:true}
//프로퍼티 디스크립터 속성의 디폴트 값은 true이기때문에 get()트랩에서 반환 값 변경 가능 

//-----------------------------------------------------------------//
// let hobby ={sports:"스포츠",music:"음악"};
// let newProxy = new Proxy(hobby,{
//     get(target,key,receiver){
//         return target[key] + ", get()";
//     }
// })
// let createObj = Object.create(newProxy,{
//     music: {value:"클래식"}
// })

// console.log(createObj.music) 
//newProxy인스턴스를 상속받은 createObj도 music 프로퍼티를 갖고있고
//newProxy인스턴스가 참조하고있는 hobby의 music이다.
//createObj.music을 실행하면 먼저 createObj 인스턴스의 프로퍼티에서 값을 찾고 없으면 __proto__에서 찾기때문엥
//createObj에 있는 music 프로퍼티의 값을 먼저 반환
//"클래식" 출력

// console.log(createObj.sports) // "스포츠, get()"
// createObj의 인스턴스 프로퍼티에 sports가 있으면 createObj의 [[Get]]() 호출하여 반환
// 존재하지않으면  __proto__에 첨부된 프로퍼티 검색 후 get()트랩 호출하여 값 반환

//-----------------------------------------------------------------//
// let sportsObj = Object.defineProperty({},"sports",{
//     set(){this.value=123},
//     configurable : false // false 일 경우 프로퍼티 값을 그대로 반환해야한다
// });

// console.log(sportsObj,'----sportsObj') // {}
// let newProxy = new Proxy(sportsObj,{
//     get(target,key){
//         return target[key] || 123;
//     }
// })
// try{
//     newProxy.sports;  // newProxy에서 get()트랩 호출 target[key]를 하면
//     // target 오브젝트에 getter 작성 여부를 체크하는데 존재하지않음으로 [[Get]] 호출
//     // 하지만 sports 프로퍼티는 액세서 프로퍼티로 값 작성 불가로 undefined 반환
//     // target[key]가 undefined가 되면서 123을 반환하게 되는데 
//     // configurable 속성이 false이므로 반환 값 변경 불가로 에러
// }catch(e){
//     console.log("에러") // 출력
// }
//-----------------------------------------------------------------//
// let newProxy = new Proxy([10,20],{
//     get(target,key,receiver){
//         return target[0]+target[1];
//     }
// })
// console.log(newProxy.listArray); // 30

//25.5 has() 키 존재 여부----------------------------------------//

// let newProxy = new Proxy({sports:"스포츠"},{
//     has(target,key){
//         return key in target ? true: false
//     }
// })
// console.log("sports" in newProxy); // newProxy 인스턴스의 has() 트랩 호출 sports가 키 값으로 설정됨 // true
// console.log("music" in newProxy); // false

//-----------------------------------------------------------------//
// let sportsObj = {soccer:"축구"};
// Object.preventExtensions(sportsObj); // 파라미터로 들어온 오브젝트의 프로퍼티 추가할수없는 상태로 설정
// //설정 후 되돌릴수없다.

// let newProxy = new Proxy(sportsObj,{
//     has(target,key){
//         return target[key];
//     }
// })
// console.log("baseball" in newProxy); // false
// console.log("soccer" in newProxy) // true  값을 반환하는데에는 영향을 주지않는다.

//25.6 defineProperty() 프로퍼티 추가, 값 변경------------------------//
// let target = {};
// let newProxy = new Proxy(target,{
//     defineProperty(target,key,descriptor){
//         descriptor.value = descriptor.value + ":축구";
//         Object.defineProperty(target,key,descriptor)
//         return true;
//     }
// })
// Object.defineProperty(newProxy,"sports",{
//     value:"스포츠", writable: true,configurable:true
// })
// console.log(target); // {sports:"스포츠:축구"}

//25.7 deleteProperty() 프로퍼티 삭제------------------------------//

// let target={sports:"스포츠", music:"음악"};
// let newProxy = new Proxy(target,{
//     deleteProperty(target,key){
//         return delete target[key]
//     }
// })

// console.log(delete newProxy.sports); // deleteProperty 트랩 호출 //true
// console.log(delete newProxy.dummy); // true // 프로퍼티의 존재 여부와 상관없이 삭제 처리를 정상으로 수행했을때 true 반환

// Object.seal(target); // 프로퍼티를 추가하거나 존재하는 프로퍼티를 삭제할수없도록 설정
// let desc = Object.getOwnPropertyDescriptor(target,"music");
// // music 프로퍼티의 descriptor 반환
// // configurable:false enumerable: true value:음악 writable: true

// if(desc.configurable){
//     console.log(delete newProxy.music)
// }else{
//     console.log("삭제 불가") // 출력
// }

//25.8 preventExtensions() 프로퍼티 추가 금지------------------------------//

// let sportsObj = {sports:"스포츠"};
// let newProxy = new Proxy(sportsObj,{
//     preventExtensions(target){
//         Object.preventExtensions(target);
//         return true;
//     }
// })
// Object.preventExtensions(newProxy);
// console.log(Object.isExtensible(sportsObj)); // false

//25.9 isExtensible() 프로퍼티 추가 가능 여부------------------------------//

// let sportsObj = {};
// let newProxy = new Proxy(sportsObj,{
//     isExtensible(target){
//         return Object.isExtensible(target);
//     }
// })
// console.log(Object.isExtensible(newProxy)); //true
// Object.preventExtensions(sportsObj);
// console.log(Object.isExtensible(newProxy)); // false

//25.10 getPrototypeOf() prototype 반환------------------------------//
// class Sports{
//     getGround(){
//         return "상암 구장";
//     }
// }
// let newSports = new Sports();
//newSports의 __proto__에 Sports의 prototype에 연결된 프로퍼티가 첨부되므로 getGround가 설정됨
// let newProxy = new Proxy(newSports,{
//     getPrototypeOf(target){
//         return Object.getPrototypeOf(target); //target에 연결된 프로토타입 반환
//     }
// })
// console.log(Object.getPrototypeOf(newProxy));
//constructor: function() getGround:function(); __proto__ Object

//---------------------------------------------------------------//

// class Sports{
//     getGround(){
//         return "상암 구장";
//     }
// }

// let newSports = new Sports();
// let newProxy = new Proxy(newSports,{
//     getPrototypeOf(target){
//         return Object.getPrototypeOf(target); 
//     }
// })
// console.log(newProxy.__proto__);
// //Object{} constructor: function() getGround:function() __proto__: Object
// console.log(Sports.prototype.isPrototypeOf(newProxy)); // true
// console.log(Object.prototype.isPrototypeOf(newProxy)); // true

//25.11 setPrototypeOf() __proto__에 prototype 설정--------------//
// class Sports{
//     getSports(){
//         return "스포츠";
//     }
// }
// class Music{
//     getMusic(){
//         return "음악";
//     }
// }

// let newMusic= new Music("클래식");
// let newProxy = new Proxy(newMusic,{
//     setPrototypeOf(target,proto){
//         Object.setPrototypeOf(target,proto);
//         return true;
//     }
// })
// Object.setPrototypeOf(newProxy,Sports.prototype);

// console.log(newMusic.getSports()); //스포츠
// console.log(newMusic.getMusic); // undefined

//25.12 ownKeys() 프로퍼티 키 반환--------------//
// let sportsObj = Object.defineProperties({},{ // Object.defineProperties()로 프로퍼티를 정의하면 디스크립터의 default 값이 false
//     baseball : {value:"축구", enumerable: true},
//     swim:{value:"수영"}
// })
// let newProxy = new Proxy(sportsObj,{
//     ownKeys(target){
//         return Object.getOwnPropertyNames(target); //definedProperties()의 두번째 파라미터의 프로퍼티중 Symbol 제외한 프로퍼티 키를 배열로 반환
//     }
// })
// console.log(Object.getOwnPropertyNames(newProxy)); //["baseball","swim"]
// console.log(Object.keys(newProxy)); //Object.keys는 enumerable이 false면 제외 시키기때문에 "baseball"만 출력됨

//---------------------------------------------------------------//

// let sportsObj = Object.defineProperties({},{ 
//     baseball : {value:"축구", enumerable: true},
//     swim:{value:"수영"}
// })
// let newProxy = new Proxy(sportsObj,{
//     ownKeys(target){
//         return Object.keys(target); //ownKeys는 Object.getOwnPropertyNames()의 트랩이고 enumerable 값에 관계없이 프로퍼티를 반환하는데
//         //enumerable의 속성이 false이면 리턴하지안는 Object.keys()를 return 값으로 하면서 trap 원래의 기능을 변경되게 해 에러가 나버리게됨
//     }
// })
// console.log(Object.keys(newProxy)); //에러 발생


//25.13 getOwnPropertyDescriptor() 디스크립터 반환-------------//
// let sportsObj = Object.defineProperty({},"sports",{
//     value:"스포츠",configurable:true
// })
// let handler = {
//     getOwnPropertyDescriptor(target,key){
//         let desc = Object.getOwnPropertyDescriptor(target,key);
//         if(desc.configurable){
//             return {configurable:true,enumerable:true,value:"미술"}
//         }
//         return desc;
//     }
// }
// let newProxy = new Proxy(sportsObj,handler);
// console.log(Object.getOwnPropertyDescriptor(newProxy,"sports"))
// {value:"미술", writable:false , configurable:true, enumerable:true}

//25.14 constuct() 인스턴스 생성-------------//
// class Sports{
//     constructor(event){
//         this.event = event;
//     }
// }

// let newProxy = new Proxy(Sports,{
//     construct(target,params,proxy){
//         return new target(params[0]) // params 배열에 ["축구"]가 설정되고 Sports 클래스의 constructor 호출하고 파라미터 값넘김
//     }
// })

// let sportsObj = new newProxy("축구");
// console.log(sportsObj.event);// "축구"

//25.15 apply() 함수 호출-------------//

// function getValue(...values){
// return values.reduce(function(previous,current){
//     return previous + current;
// })
// }
// let newProxy = new Proxy(getValue,{
//     apply(target,thisObj,args){
//         return target.apply(thisObj,args);
//     }
// })
// console.log(newProxy(10,20,30)); //60
//newProxy의 apply 트랩 호출
// console.log(newProxy.apply("",[10,20,30])); //60  첫번째 파라미터가 thisObj에 설정됨
// console.log(newProxy.call({add:100},10,20,30)); //60

//25.16 revocable() Proxy 무효화-------------//
let sportsObj = {sports:"스포츠"};
let revocableObj = Proxy.revocable(sportsObj,{//Proxy.revocable()을 호출하면 오브젝트를 반환하는데 여기에 Proxy 오브젝트가 포함되있다
    get(target,key){
        return target[key];
    }
})

console.log(revocableObj.proxy.sports); //"스포츠"
revocableObj.revoke() //proxy에 설정된 Proxy 인스턴스를 사용할수없게 만듬
try{
    revocableObj.proxy.sports // proxy인스턴스가 사용할수없는 상태로 get()트랩이 호출되면 에러 발생
}catch(e){
    console.log("사용 불가") //출력
}