// 함수표현식에만 type alias 사용가능
var 함수 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
        // 파라미터 number, return number 타입지정 해주기
    },
};
회원정보.plusOne(1);
// 콜백함수 개념
function 함수1() { }
function 함수2() { }
