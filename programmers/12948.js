//핸드폰 번호 가리기
//https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

/*
 뒤의 4자리만 남기기 위해 for문 hone_number.length - 4 을 조건으로 넣고 temp에 번호 앞 부분을 '*' 로 채워준다.
 그 뒤 temp 와 phone_number.slice(-4)로 뒤의 숫자 4자리만 남기고 자른 뒤 합쳐준다
*/

function solution(phone_number) {
  let answer = '';
  let temp = '';

  for (let i = 0; i < phone_number.length - 4; i++) {
    temp += '*';
  }

  answer = temp + phone_number.slice(-4);

  return answer;
}

//console.log(solution('01033334444'));
