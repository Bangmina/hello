type MemberPlus = (x: number) => number;
type Member1 = {
  name: string;
  age: number;
  plusOne: MemberPlus;
  changeName: () => void;
};
let 회원정보1: Member1 = {
  name: 'kim',
  age: 30,
  plusOne: (x) => {
    return x;
  },
  changeName: () => {
    console.log('하이룽');
  },
};

type cutZeroType = (x: string) => string;
let cutZero1: cutZeroType = (x) => {
  return x.replace(/(^0+)/, '');
};

type removeDashType = (x: string) => number;
let removeDash1: removeDashType = (x) => {
  return parseInt(x.replace(/\-/g, ''));
};

type Func1Type = (x: string) => string;
type Func2Type = (x: string) => number;
function sumFunc(str: string, func1: (x: string) => string, func2: Func2Type) {
  let result = func1(str);
  let result2 = func2(result);
  console.log(result2);
}
sumFunc('010-1111-2222', cutZero1, removeDash1);

/**********************************************************************************************/
// 240123 타입스크립트로 HTML 변경과 조작할 때 주의점
let 제목 = document.getElementById('title');
// // 내로잉 way1
// if ( 제목 !== null) {
//   제목.innerHTML = '1231'
// }
// // ✅ 내로잉 way2
// if (제목 instanceof Element) {
//   제목.innerHTML = 'jkl';
// }
// // 내로잉 way3
// let 제목1 = document.getElementById('title') as Element;
// // 내로잉 way4
if (제목?.innerHTML != undefined) {
  // 오브젝트에 붙이는 ?.
  // 1. 제목에 innerHTML이 있으면 출력하고
  // 2. 없으면 undefined 뱉으셈
  제목.innerHTML = '우하';
}
// // 내로잉 way5
// tsconfig.json에서
// "strictNullChecks": true //Null타입 엄격하게 체크
// false로 설정

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
  // 0 Element타입 (광범위하게 엘레먼트를 표현하기 위함)
  // (href, style, class 등 object 상세한 타입 정의 잘 되어 있음)
  // 1 HTMLAnchorElement
  // 2 HTMLHeadingElement
  // 3 HTMLButtonElement
  링크.href = 'https://kakao.com';
}

let 버튼 = document.querySelector('.button');
버튼?.addEventListener('click', function () {});
