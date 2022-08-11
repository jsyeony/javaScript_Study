// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!
console.log(text);

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
// 한번 할당하면 재할당이 불필요한, 바뀌지않을만한 변수에는 let 보다 const를 사용하는 것이 좋음
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
};
console.log(apple);

// apple이 가지고 있는 객체주소값은 재할당이 안되지만 객체자체는 다른 곳에 있기 때문에 수정이 가능함!! 중요한 포인트✨
apple.color = 'green';
apple.display = '🍏'

console.log(apple);