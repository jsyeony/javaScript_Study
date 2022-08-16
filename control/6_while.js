// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while(num >= 0) {
  console.log(num);
  num --;
}

let isActive = false;
let i = 0;
// 조건에 따라 반복시키고 싶을때는 while(){}
while(isActive) {
  console.log('아직 살아있다!');
  if(i === 10) {
    break;
  }
  i++;
}

// 일단 무조건 한번은 실행시키고 조건을 확인하고 싶을때는 do{}while()
do {
  console.log('do-while 살아있다!');
} while(isActive);