//! Typescript에서는 변수가 초기 자료형(ex 문자열) 선언되었다면
//! 변수 값을 문자열로밖에 유지를 못한다.
let a = 'Mark';
// a = 39; a라는 변수가  문자열 초기 선언되었기에 정수는 불가능

let aa: number; //number만 들어갈 수 있다.

aa=39;

function hello(b: number){//매개변수는 number만 가능
 
}

//hello("Makr") a type error occur (매개변수 타입형태와 실제 매개변수 타입 불일치)