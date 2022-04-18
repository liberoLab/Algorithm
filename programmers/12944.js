/*
평균 구하기
https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
*/

function solution(arr) {
  return arr.reduce((p, c) => p + c, 0) / arr.length;
}

console.log(solution([1, 2, 3, 4]));
