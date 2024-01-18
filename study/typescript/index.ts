// *****************************************************************//
// 🟠 변수 타입지정

// 🔘 변수에 타입 지정
let 이름: string = 'kim';
let 나이: number = 30;
let 진실혹은거짓: boolean = true;

// 🔘 union type
let 회원: number | string = 'kim';

// 🟡 대부분 타입지정을 자동으로 해주기 때문에 타입지정문법을 생략할 수 있다.

// *****************************************************************//

// 🔘 배열 자료형에 문자열 속성값 작성
let 회원들: string[] = ['kim', 'park'];

// 🔘 오브젝트 타입 지정
let 회원들2: { member1: string; member2: string } = {
  member1: 'kim1',
  member2: 'park',
};

// 🔘 배열이나 오브젝트 속성값에 union type 지정
let 회원들1: (number | string)[] = [1, '2', 3]; // union type에 () 필수
let 회원obj: { a: string | number } = { a: '123' };

// 🔘 any type : 모든 자료형 허용,

// *****************************************************************//

// 🟠 type 키워드 써서 타입 변수에 담기
// 작명은 대문자로 시작

// 🔘 변수 타입지정
type Animal = string | number | undefined;
let 동물: Animal = 123;

// 🔘 오브젝트 타입지정
type 사람 = {
  name: string;
  age: number;
};

let teacher: 사람 = {
  name: 'john',
  age: 20,
};

// 🔘 오브젝트 속성 몇 개가 선택사항이라면 : ?(물음표 연산자) 추가
type Square = {
  color?: string;
  width: number;
};

let 네모2: Square = {
  width: 100,
};

// *****************************************************************//
// 🟠 함수 타입지정 1.파라미터 2. 리턴

// 🔘 함수 선언식에 타입설정
function 함수1(x: number): number {
  // 파라미터, return에 타입을 지정하면 필수입력 해야 함
  return x * 2;
}
함수1(); //(X)
함수1(1); //(O)

// 🔘 파라미터를 옵션으로 하고 싶다면 '?' 사용 : 함수()를 사용할 때 파라미터 없이도 쓸 수 있다.
function 함수2(x?: number): number {
  return 10;
}
함수2(); // (O)
함수2(1); // (O)

// 🔘 함수에서 return 값을 사용하지 않는경우 void 사용
function 함수3(x: number | string): void {
  console.log(x);
}

// 🔘 함수 type alias 생성 : 함수 type alias는 화살표 함수로만 생성할 수 있음
type 함수타입 = (a: number) => number;

// 🔘 함수 type alias 설정 : 함수표현식에만 type alias 사용 가능
let 함수: 함수타입 = function (a) {
  return 10;
};

// (숙제1) 위 코드에서 회원정보(오브젝트)라는 변수에 타입지정 알아서 해보십시오.
// -> 오브젝트 변수타입지정

// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
//

// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.

// - type 키워드를 쓰든 말든 알아서 합시다.

// 오브젝트 type alias
type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number; // 속성은 함수, 숫자를 넣어서 숫자를 리턴하는 함수
  // 👀 수정: 중괄호 제거하고 타입을 number로 변경
  changeName: () => void; // 속성은 함수, 아무것도 return 하면 안됨
};

// 오브젝트 type alias 적용
let 회원정보: Member = {
  name: 'kim',
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log('하이');
  },
};

// *****************************************************************//

// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.

// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
// 🎈 함수 type alias는 화살표 함수로 정의
// type 함수타입 = (x:number) => number
// 🎈 함수에 type alias 지정하려면 함수표현식에만 가능
//  let 함수:함수타입 = function(a) {return 10}

// 함수선언식
// function 함수(x:number):number { return 10}

// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.
type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/(^0+)/, '');
  return result;
};
function removeDash(x: string): number {
  // 문자열을 수로 바꾸는 함수
  // https://www.codingfactory.net/11026

  let result = x.replace(/-/g, '');
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
function newFunc(str: string, func1: CutType, func2: (x: string) => number) {
  let result1 = func1(str);
  let result2 = func2(result1);
  console.log(result2);
}

newFunc('010-1111-2222', cutZero, removeDash);
