'use strict';

// 속도 조절은 어떻게 할까?
// requestAnimationFrame으로도 속도조절 할 수 있지만,
// setInterval로 속도조절을 할 수도 있음.

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

let xPos = 10;

function draw(){
  context.clearRect(0, 0, canvas.width, canvas.height); 
  context.beginPath(); 
  context.arc(xPos, 150, 10, 0, Math.PI * 2, false); 
  context.fill();

  xPos += 10; 
}

setInterval(draw, 500); 
// 두번째 인자로 duration을 받지? 이거로 속도조절을 하는거임. 1000ms는 1초니까 굉장히 느린 애니메이션이 될 것.
// 그니까 xPos와 duration을 가지고 조절해서 우리가 원하는 느낌의 빠르기를 만들 수 있는거임

// 그럼 setInterval 쓰면 되지 왜 이건 안쓰나?
// requestAnimationFrame 얘가 가지고 있는 최적화 대기, 프레임 유실 방지 등의 장점이 없기 때문에! 
// setInterval는 그냥 무대뽀로 그리라고 하는 메소드인거임.

// 사실 간단한 애니메이션 정도는 setInterval 사용하는게 타이밍 조절도 쉽고 좋음.
// 그러나 requestAnimationFrame으로 타이밍을 조절해야 할 상황이 있기 때문에 이걸로도 할줄은 알아야 함.
