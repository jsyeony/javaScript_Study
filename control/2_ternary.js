// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 표현식 : 거짓인경우 표현식
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('😍');
}
fruit === 'apple' ? console.log('🍎') : console.log('😍');

let emoji = fruit === 'apple' ? '🍎' : '😍';
console.log(emoji);