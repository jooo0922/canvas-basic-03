'use strict';

// 이제 requestAnimationFrame으로 속도조절을 하는 방법
// 나누기 연산자를 사용하면 됨!

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

let xPos = 10;
let count = 0; // 이걸 사용하면 됨.

function draw(){
  count++;
  // console.log(count); 이걸 찍어보면 프레임 하나가 반복될 때마다 1씩 더해지지

  if (count % 30 === 0) {
    // 이 조건문이 true일 때에만 해당 블록을 실행하라는 것.
    // 즉, count / 30의 나머지가 0일 때에만, 즉, count가 30의 배수가 될 때에만, 즉, 30프레임마다 1번만 실행하라는겨!
    // 그러면 0.5초마다 한번씩 실행이 됨. 왜냐? requestAnimationFrame은 1초에 60프레임을 실행하는게 기본값이니까
    // 여기서 30프레임마다 실행되는거면 1초의 절반인 0.5초인 거지.
    context.clearRect(0, 0, canvas.width, canvas.height); 
    context.beginPath(); 
    context.arc(xPos, 150, 10, 0, Math.PI * 2, false); 
    context.fill();
    
    xPos += 5; 
  }
  
  requestAnimationFrame(draw); 
}

draw();

