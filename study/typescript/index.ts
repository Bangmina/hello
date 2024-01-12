// function 내함수(x: number | string) {
//   // Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing이라는 스킬을 써야함
//   // 타입스크립트에서 지켜야할 코딩방식

//   // union type등 때문에 어떤 변수가 타입이 아직 불확실하면
//   // if문 등으로 narrowing 해줘야 조작 가능
//   // if문 썼으면 끝까지 써야 안전 else, else if 안쓰면 에러로 잡을 수 있음
//   if (typeof x === 'string') {
//     return x + 1
//   } else {
//     return x + 1
//   }
// }
// 내함수(123)

function 내함수(x: number | string) {
  let array: number[] = []
  // assertion 문법 : 타입을 잠깐 덮어 씌우는 것, assertion 문법은 if문 필요없음
  array[0] = x as number // 왼쪽에 있는 변수로 number로 덮어 씌워라
  // as 문법의 용도
  // 1. narrowing 할 때. 유니온타입을 하나의 타입으로 확장하고 싶을 때
  // 2. 무슨 타입이 들어올지 100% 확실할 때 쓰기
}

function 내함수1(x: number | string) {
  return (x as number) + 1
}
console.log(내함수1('123'))
