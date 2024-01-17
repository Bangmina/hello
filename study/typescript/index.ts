type 함수타입 = (a: string) => number; // 1. 함수타입은 ()=>{} 모양으로 설정

// 함수표현식에만 type alias 사용가능
let 함수: 함수타입 = function (a) {
  return 10;
};
// 참고
// function 함수() {} // 함수선언식

// object안에 함수 만들 수 있음

type 함수number = (a: number) => number;
let 회원정보 = {
  name: 'kim',
  plusOne(a: number): number {
    return a + 1;
    // 파라미터 number, return number 타입지정 해주기
  },
};
회원정보.plusOne(1);

// 콜백함수 개념
function 함수1() {}
function 함수2() {}

// filter
function solution(array, height) {
  var answer = 0;
  answer = array.filter((val) => val > height);

  console.log(answer.length);
  return answer;
}

solution([149, 180, 192, 170], 167);
