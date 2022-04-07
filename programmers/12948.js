//핸드폰 번호 가리기
//https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

function solution(phone_number) {
  let answer = '';
  let temp = '';

  for (let i = 0; i < phone_number.length - 4; i++) {
    temp += '*';
  }

  answer = temp + phone_number.slice(-4);

  return answer;
}

console.log(solution('01033334444'));
