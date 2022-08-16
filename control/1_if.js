// 조건문 Conditional Statement
// if(조건) {}
// if(조건) {} else {}
// if(조건1) {} else if (조건2) {} else {}
let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😍');
}

// if문의 원리는 조건이 true일 경우에만 식이 처리되기에
// 처리하고 싶지 않다면 조건이 false가 되게 설정 
if(2 > 1) {
  console.log('출력되면 안됨!');
} // 이건 true 이기에 처리됨
if(2 < 1) {
  console.log('출력되면 안됨!');
} // 이건 false 이기에 처리 안됨
