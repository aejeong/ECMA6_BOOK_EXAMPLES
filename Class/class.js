
// 16 Class------------------------------------------------------------------- //

// class Member{
//     getName(){
//         return "이름";
//     }
// }
// let obj = new Member();
// console.log(obj.getName()); //이름

// 16 Class 표현식----------------------------------------------------------- //

// let Member = class { // 엔진이 class 키워드를 만나면 클래스 오브젝트 생성
//     getName(){
//         return "이름"
//     }
// };

// let obj = new Member();
// console.log(obj.getName()); // 이름

// ------------------------------------------------------------------------ //

// class Member{
//     setName(name){
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
// }

// Member.prototype.getTitle = function(){}; // 이렇게 메서드를 추가할 경우
//이미 생성된 인스턴스에서 추가한 메서드를 공유할수있도록 처리하게 되므로 부하가 걸리지만
//상황에 따라 메서드를 추가할 수 있어 역동성이 높다
// console.log(typeof Member); // 결과 function이 나옴으로 class는 function 구조라는 것을 의미
//function Sports(){}는 글로벌 오브젝트에 설정되지만
//class Member(){}는 그렇지않아서 window.Member로 접근할 경우 undefined가 되며, for()문 등으로 열거 할수 없음

// constructor -------------------------------------------------------------------- //
// 클래스 인스턴스를 생성하고 초기화하는 역할을 함
//new Member()를 실행하면 Member.prototype.constructor가 호출됨
//constructor가 없으면 인스턴스를 생성할수 없다.

// ------------------------------------------------------------------------ //

// class Member{
//  constructor(name){
//      this.name =name;
//  }
//  getName(){
//      return this.name;
//  }
// }

// let memberObj = new Member('스포츠');
// console.log(memberObj.getName()) //스포츠
// //new 연산자가 인스턴스를 생성하는 것처럼 보이지만 new 연산자는 constructor를 호출하면서 파라미터를 넘겨주는 역할
// //호출된 constructor가 인스턴스를 생성 , 반환

// constructor 반환 값 변경------------------------------------------------------ //

// class Member{
//     constructor(){
//         return 1; // constructor에서 Number 또는 String 값을 반환하면 이를 무시하고 생성한 인스턴스를 반환
//     }
// getName(){
//     return "이름"
// }
// }

// let memberObj = new Member();
// console.log(memberObj.getName()) //이름

// ---------------------------------------------------------------------------- //

// class Member{
//     constructor(){
//         return {name:'홍길동'} // 생성자에서 Object 반환시 반환됨
//     }

//     getName(){
//         return '이름'
//     }
// }

// let memberObj = new Member();
// console.log(memberObj.name) //홍길동
// console.log(memberObj.getName); // undefined // 생성자가 {name:'홍길동'} 을 반환하여 memberObj에 getName이 존재하지 않아 undefined

// getter ,setter------------------------------------------------------------------- //

// class Member{
//     get getName(){
//         return '이름';
//     }
// }

// let memberObj = new Member();
// console.log(memberObj.getName); //이름

// ---------------------------------------------------------------------------- //

// class Member {
//     set setName(name){
//         this.name = name;
//     }

//     get getName(){
//         return this.name;
//     }
// }

// let memberObj = new Member();
// memberObj.setName = '이름';
// console.log(memberObj.getName);// 이름

// ES5 상속---------------------------------------------------------------------------- //

// function Sports(member){
//     this.member = member;
// }

// Sports.prototype.setItem = function(item){
//     this.item = item;
// }

// function Soccer(member){
//     Sports.call(this, member);
// }

// Soccer.prototype = Object.create(Sports.prototype,{
//     setGroud : {
//         value : function(ground){
//             this.ground = ground;
//         }
//     }
// })

// Soccer.prototype.constructor = Soccer;

// var obj = new Soccer(11);
// obj.setItem('축구');
// obj.setGroud('상암');

// console.log(obj.member); // 11
// console.log(obj.item); // 축구
// console.log(obj.ground); // 상암

// extends----c-------------------------------------------------------------------- //

// class Sports{
//     constructor(member){
//         this.member = member
//     }

//     getMember(){
//         return this.member
//     }
// }

// class Soccer extends Sports {
//  setGround(ground){
//      this.ground = ground
//  }
// };

// let obj = new Soccer(11); 
// console.log(obj.getMember());  //11

// super 키워드-------------------------------------------------------------------- //

// class Sports {
//     setGround(ground){
//         this.ground = ground;
//     }
// }

// class Soccer extends Sports{
//     setGround(ground){
//         super.setGround();
//         this.ground = ground;
//     }
// }

// let obj = new Soccer();
// obj.setGround('상암구장') //상암구장
// console.log(obj.ground);

// -------------------------------------------------------------------- //

// class Sports {
//     constructor(member){
//         this.member = member;
//         console.log(this.member) //123
//     }
// }

// class Soccer extends Sports{
//     constructor(member){
//         super(member);
//         this.member = 456;
//         console.log(this.member) //456
//     }
// }

// let obj = new Soccer(123); 

// 빌트인 오브젝트 상속--------------------------------------------------------- //

// class ExtendArray extends Array{
//     constructor(){
//         super();
//     }

//     getTotal(){
//         let total = 0;
//         for (var value of this){
//             total+=value;
//         }
//         return total;
//     }
// }

// let obj = new ExtendArray();
// obj.push(10,20);
// console.log(obj.getTotal()); //30


// Object에서 super 사용--------------------------------------------------------- //

// let Sports = {
//     getTitle(){
//         console.log("Sports")
//     }
// }

// let Soccer = {
//     getTitle(){
//         super.getTitle();
//         console.log("Soccer")
//     }
// }
// Object.setPrototypeOf(Soccer, Sports);
// Soccer.getTitle(); // Sports Soccer

// static 키워드 --------------------------------------------------------- //
//static 메서드는 클래스의 prototype에 연결되지않고 클래스에 직접 연결됨
// prototype에 연결된 메서드는 인스턴스를 생성하여 호출하지만, 정적 메서드는 인스턴스를 생성하지않고 호출
//엔진이 class 키워드를 만나면 static 메서드 작성 여부를 체크함

// class Sports {
//     static getGround(){
//         return '상암구장'
//     }
// }

// console.log(Sports.getGround());//상암구장 . 클래스 이름을 지정하여 호출

// class 호이스팅 --------------------------------------------------------- //
//클래스는 호이스팅되지않는다.
// try{
//     let result = Member;
// } catch(e){
//     console.log('호이스팅 불가가')
// };

// class Member{
//     static getMember(){
//         return 'member';
//     }
// }

// computed name --------------------------------------------------------- //

// let type = "Type";
// class Sports {
//     static ["get"+type](kind){
//         return kind ? '스포츠' : '음악'
//     }
// }

// console.log(Sports['get'+type](1)) //스포츠

// this --------------------------------------------------------- //

// class Sports{
//     static setGround(ground){
//         this.ground = ground
//     }

//     static getGround(){
//         return this.ground; //클래스 오브젝트 참조
//     }
// }

// Sports.setGround('상암구장')
// console.log(Sports.getGround()); //상암구장

// --------------------------------------------------------- //

// class Sports {
//     constructor(){
//         console.log(Sports.getGround())
//         console.log(this.constructor.getGround()) //여기서 this는 new Sports()로 생성한 인스턴스를 참조하기때문엥
//         // this.getGround() 형태로 호출할수없다.  하지만 Sports 클래스가 constructor를 참조하기때문에 
//     }

//     static getGround(){
//         return '상암구장'
//     }
// }

// let obj = new Sports(); // 상암구장 // 상암구장

// 제너레이터--------------------------------------------------------- //

// class Member {
//     *gen() {
//         yield 10;
//         yield 20;
//     }
// };

// let obj = new Member();
// let genObj = obj.gen();

// console.log(genObj.next()) // {value:10, done:false}
// console.log(genObj.next()) // {value:20 , done:false};

// new.target--------------------------------------------------------- //
// 메타 프로퍼티로 생성자 함수와 클래스에서 constructor를 참조
// let sports = function(){
//     console.log(new.target);
// }

// sports(); // undefined // new 연산자로 인스턴스를 생성하지않으면 undefined
// new sports(); // function() { console.log(new.target)}
// default constructor 참조

// name 프로퍼티 --------------------------------------------------------- //

// class Sports{
//     constructor(){
//         console.log('Sports',new.target.name);
//     }
// }

// class Soccer extends Sports{
//     constructor(){
//         super();
//         console.log("Soccer:",new.target.name)
//     }
// }

// let sportsObj = new Sports(); // Sports : Sports
// let soccerObj = new Soccer() // Sports: Soccer Soccer: Soccer
