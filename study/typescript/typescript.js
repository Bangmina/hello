// *****************************************************************//
// 🟠 변수 타입지정
// 🔘 변수에 타입 지정
var 이름 = 'kim';
var 나이 = 30;
var 진실혹은거짓 = true;
// 🔘 union type
var 회원 = 'kim';
// 🟡 대부분 타입지정을 자동으로 해주기 때문에 타입지정문법을 생략할 수 있다.
// *****************************************************************//
// 🔘 배열 자료형에 문자열 속성값 작성
var 회원들 = ['kim', 'park'];
// 🔘 오브젝트 타입 지정
var 회원들2 = {
    member1: 'kim1',
    member2: 'park',
};
// 🔘 배열이나 오브젝트 속성값에 union type 지정
var 회원들1 = [1, '2', 3]; // union type에 () 필수
var 회원obj = { a: '123' };
var 동물 = 123;
var teacher = {
    name: 'john',
    age: 20,
};
var 네모2 = {
    width: 100,
};
// *****************************************************************//
// 🟠 함수 타입지정 1.파라미터 2. 리턴
// 🔘 함수 선언식에 타입설정
function 함수1(x) {
    // 파라미터, return에 타입을 지정하면 필수입력 해야 함
    return x * 2;
}
// 함수1(); //(X)
함수1(1); //(O)
// 🔘 파라미터를 옵션으로 하고 싶다면 '?' 사용 : 함수()를 사용할 때 파라미터 없이도 쓸 수 있다.
function 함수2(x) {
    return 10;
}
함수2(); // (O)
함수2(1); // (O)
// 🔘 함수에서 return 값을 사용하지 않는경우 void 사용
function 함수3(x) {
    console.log(x);
}
// 🔘 함수 type alias 설정 : 함수표현식에만 type alias 사용 가능
var 함수 = function (a) {
    return 10;
};
// 오브젝트 type alias 적용
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('하이');
    },
    // changeName() {
    //   console.log('123');
    // },
};
var cutZero = function (x) {
    var result = x.replace(/(^0+)/, '');
    return result;
};
function removeDash(x) {
    // 문자열을 수로 바꾸는 함수
    // https://www.codingfactory.net/11026
    var result = x.replace(/-/g, '');
    return parseInt(result);
}
// *****************************************************************//
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
function newFunc(str, func1, func2) {
    var result1 = func1(str);
    var result2 = func2(result1);
    console.log(result2);
}
newFunc('010-1111-2222', cutZero, removeDash);
// 파라미터 타입지정 number, return값 타입지정 string
function 함수123(x) {
    return 'x값은 :' + x;
}
function SquareVal(x) {
    return x;
}
