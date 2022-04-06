/*
2개 뽑아더 더하기
https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript#
*/

/*
내가 풀은 방법
모든 수의 합을 중복없이 새 배열에 넣는 문제이므로 2중 for문을 돌려서 값을 구했다.
첫번째 for문의 배열의 마지막 숫자는 더하기 위한 다른 수가 없기 때문에 i < numbers.length - 1을 해서 제외 한다.
두번째 for문은 앞에서 한 계산을 중복으로 할 필요가 없기 때문에 j = i + 1 로 선언한다.
if문에 includes를 사용해서 배열에 중복 값이 있는지 체크한다.
return 시 .sort((a, b) => a - b)를 사용해서 오름차순으로 정렬한다.
*/
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!answer.includes(numbers[i] + numbers[j])) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));

/*
다른 사람의 풀이
Set 을 이용한 풀이 방법
if문 대신 temp 변수를 선언해서 빈 배열을 만들고 이중 for문의 모든 값을 일단 집어 넣는다.
answer 변수를 만들고 ...(전개연산자)와 new Set을 사용해서 중복값을 삭제한다.
return 전에 .sort((a, b) => a - b)를 사용해서 오름 차순으로 변경한다.

function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
*/
