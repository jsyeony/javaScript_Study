// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// if
// ternary
if(num == 2n) {
  console.log('👍');
} else {
  console.log('👎');
}

num == 2n ? console.log('👍') : console.log('👎');

// 선생님 답
if(num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

num % 2 === 0 ? console.log('👍') : console.log('👎');

// 코드를 좀 더 간결하고 반복되지 않게 쓰는 방법은 선언을 해주는 것
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);